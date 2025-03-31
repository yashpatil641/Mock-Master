"use client";


import { 
  Bell, 
  Shield, 
  HelpCircle 
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
	Edit, Mail, Phone, User, Calendar, Award, BarChart3,
	Check, Clock, X, ChevronRight, Save, Settings, FileText,
	Github, Linkedin, Twitter, Globe
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function ProfilePage() {
	// Expanded mock user data
	const [user, setUser] = useState({
		name: "Sarah Johnson",
		email: "sarah.johnson@gmail.com",
		phone: "+1 (555) 234-5678",
		bio: "Senior software engineer with 5+ years of experience in full-stack development. Passionate about building intuitive UIs and scalable backend systems. Currently preparing for senior engineering interviews.",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
		location: "San Francisco, CA",
		joinDate: "January 2023",
		socialLinks: {
			linkedin: "linkedin.com/in/sarahjohnson",
			github: "github.com/sarahj",
			twitter: "twitter.com/sarahj_dev",
			website: "sarahjohnsondev.com"
		},
		skills: ["JavaScript", "React", "Node.js", "TypeScript", "Python", "System Design", "Algorithms"],
		experience: [
			{ company: "TechCorp Inc.", role: "Senior Frontend Engineer", duration: "2021-Present" },
			{ company: "DevStudio", role: "Frontend Developer", duration: "2018-2021" }
		],
		education: { degree: "B.S. Computer Science", school: "Stanford University", year: "2018" },
	});

	// Mock interview statistics
	const [stats, setStats] = useState({
		totalInterviews: 24,
		completedInterviews: 18,
		averageScore: 8.2,
		timeSpent: "32 hours",
		strongCategories: ["System Design", "JavaScript", "Algorithms"],
		improvementAreas: ["Distributed Systems", "SQL Optimization"]
	});

	// Mock interview history
	const [interviewHistory, setInterviewHistory] = useState([
		{
			id: 1,
			title: "Senior Frontend Engineer Interview",
			company: "TechGiant Inc.",
			date: "Mar 15, 2025",
			score: 9.2,
			duration: "45 minutes",
			feedback: "Great communication and problem-solving skills. Strong understanding of React optimization techniques."
		},
		{
			id: 2,
			title: "Full Stack Developer Interview",
			company: "StartApp",
			date: "Mar 10, 2025",
			score: 8.5,
			duration: "52 minutes",
			feedback: "Excellent frontend knowledge. Could improve on database scaling questions."
		},
		{
			id: 3,
			title: "System Design Practice",
			company: "Self-practice",
			date: "Mar 5, 2025",
			score: 7.8,
			duration: "65 minutes",
			feedback: "Good fundamental approach. Work on breaking down problems into more manageable components."
		},
		{
			id: 4,
			title: "Behavioral Interview Practice",
			company: "Mock Session",
			date: "Feb 28, 2025",
			score: 9.0,
			duration: "38 minutes",
			feedback: "Excellent storytelling and structured responses. Leadership examples were particularly strong."
		},
	]);

	// Form state for editing profile
	const [editForm, setEditForm] = useState({ ...user });
	const [isEditing, setIsEditing] = useState(false);

	// Handle saving edited profile
	const handleSaveProfile = () => {
		setUser(editForm);
		setIsEditing(false);
	};

	return (
		<div className="min-h-screen  text-white pb-20 pt-32">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* Profile Header Card */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="relative bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700 p-8 mb-8"
				>
					<div className="flex flex-col md:flex-row items-center md:items-start gap-8">
						{/* Avatar */}
						<motion.div
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="relative"
						>
							<img
								src={user.avatar}
								alt={user.name}
								className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-500/80 shadow-lg shadow-cyan-500/20"
							/>
							<div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-gray-800"></div>
						</motion.div>

						{/* Basic Info */}
						<div className="flex-1 text-center md:text-left">
							<h1 className="text-3xl font-bold mb-2">{user.name}</h1>
							<div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mb-4">
								<User size={16} />
								<span>{user.education.degree}</span>
								<span className="mx-1">•</span>
								<span>{user.location}</span>
								<span className="mx-1">•</span>
								<Calendar size={16} className="ml-1" />
								<span>Joined {user.joinDate}</span>
							</div>

							<p className="text-gray-300 mb-6 max-w-2xl">{user.bio}</p>

							{/* Contact Info */}
							<div className="flex flex-wrap gap-y-2 gap-x-6 mb-6">
								<div className="flex items-center gap-2 text-gray-300">
									<Mail size={16} className="text-cyan-400" />
									<span>{user.email}</span>
								</div>
								<div className="flex items-center gap-2 text-gray-300">
									<Phone size={16} className="text-cyan-400" />
									<span>{user.phone}</span>
								</div>
							</div>

							{/* Social Links */}
							<div className="flex gap-3">
								<a href={`https://${user.socialLinks.linkedin}`} target="_blank" rel="noopener noreferrer"
									className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors">
									<Linkedin size={18} className="text-blue-400" />
								</a>
								<a href={`https://${user.socialLinks.github}`} target="_blank" rel="noopener noreferrer"
									className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors">
									<Github size={18} className="text-white" />
								</a>
								<a href={`https://${user.socialLinks.twitter}`} target="_blank" rel="noopener noreferrer"
									className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors">
									<Twitter size={18} className="text-blue-400" />
								</a>
								<a href={`https://${user.socialLinks.website}`} target="_blank" rel="noopener noreferrer"
									className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors">
									<Globe size={18} className="text-cyan-400" />
								</a>
							</div>
						</div>

						{/* Edit Profile Button */}
						<Dialog>
							<DialogTrigger asChild>
								<Button variant="outline" className="absolute top-6 right-6 flex items-center gap-2 bg-gray-700 hover:bg-gray-600 border-gray-600 text-white">
									<Edit size={16} />
									Edit Profile
								</Button>
							</DialogTrigger>
							<DialogContent className="sm:max-w-[600px] bg-gray-800 border border-gray-700 text-white">
								<DialogHeader>
									<DialogTitle>Edit Profile</DialogTitle>
								</DialogHeader>
								<div className="grid gap-4 py-4">
									<div className="grid grid-cols-4 items-center gap-4">
										<label className="text-right text-sm">Name</label>
										<Input
											value={editForm.name}
											onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
											className="col-span-3 bg-gray-700 border-gray-600"
										/>
									</div>
									<div className="grid grid-cols-4 items-center gap-4">
										<label className="text-right text-sm">Email</label>
										<Input
											value={editForm.email}
											onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
											className="col-span-3 bg-gray-700 border-gray-600"
										/>
									</div>
									<div className="grid grid-cols-4 items-center gap-4">
										<label className="text-right text-sm">Phone</label>
										<Input
											value={editForm.phone}
											onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
											className="col-span-3 bg-gray-700 border-gray-600"
										/>
									</div>
									<div className="grid grid-cols-4 items-center gap-4">
										<label className="text-right text-sm">Location</label>
										<Input
											value={editForm.location}
											onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
											className="col-span-3 bg-gray-700 border-gray-600"
										/>
									</div>
									<div className="grid grid-cols-4 items-start gap-4">
										<label className="text-right text-sm pt-2">Bio</label>
										<Textarea
											value={editForm.bio}
											onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
											className="col-span-3 min-h-[100px] bg-gray-700 border-gray-600"
										/>
									</div>
								</div>
								<div className="flex justify-end gap-3">
									<DialogTrigger asChild>
										<Button variant="secondary" className="bg-gray-700 hover:bg-gray-600">
											Cancel
										</Button>
									</DialogTrigger>
									<Button
										onClick={handleSaveProfile}
										className="bg-cyan-600 hover:bg-cyan-700 text-white flex items-center gap-2"
									>
										<Save size={16} />
										Save Changes
									</Button>
								</div>
							</DialogContent>
						</Dialog>
					</div>

					{/* Skills Section */}
					<div className="mt-8 pt-6 border-t border-gray-700">
						<h3 className="text-lg font-medium mb-4">Skills & Expertise</h3>
						<div className="flex flex-wrap gap-2">
							{user.skills.map((skill, index) => (
								<Badge key={index} className="bg-cyan-900/50 hover:bg-cyan-800/50 text-cyan-100 border border-cyan-700/50 px-3 py-1">
									{skill}
								</Badge>
							))}
						</div>
					</div>
				</motion.div>

				{/* Tabs Section */}
				<Tabs defaultValue="stats" className="w-full">
					<TabsList className="grid grid-cols-3 max-w-md mx-auto bg-gray-700/50">
						<TabsTrigger value="stats" className="data-[state=active]:bg-cyan-600">
							<BarChart3 size={16} className="mr-2" />
							Statistics
						</TabsTrigger>
						<TabsTrigger value="history" className="data-[state=active]:bg-cyan-600">
							<Clock size={16} className="mr-2" />
							Interview History
						</TabsTrigger>
						<TabsTrigger value="settings" className="data-[state=active]:bg-cyan-600">
							<Settings size={16} className="mr-2" />
							Settings
						</TabsTrigger>
					</TabsList>

					{/* Stats Tab Content */}
					<TabsContent value="stats" className="mt-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Overview Card */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4 }}
								className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 p-6"
							>
								<h3 className="text-xl font-medium mb-6 flex items-center gap-2">
									<FileText size={20} className="text-cyan-400" />
									Overview
								</h3>

								<div className="grid grid-cols-2 gap-6">
									<div className="bg-gray-700/50 rounded-lg p-4 text-center">
										<p className="text-gray-400 text-sm mb-1">Total Interviews</p>
										<p className="text-3xl font-bold text-white">{stats.totalInterviews}</p>
									</div>
									<div className="bg-gray-700/50 rounded-lg p-4 text-center">
										<p className="text-gray-400 text-sm mb-1">Completed</p>
										<p className="text-3xl font-bold text-white">{stats.completedInterviews}</p>
									</div>
									<div className="bg-gray-700/50 rounded-lg p-4 text-center">
										<p className="text-gray-400 text-sm mb-1">Average Score</p>
										<p className="text-3xl font-bold text-cyan-400">{stats.averageScore}</p>
									</div>
									<div className="bg-gray-700/50 rounded-lg p-4 text-center">
										<p className="text-gray-400 text-sm mb-1">Time Spent</p>
										<p className="text-3xl font-bold text-white">{stats.timeSpent}</p>
									</div>
								</div>
							</motion.div>

							{/* Strengths & Improvements Card */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: 0.1 }}
								className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 p-6"
							>
								<h3 className="text-xl font-medium mb-6 flex items-center gap-2">
									<Award size={20} className="text-cyan-400" />
									Performance Analysis
								</h3>

								<div className="mb-6">
									<h4 className="text-sm uppercase text-gray-400 mb-3">Strong Categories</h4>
									<div className="flex flex-wrap gap-2">
										{stats.strongCategories.map((category, index) => (
											<Badge key={index} className="bg-green-900/40 text-green-200 border border-green-700/20">
												<Check size={14} className="mr-1 text-green-400" /> {category}
											</Badge>
										))}
									</div>
								</div>

								<div>
									<h4 className="text-sm uppercase text-gray-400 mb-3">Areas For Improvement</h4>
									<div className="flex flex-wrap gap-2">
										{stats.improvementAreas.map((area, index) => (
											<Badge key={index} className="bg-amber-900/20 text-amber-200 border border-amber-700/20">
												<X size={14} className="mr-1 text-amber-400" /> {area}
											</Badge>
										))}
									</div>
								</div>
							</motion.div>

							{/* Progress Chart - Placeholder */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: 0.2 }}
								className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 p-6 md:col-span-2"
							>
								<h3 className="text-xl font-medium mb-6">Progress Over Time</h3>
								<div className="bg-gray-700/30 rounded-lg border border-gray-600/30 h-64 flex items-center justify-center">
									<p className="text-gray-400">Progress chart will be displayed here</p>
								</div>
							</motion.div>
						</div>
					</TabsContent>

					{/* History Tab Content */}
					<TabsContent value="history" className="mt-8">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.4 }}
							className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 p-6"
						>
							<h3 className="text-xl font-medium mb-6 flex items-center gap-2">
								<Clock size={20} className="text-cyan-400" />
								Recent Interviews
							</h3>

							<div className="space-y-4">
								{interviewHistory.map((interview) => (
									<motion.div
										key={interview.id}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.3 }}
										className="bg-gray-700/40 rounded-lg p-5 border border-gray-600/30"
									>
										<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
											<div>
												<h4 className="font-medium text-lg text-white mb-1">{interview.title}</h4>
												<div className="flex items-center text-gray-400 text-sm mb-3">
													<span>{interview.company}</span>
													<span className="mx-2">•</span>
													<Calendar size={14} className="mr-1" />
													<span>{interview.date}</span>
													<span className="mx-2">•</span>
													<Clock size={14} className="mr-1" />
													<span>{interview.duration}</span>
												</div>
												<p className="text-gray-300 text-sm">{interview.feedback}</p>
											</div>
											<div className="flex items-center bg-gray-800/70 px-4 py-2 rounded-lg min-w-[100px] justify-center">
												<span className={`text-2xl font-bold ${interview.score >= 9 ? 'text-green-400' :
														interview.score >= 8 ? 'text-cyan-400' :
															interview.score >= 7 ? 'text-yellow-400' : 'text-orange-400'
													}`}>
													{interview.score}
												</span>
												<span className="text-gray-400 ml-1">/10</span>
											</div>
										</div>
										<div className="mt-4 flex justify-end">
											<Button size="sm" variant="outline" className="bg-gray-700 hover:bg-gray-600 border-gray-600 text-white">
												View Details <ChevronRight size={16} className="ml-1" />
											</Button>
										</div>
									</motion.div>
								))}
							</div>

							<div className="mt-6 text-center">
								<Button
									variant="outline"
									className="bg-gray-700 hover:bg-gray-600 border-gray-600 text-white"
								>
									View All Interviews
								</Button>
							</div>
						</motion.div>
					</TabsContent>

					{/* Settings Tab Content */}
					<TabsContent value="settings" className="mt-8">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="md:col-span-1">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4 }}
									className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 p-6 h-full"
								>
									<h3 className="text-xl font-medium mb-6">Settings</h3>
									<div className="space-y-2">
										<Button
											variant="ghost"
											className="w-full justify-start text-gray-200 hover:bg-gray-700 hover:text-white"
										>
											<User size={18} className="mr-3" /> Account
										</Button>
										<Button
											variant="ghost"
											className="w-full justify-start text-gray-200 hover:bg-gray-700 hover:text-white"
										>
											<Bell size={18} className="mr-3" /> Notifications
										</Button>
										<Button
											variant="ghost"
											className="w-full justify-start text-gray-200 hover:bg-gray-700 hover:text-white"
										>
											<Shield size={18} className="mr-3" /> Privacy
										</Button>
										<Button
											variant="ghost"
											className="w-full justify-start text-gray-200 hover:bg-gray-700 hover:text-white"
										>
											<HelpCircle size={18} className="mr-3" /> Help & Support
										</Button>
									</div>
								</motion.div>
							</div>

							<div className="md:col-span-2">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: 0.1 }}
									className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 p-6"
								>
									<h3 className="text-xl font-medium mb-6">Account Settings</h3>

									<div className="space-y-6">
										<div>
											<h4 className="text-sm font-medium mb-3">Interview Preferences</h4>
											<div className="space-y-3">
												<div className="flex items-center justify-between">
													<span className="text-gray-300">Default interview duration</span>
													<select className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm">
														<option>30 minutes</option>
														<option selected>45 minutes</option>
														<option>60 minutes</option>
													</select>
												</div>

												<div className="flex items-center justify-between">
													<span className="text-gray-300">Feedback detail level</span>
													<select className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm">
														<option>Basic</option>
														<option selected>Detailed</option>
														<option>Comprehensive</option>
													</select>
												</div>

												<div className="flex items-center justify-between">
													<span className="text-gray-300">Interview recording</span>
													<div className="flex items-center">
														<input type="checkbox" id="recording" className="mr-2" checked />
														<label htmlFor="recording" className="text-sm">Enable</label>
													</div>
												</div>
											</div>
										</div>

										<div>
											<h4 className="text-sm font-medium mb-3">Notification Settings</h4>
											<div className="space-y-3">
												<div className="flex items-center justify-between">
													<span className="text-gray-300">Email notifications</span>
													<div className="flex items-center">
														<input type="checkbox" id="email" className="mr-2" checked />
														<label htmlFor="email" className="text-sm">Enable</label>
													</div>
												</div>

												<div className="flex items-center justify-between">
													<span className="text-gray-300">Interview reminders</span>
													<div className="flex items-center">
														<input type="checkbox" id="reminders" className="mr-2" checked />
														<label htmlFor="reminders" className="text-sm">Enable</label>
													</div>
												</div>

												<div className="flex items-center justify-between">
													<span className="text-gray-300">New features</span>
													<div className="flex items-center">
														<input type="checkbox" id="features" className="mr-2" checked />
														<label htmlFor="features" className="text-sm">Enable</label>
													</div>
												</div>
											</div>
										</div>

										<div className="pt-4 border-t border-gray-700">
											<Button className="bg-cyan-600 hover:bg-cyan-700 text-white w-full sm:w-auto">
												Save Changes
											</Button>
										</div>
									</div>
								</motion.div>
							</div>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}