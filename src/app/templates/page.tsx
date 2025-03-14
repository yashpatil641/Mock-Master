"use client";

import { useState } from "react";
import {
  Dialog, DialogContent, DialogHeader,
  DialogTitle, DialogTrigger
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
// , Card, Input, Label
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { PlusCircle } from "lucide-react";
import Link from "next/link";

interface Template {
  id: string;
  name: string;
  role: string;
  experienceLevel: string;
  description: string;
  createdAt: Date;
}

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([
    {
      id: "1",
      name: "Frontend Developer Interview",
      role: "Frontend Developer",
      experienceLevel: "3-5 years",
      description: "Template for interviewing mid-level frontend developers with React experience",
      createdAt: new Date()
    },
    {
      id: "2",
      name: "Backend Engineer Interview",
      role: "Backend Engineer",
      experienceLevel: "5+ years",
      description: "Template for interviewing senior backend engineers with Node.js and database expertise",
      createdAt: new Date()
    },
    {
      id: "3",
      name: "Full Stack Developer Interview",
      role: "Full Stack Developer",
      experienceLevel: "2-4 years",
      description: "A comprehensive template for assessing full stack development skills",
      createdAt: new Date()
    }
  ]);

  const [newTemplate, setNewTemplate] = useState({
    name: "",
    role: "",
    experienceLevel: "",
    description: ""
  });

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTemplate(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, field: string) => {
    setNewTemplate(prev => ({ ...prev, [field]: value }));
  };

  const createTemplate = () => {
    const template = {
      id: Date.now().toString(),
      ...newTemplate,
      createdAt: new Date()
    };
    setTemplates(prev => [template, ...prev]);
    setNewTemplate({
      name: "",
      role: "",
      experienceLevel: "",
      description: ""
    });

    setDialogOpen(false);
  };

  return (
    <div className="container mx-auto py-8 mt-30 mb-40">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Interview Templates</h1>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <PlusCircle size={16} />
              Create Template
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Template</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={newTemplate.name}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Role
                </Label>
                <Select
                  onValueChange={(value) => handleSelectChange(value, "role")}
                  value={newTemplate.role}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Frontend Developer</SelectItem>
                    <SelectItem value="backend">Backend Developer</SelectItem>
                    <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                    <SelectItem value="mobile">Mobile Developer</SelectItem>
                    <SelectItem value="devops">DevOps Engineer</SelectItem>
                    <SelectItem value="qa">QA Engineer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="experienceLevel" className="text-right">
                  Experience
                </Label>
                <Select
                  onValueChange={(value) => handleSelectChange(value, "experienceLevel")}
                  value={newTemplate.experienceLevel}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Years of experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5+">5+ years</SelectItem>
                    <SelectItem value="8+">8+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  name="description"
                  value={newTemplate.description}
                  onChange={handleInputChange}
                  className="col-span-3"
                />
              </div>

              <div className="flex justify-end mt-4">
                <Button onClick={createTemplate}>Create Template</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="p-6 cursor-pointer hover:shadow-lg hover:bg-gray-800/50 bg-gray-800/30 transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{template.name}</h2>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-200 text-blue-600 text-sm font-semibold px-2.5 py-0.5 rounded-full">
                {template.role}
              </span>
              <span className="bg-green-200 text-black/90 text-sm font-semibold px-2.5 py-0.5 rounded-full cursor-pointer">
                {template.experienceLevel}
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4">{template.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">
                Created {template.createdAt.toLocaleDateString()}
              </span>

              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <Link href={`/interview?title=${encodeURIComponent(template.name)}&position=${encodeURIComponent(template.role)}&experience=${encodeURIComponent(template.experienceLevel)}&description=${encodeURIComponent(template.description)}`}>
                  Use Template
                </Link>
              </Button>

            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}