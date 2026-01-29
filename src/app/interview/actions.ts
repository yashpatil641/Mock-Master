"use server";

import { model } from "../../lib/gemini";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type InterviewInfoType = {
  title: string;
  position: string;
  experience: string;
  description: string;
  company?: string;
  numberOfQuestions?: number; 
  focusAreas?: string[]; 
  difficulty?: "easy" | "medium" | "hard"; 
};

export type QuestionType = {
  id: number;
  text: string;
  expectedDuration: number;
  tips: string;
};

export type AnswerType = {
  duration: number;
  transcript: string;
};

export type AnalysisResult = {
  overallScore: number;
  categories: Array<{
    name: string;
    score: number;
  }>;
  strengths: string[];
  improvements: string[];
  questionAnalysis: Array<{
    id: number;
    score: number;
    strengths: string[];
    improvements: string[];
    timeAssessment: string;
    keyPoints: string[];
  }>;
};

const generateQuestions = async (
  interviewInfo: InterviewInfoType
): Promise<QuestionType[] | { error: string }> => {
  const numQuestions = interviewInfo.numberOfQuestions || 5;
  
  const focusAreasText = interviewInfo.focusAreas && interviewInfo.focusAreas.length > 0
    ? `\nFocus on these specific areas: ${interviewInfo.focusAreas.join(", ")}`
    : "";
  
  const difficultyGuidance = interviewInfo.difficulty
    ? `\nDifficulty Level: ${interviewInfo.difficulty.toUpperCase()} - Adjust question complexity accordingly.`
    : "";

  const prompt = `
  You are an expert interviewer. Generate exactly ${numQuestions} interview questions for a ${interviewInfo.position} position that requires ${interviewInfo.experience} experience level.
  
  Job Description: ${interviewInfo.description}
  ${focusAreasText}${difficultyGuidance}
  
  Requirements for each question:
  1. Must be challenging, open-ended, and highly relevant to the ${interviewInfo.position} role
  2. Should assess different aspects: technical skills, problem-solving, teamwork, leadership, past experience, etc.
  3. Expected duration should be between 60-180 seconds based on question complexity
  4. Provide practical tips that help candidates structure effective answers
  5. Questions should be tailored to the ${interviewInfo.experience} experience level
  
  Return EXACTLY ${numQuestions} questions in this valid JSON array format:
  [
    {
      "id": 1,
      "text": "Detailed question text here?",
      "expectedDuration": 120,
      "tips": "Specific tips for answering this question effectively. Use STAR method, provide examples, etc."
    },
    {
      "id": 2,
      "text": "Detailed question text here?",
      "expectedDuration": 90,
      "tips": "Specific tips for answering this question effectively."
    }
  ]
  
  CRITICAL RULES:
  - Return ONLY the JSON array, no markdown, no explanation, no additional text
  - Generate exactly ${numQuestions} questions
  - Each question must be unique and test different competencies
  - Questions should be specific to ${interviewInfo.position}, not generic
  - For ${interviewInfo.experience} level, questions should be appropriately challenging
  `;

  try {
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    const jsonPattern = /\[\s*\{[\s\S]*\}\s*\]/;
    const match = responseText.match(jsonPattern);

    if (!match) {
      console.error("Failed to extract valid JSON from AI response");
      return { error: "Failed to extract valid JSON from AI response" };
    }

    try {
      const questions = JSON.parse(match[0]) as QuestionType[];
      
      if (questions.length !== numQuestions) {
        console.warn(`Expected ${numQuestions} questions but got ${questions.length}`);
      }
      
      return questions;
    } catch (parseError) {
      const errorMessage = parseError instanceof Error ? parseError.message : "Unknown parsing error";
      console.error("Failed to parse questions JSON:", errorMessage);
      return { error: `Failed to parse questions JSON: ${errorMessage}` };
    }
  } catch (generateError) {
    const errorMessage = generateError instanceof Error ? generateError.message : "Unknown generation error";
    console.error("Error generating questions with Gemini:", errorMessage);
    return { error: `Error generating questions with Gemini: ${errorMessage}` };
  }
};

export const getInterviewQuestions = async (
  interviewInfo: InterviewInfoType
): Promise<QuestionType[] | { error: string }> => {
  const questions = await generateQuestions(interviewInfo);
  return questions;
};


export const getQuestionsFromTemplate = async (
  templateId: string,
  userId: string,
  numberOfQuestions?: number
): Promise<QuestionType[] | { error: string }> => {
  try {

    const template = await prisma.template.findFirst({
      where: {
        id: templateId,
        userId: userId, 
      },
    });

    if (!template) {
      return { error: "Template not found or access denied" };
    }

    const interviewInfo: InterviewInfoType = {
      title: template.name,
      position: template.role,
      experience: template.experienceLevel,
      description: template.description,
      numberOfQuestions: numberOfQuestions,
    };

    return await generateQuestions(interviewInfo);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error generating questions from template:", errorMessage);
    return { error: errorMessage };
  }
};


const extractAndParseJSON = (responseText: string): any => {
  
  let cleanedText = responseText.replace(/```json\s*|\s*```/g, '').trim();
  
  const jsonPattern = /\{[\s\S]*\}/;
  const match = cleanedText.match(jsonPattern);
  
  if (match) {
    cleanedText = match[0];
  }
  
  
  const openBraceIndex = cleanedText.indexOf('{');
  if (openBraceIndex > 0) {
    cleanedText = cleanedText.substring(openBraceIndex);
  }
  
  
  const closeBraceIndex = cleanedText.lastIndexOf('}');
  if (closeBraceIndex !== -1 && closeBraceIndex < cleanedText.length - 1) {
    cleanedText = cleanedText.substring(0, closeBraceIndex + 1);
  }
  
  return JSON.parse(cleanedText);
};

export const analyzeAnswers = async (
  answers: Record<number, AnswerType>,
  questions: QuestionType[],
  interviewInfo: InterviewInfoType
): Promise<AnalysisResult> => {
  try {
    const prompt = `
      You are an expert interviewer analyzing interview responses. You MUST return ONLY valid JSON with no additional text.
      
      INTERVIEW DETAILS:
      Position: ${interviewInfo.position}
      Experience Level: ${interviewInfo.experience}
      Job Description: ${interviewInfo.description}
      
      QUESTIONS AND ANSWERS:
      ${questions
        .map((q) => {
          const answer = answers[q.id];
          return `
          Question ${q.id}: ${q.text}
          Expected Duration: ${q.expectedDuration} seconds
          Actual Duration: ${answer ? answer.duration : 0} seconds
          Answer: ${answer?.transcript || "No answer provided"}
        `;
        })
        .join("\n\n")}
      
      Analyze each answer based on:
      1. Relevance to the question and role
      2. Depth and detail of the response
      3. Communication clarity
      4. Use of examples and specific details
      5. Time management (compared to expected duration)
      6. Demonstration of required skills for ${interviewInfo.experience} level
      
      Return ONLY this exact JSON structure with no extra text:
      {
        "overallScore": 75,
        "categories": [
          {"name": "Technical Knowledge", "score": 80},
          {"name": "Communication Skills", "score": 70},
          {"name": "Problem Solving", "score": 75},
          {"name": "Role Relevance", "score": 85},
          {"name": "Overall Impression", "score": 75}
        ],
        "strengths": [
          "Clear communication style",
          "Relevant experience mentioned",
          "Good understanding of role requirements"
        ],
        "improvements": [
          "Provide more specific examples",
          "Structure answers better using STAR method",
          "Expand on technical details"
        ],
        "questionAnalysis": [
          {
            "id": 1,
            "score": 75,
            "strengths": ["Good initial approach", "Clear thinking process"],
            "improvements": ["Need more specific examples", "Could be more structured"],
            "timeAssessment": "Appropriate duration for the response",
            "keyPoints": ["Mentioned key concepts", "Showed problem-solving approach"]
          }
        ]
      }
      
      IMPORTANT: Include analysis for ALL ${questions.length} questions in the questionAnalysis array.
    `;

    console.log("Sending request to Gemini API...");
    const result = await model.generateContent(prompt);
    const responseText = result.response.text().trim();
    
    console.log("Raw AI response:", responseText);

    try {
      const jsonObject = JSON.parse(responseText) as AnalysisResult;
      console.log("Successfully parsed JSON on first attempt");
      return jsonObject;
    } catch (firstError) {
      const firstErrorMessage = firstError instanceof Error ? firstError.message : "Unknown first parsing error";
      console.log("First JSON parse failed, trying extraction method...");
      
      try {

        const jsonObject = extractAndParseJSON(responseText) as AnalysisResult;
        console.log("Successfully parsed JSON after extraction");
        return jsonObject;
      } catch (secondError) {
        const secondErrorMessage = secondError instanceof Error ? secondError.message : "Unknown second parsing error";
        console.error("Both JSON parsing methods failed:", {
          firstError: firstErrorMessage,
          secondError: secondErrorMessage,
          responseText: responseText
        });
        

        return createFallbackAnalysis(questions);
      }
    }
  } catch (mainError) {
    const errorMessage = mainError instanceof Error ? mainError.message : "Unknown analysis error";
    console.error("Error in analyzeAnswers:", errorMessage);
    
    return createFallbackAnalysis(questions);
  }
};

const createFallbackAnalysis = (questions: QuestionType[]): AnalysisResult => {
  return {
    overallScore: 50,
    categories: [
      {"name": "Technical Knowledge", "score": 50},
      {"name": "Communication Skills", "score": 50},
      {"name": "Problem Solving", "score": 50},
      {"name": "Role Relevance", "score": 50},
      {"name": "Overall Impression", "score": 50}
    ],
    strengths: [
      "Completed the interview process",
      "Provided responses to questions",
      "Demonstrated engagement"
    ],
    improvements: [
      "Analysis unavailable due to processing error",
      "Please try the interview again for detailed feedback",
      "Consider speaking more clearly for better transcription"
    ],
    questionAnalysis: questions.map(q => ({
      id: q.id,
      score: 50,
      strengths: ["Response provided"],
      improvements: ["Analysis unavailable"],
      timeAssessment: "Analysis unavailable",
      keyPoints: ["Analysis unavailable"]
    }))
  };
};


export const saveInterviewResults = async (
  userId: string,
  interviewInfo: InterviewInfoType,
  questions: QuestionType[],
  answers: Record<number, AnswerType>,
  results: AnalysisResult
): Promise<{ success: true; interviewId: number } | { success: false; error: string }> => {
  try {

    const totalDuration = Object.values(answers).reduce((sum, answer) => sum + answer.duration, 0);
    
    const savedInterview = await prisma.$transaction(async (tx) => {
      const interview = await tx.interview.create({
        data: {
          title: interviewInfo.title,
          company: interviewInfo.company || "Not specified",
          position: interviewInfo.position,
          score: results.overallScore,
          duration: Math.ceil(totalDuration / 60), 
          feedback: JSON.stringify({
            categories: results.categories,
            strengths: results.strengths,
            improvements: results.improvements,
            questionAnalysis: results.questionAnalysis
          }),
          userId: userId,
        },
      });

      for (const question of questions) {
        const createdQuestion = await tx.question.create({
          data: {
            text: question.text,
            expectedDuration: question.expectedDuration,
            tips: question.tips,
            interviewId: interview.id,
          },
        });

        
        const answer = answers[question.id];
        if (answer) {
          await tx.answer.create({
            data: {
              transcript: answer.transcript,
              duration: answer.duration,
              questionId: createdQuestion.id,
            },
          });
        }
      }

      return interview;
    });

    console.log("Interview successfully saved with ID:", savedInterview.id);
    return { success: true, interviewId: savedInterview.id };

  } catch (saveError) {
    const errorMessage = saveError instanceof Error ? saveError.message : "Unknown save error";
    console.error("Error saving interview:", errorMessage);
    return { success: false, error: errorMessage };
  }
};


export const getUserInterviews = async (userId: string) => {
  try {
    const interviews = await prisma.interview.findMany({
      where: {
        userId: userId,
      },
      include: {
        questions: {
          include: {
            answers: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { success: true, interviews };
  } catch (fetchError) {
    const errorMessage = fetchError instanceof Error ? fetchError.message : "Unknown fetch error";
    console.error("Error fetching user interviews:", errorMessage);
    return { success: false, error: errorMessage };
  }
};


export const getInterviewById = async (interviewId: number, userId: string) => {
  try {
    const interview = await prisma.interview.findFirst({
      where: {
        id: interviewId,
        userId: userId, 
      },
      include: {
        questions: {
          include: {
            answers: true,
          },
        },
      },
    });

    if (!interview) {
      return { success: false, error: "Interview not found or access denied" };
    }

    return { success: true, interview };
  } catch (fetchError) {
    const errorMessage = fetchError instanceof Error ? fetchError.message : "Unknown fetch error";
    console.error("Error fetching interview:", errorMessage);
    return { success: false, error: errorMessage };
  }
};


export const deleteInterview = async (interviewId: number, userId: string) => {
  try {
  
    const interview = await prisma.interview.findFirst({
      where: {
        id: interviewId,
        userId: userId,
      },
    });

    if (!interview) {
      return { success: false, error: "Interview not found or access denied" };
    }


    await prisma.interview.delete({
      where: {
        id: interviewId,
      },
    });

    return { success: true };
  } catch (deleteError) {
    const errorMessage = deleteError instanceof Error ? deleteError.message : "Unknown delete error";
    console.error("Error deleting interview:", deleteError);
    return { success: false, error: errorMessage };
  }
};


export const createTemplate = async (
  userId: string,
  templateData: {
    name: string;
    role: string;
    experienceLevel: string;
    description: string;
  }
) => {
  try {
    const template = await prisma.template.create({
      data: {
        name: templateData.name,
        role: templateData.role,
        experienceLevel: templateData.experienceLevel,
        description: templateData.description,
        userId: userId,
      },
    });

    return { success: true, template };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error creating template:", errorMessage);
    return { success: false, error: errorMessage };
  }
};

export const getUserTemplates = async (userId: string) => {
  try {
    const templates = await prisma.template.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { success: true, templates };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error fetching templates:", errorMessage);
    return { success: false, error: errorMessage };
  }
};


export const getTemplateById = async (templateId: string, userId: string) => {
  try {
    const template = await prisma.template.findFirst({
      where: {
        id: templateId,
        userId: userId,
      },
    });

    if (!template) {
      return { success: false, error: "Template not found or access denied" };
    }

    return { success: true, template };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error fetching template:", errorMessage);
    return { success: false, error: errorMessage };
  }
};


export const updateTemplate = async (
  templateId: string,
  userId: string,
  updates: {
    name?: string;
    role?: string;
    experienceLevel?: string;
    description?: string;
  }
) => {
  try {
    
    const existing = await prisma.template.findFirst({
      where: {
        id: templateId,
        userId: userId,
      },
    });

    if (!existing) {
      return { success: false, error: "Template not found or access denied" };
    }

    const template = await prisma.template.update({
      where: {
        id: templateId,
      },
      data: updates,
    });

    return { success: true, template };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error updating template:", errorMessage);
    return { success: false, error: errorMessage };
  }
};


export const deleteTemplate = async (templateId: string, userId: string) => {
  try {
    
    const template = await prisma.template.findFirst({
      where: {
        id: templateId,
        userId: userId,
      },
    });

    if (!template) {
      return { success: false, error: "Template not found or access denied" };
    }

    await prisma.template.delete({
      where: {
        id: templateId,
      },
    });

    return { success: true };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error deleting template:", errorMessage);
    return { success: false, error: errorMessage };
  }
};