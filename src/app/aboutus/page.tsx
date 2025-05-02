import { Glow, GlowArea } from "@/components/glow";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FaRobot, 
  FaMicrophone, 
  FaChartLine, 
  FaGraduationCap, 
  FaClipboardCheck, 
  FaLaptopCode, 
  FaBrain,
  FaUserTie,
  FaRegLightbulb,
  FaUsers,
  FaCertificate
} from "react-icons/fa";
import { MdVideocam, MdFeedback, MdTimer, MdQuestionAnswer } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { Sparkles, Mic, Clock, Users, Star, BookCheck } from "lucide-react";

export default function AboutMockMaster() {
  return (
    <div className="min-h-screen bg-[#0E1525] text-white">
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 mt-10">About Mock Master</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The intelligent interview preparation platform designed by students, for students
        </p>
      </div>

      {/* Main Overview */}
      <GlowArea className="mb-16">
        <Glow color="blue" className="rounded-xl">
          <Card className="rounded-xl overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <div className="text-white text-4xl flex items-center gap-3">
                <FaRobot className="text-5xl" />
                <span>Mock Master</span>
              </div>
            </div>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">What is Mock Master?</h2>
                  <p className="mb-4">
                    Mock Master is an advanced AI-powered interview preparation platform developed at IIITDMJ. 
                    Our application simulates realistic interview experiences, provides personalized feedback, 
                    and helps students master the skills needed to excel in technical and non-technical interviews.
                  </p>
                  <p>
                    Whether you're preparing for a software engineering role, an electronics position, 
                    or any professional interview, Mock Master adapts to your specific needs and helps you 
                    build confidence through practice.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                      <FaRobot className="text-blue-600 dark:text-blue-300" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">AI-Powered Interviews</h3>
                      <p className="text-muted-foreground">Realistic simulations with adaptive questioning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                      <MdFeedback className="text-blue-600 dark:text-blue-300" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Instant Feedback</h3>
                      <p className="text-muted-foreground">Detailed analysis of your responses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                      <FaChartLine className="text-blue-600 dark:text-blue-300" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Performance Tracking</h3>
                      <p className="text-muted-foreground">Monitor improvement with data-driven insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Glow>
      </GlowArea>

      {/* Why Mock Master */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Mock Master?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-4">
                  <FaRegLightbulb size={28} className="text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Learn By Doing</h3>
                <p>Practice makes perfect. Gain confidence through repeated, realistic interview simulations.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-4">
                  <FaBrain size={28} className="text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Personalization</h3>
                <p>Our AI adapts to your performance, focusing on areas where you need the most improvement.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-4">
                  <FaUsers size={28} className="text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Built by Students</h3>
                <p>Created by ECE students who understand the challenges of technical interviews firsthand.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <GlowArea>
            <Glow color="blue" className="rounded-xl h-full">
              <Card className="rounded-xl h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FaUserTie className="text-blue-600 dark:text-blue-300" size={24} />
                    <CardTitle>AI Interview Simulator</CardTitle>
                  </div>
                  <CardDescription>Experience realistic interview scenarios</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <MdQuestionAnswer className="text-blue-600 dark:text-blue-300" size={18} />
                      <span>Dynamic question generation based on job role</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MdVideocam className="text-blue-600 dark:text-blue-300" size={18} />
                      <span>Video and audio recording capabilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <MdTimer className="text-blue-600 dark:text-blue-300" size={18} />
                      <span>Timed response settings to simulate pressure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TbTargetArrow className="text-blue-600 dark:text-blue-300" size={18} />
                      <span>Industry-specific question banks</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Glow>
          </GlowArea>
          
          <GlowArea>
            <Glow color="blue" className="rounded-xl h-full">
              <Card className="rounded-xl h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MdFeedback className="text-blue-600 dark:text-blue-300" size={24} />
                    <CardTitle>Comprehensive Feedback</CardTitle>
                  </div>
                  <CardDescription>Detailed analysis of your performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <FaMicrophone className="text-blue-600 dark:text-blue-300" size={18} />
                      <span>Speech clarity and confidence assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaClipboardCheck className="text-blue-600 dark:text-blue-300" size={18} />
                      <span>Technical accuracy evaluation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaChartLine className="text-blue-600 dark:text-blue-300" size={18} />
                      <span>Progress tracking across multiple sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaLaptopCode className="text-blue-600 dark:text-blue-300" size={18} />
                      <span>Code evaluation for technical roles</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Glow>
          </GlowArea>
        </div>
      </div>

      {/* Interview Types */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Specialized Interview Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <FaLaptopCode className="text-blue-600 dark:text-blue-300" size={20} />
                <CardTitle>Technical Interviews</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  <span>Software Engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  <span>Electronics Engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  <span>Data Science</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  <span>Machine Learning</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <FaUserTie className="text-blue-600 dark:text-blue-300" size={20} />
                <CardTitle>HR Interviews</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  <span>Behavioral Questions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  <span>Situational Scenarios</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  <span>Cultural Fit Assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  <span>Strength & Weakness Discussions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-blue-600 dark:text-blue-300" size={20} />
                <CardTitle>Campus Placements</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  <span>Aptitude Test Preparation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  <span>Group Discussion Simulation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  <span>On-Campus Interview Questions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                  <span>Resume-Based Questions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Student Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-muted/10">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} fill="currentColor" className="text-yellow-500" size={20} />
                  ))}
                </div>
                <p className="mb-4 italic">
                  "Mock Master helped me ace my technical interview at Google. The AI feedback pinpointed 
                  weaknesses in my responses that I wouldn't have caught otherwise. Highly recommended!"
                </p>
                <p className="font-semibold">- Priya S., CSE Graduate</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-muted/10">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} fill="currentColor" className="text-yellow-500" size={20} />
                  ))}
                </div>
                <p className="mb-4 italic">
                  "As an ECE student interviewing for core companies, I struggled with technical questions. 
                  After just 2 weeks with Mock Master, my confidence improved tremendously. I received offers from 3 companies!"
                </p>
                <p className="font-semibold">- Rahul K., ECE Student</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>



      {/* Team Credit */}
      <div className="text-center mb-16">
        <p className="text-muted-foreground">
          Developed by Yash Patel & Anirudh Sharma, Electronics & Communication Engineering, IIITDMJ
        </p>
      </div>


    </section>
    </div>
  );
}