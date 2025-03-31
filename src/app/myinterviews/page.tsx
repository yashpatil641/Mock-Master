"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, RefreshCw, Star, BarChart2 } from "lucide-react";

interface Interview {
	id: string;
	role: string;
	date: Date;
	score: number;
	feedback: string;
	status: "completed" | "in-progress" | "scheduled";
	tags: string[];
}

export default function MyInterviewsPage() {
	const [interviews, setInterviews] = useState<Interview[]>([
		{
			id: "1",
			role: "Frontend Developer",
			date: new Date(2025, 2, 5),
			score: 85,
			feedback: "Strong React skills, could improve on system design questions.",
			status: "completed",
			tags: ["React", "Frontend", "Mid-level"]
		},
		{
			id: "2",
			role: "Backend Engineer",
			date: new Date(2025, 2, 1),
			score: 72,
			feedback: "Good database knowledge, needs to work on API design patterns.",
			status: "completed",
			tags: ["Node.js", "Backend", "Senior"]
		},
		{
			id: "3",
			role: "DevOps Engineer",
			date: new Date(2025, 1, 20),
			score: 90,
			feedback: "Excellent knowledge of CI/CD pipelines and containerization.",
			status: "completed",
			tags: ["DevOps", "AWS", "Docker"]
		},
		{
			id: "4",
			role: "Full Stack Developer",
			date: new Date(2025, 1, 15),
			score: 68,
			feedback: "Strong frontend skills but backend knowledge needs improvement.",
			status: "completed",
			tags: ["React", "Node.js", "Full Stack"]
		}
	]);

	const getScoreColor = (score: number) => {
		if (score >= 85) return "text-green-400";
		if (score >= 70) return "text-yellow-400";
		if (score >= 50) return "text-orange-400";
		return "text-red-500";
	};

	const retakeInterview = (id: string) => {
		console.log(`Retaking interview ${id}`);
		// Implementation to retake the interview
	};

	const viewDetails = (id: string) => {
		console.log(`Viewing details for interview ${id}`);
		// Implementation to view interview details
	};

	return (
		<div className="container mx-auto py-8 px-4 mt-20 mb-40">
			<div className="mb-8">
				<h1 className="text-3xl font-bold mb-2">My Interviews</h1>
				<p className="text-gray-500">Review your past interview performance and practice again</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{interviews.map((interview) => (
					<Card key={interview.id} className="p-6 hover:bg-gray-800/50 bg-gray-800/30 transition-all">
						<div className="flex justify-between items-start mb-4">
							<div>
								<h2 className="text-xl font-bold">{interview.role}</h2>
							</div>
							<div className={`px-3 py-1 rounded-full ${getScoreColor(interview.score).replace('text-', 'bg-').replace('500', '900')} ${getScoreColor(interview.score)}`}>
								<span className="font-bold text-xl">{interview.score}</span>
								<span className="text-sm ml-0.5">/100</span>
							</div>
						</div>

						<div className="flex items-center text-gray-400 text-sm mb-4">
							<Calendar size={14} className="mr-1" />
							<span>{interview.date.toLocaleDateString()}</span>
							<Clock size={14} className="ml-4 mr-1" />
							<span>{interview.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
						</div>
						<div className="flex flex-wrap gap-2 mb-4">
							{interview.tags.map((tag, index) => (
								<Badge key={index} variant="outline" className="bg-gray-700/50">
									{tag}
								</Badge>
							))}
						</div>

						<p className="text-gray-300 text-sm mb-6 line-clamp-2">
							{interview.feedback}
						</p>

						<div className="flex justify-between mt-auto">
							<Button
								variant="outline"
								size="sm"
								className="flex items-center gap-1"
								onClick={() => viewDetails(interview.id)}
							>
								<BarChart2 size={14} /> Details
							</Button>

							<Button
								size="sm"
								className="flex items-center gap-1"
								onClick={() => retakeInterview(interview.id)}
							>
								<RefreshCw size={14} /> Practice Again
							</Button>
						</div>
					</Card>
				))}
			</div>

			{interviews.length === 0 && (
				<div className="text-center py-12">
					<h3 className="text-xl font-medium mb-2">No interviews yet</h3>
					<p className="text-gray-400 mb-6">Take your first interview to see results here</p>
					<Button>Start an Interview</Button>
				</div>
			)}
		</div>
	);
}

