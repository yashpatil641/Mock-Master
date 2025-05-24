"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle, Loader2, Trash2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { getTemplates, createTemplate, deleteTemplate } from "./actions";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface Template {
  id: string;
  name: string;
  role: string;
  experienceLevel: string;
  description: string;
  createdAt: Date;
}

// Add this interface to define the return type from getTemplates
interface TemplatesResponse {
  success: boolean;
  templates?: Template[];
  error?: string;
}

export default function TemplatesPage() {
  const { data: session } = useSession()
  if (!session?.user) {
    redirect('/login');
  }
   
  const [templates, setTemplates] = useState<Template[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newTemplate, setNewTemplate] = useState({
    name: "",
    role: "",
    experienceLevel: "",
    description: ""
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);



  // Load templates when the component mounts
  useEffect(() => {
    async function loadTemplates() {
      setIsLoading(true);
      try {
        const result = await getTemplates() as TemplatesResponse;
        if (result.success && result.templates) {
          // Added a check for result.templates
          const templatesWithDates = result.templates.map(template => ({
            ...template,
            createdAt: new Date(template.createdAt)
          }));
          setTemplates(templatesWithDates);
        } else {
          toast.error(result.error || "Failed to load templates");
        }
      } catch (error) {
        console.error("Error loading templates:", error);
        toast.error("An unexpected error occurred");
      } finally {
        setIsLoading(false);
      }
    }

    loadTemplates();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTemplate(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, field: string) => {
    setNewTemplate(prev => ({ ...prev, [field]: value }));
  };

  const handleCreateTemplate = async () => {
    setIsSubmitting(true);
    try {
      const result = await createTemplate(newTemplate);

      if (result.success) {
        toast.success("Template created successfully");
        // Add the new template to the UI with the correct date format
        setTemplates(prev => {
          if (!result.template) return prev;

          return [
            {
              ...result.template,
              createdAt: new Date(result.template.createdAt)
            } as Template,
            ...prev
          ];
        });

        // Reset the form
        setNewTemplate({
          name: "",
          role: "",
          experienceLevel: "",
          description: ""
        });

        // Close the dialog
        setDialogOpen(false);
      } else {
        toast.error(result.error || "Failed to create template");
      }
    } catch (error) {
      console.error("Error creating template:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteTemplate = async (id: string) => {
    if (confirm("Are you sure you want to delete this template?")) {
      try {
        const result = await deleteTemplate(id);

        if (result.success) {
          toast.success("Template deleted successfully");
          // Remove the deleted template from the UI
          setTemplates(prev => prev.filter(template => template.id !== id));
        } else {
          toast.error(result.error || "Failed to delete template");
        }
      } catch (error) {
        console.error("Error deleting template:", error);
        toast.error("An unexpected error occurred");
      }
    }
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
                    <SelectItem value="Frontend Developer">Frontend Developer</SelectItem>
                    <SelectItem value="Backend Developer">Backend Developer</SelectItem>
                    <SelectItem value="Full Stack Developer">Full Stack Developer</SelectItem>
                    <SelectItem value="Mobile Developer">Mobile Developer</SelectItem>
                    <SelectItem value="DevOps Engineer">DevOps Engineer</SelectItem>
                    <SelectItem value="QA Engineer">QA Engineer</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
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
                    <SelectItem value="0-1 years">0-1 years</SelectItem>
                    <SelectItem value="1-3 years">1-3 years</SelectItem>
                    <SelectItem value="3-5 years">3-5 years</SelectItem>
                    <SelectItem value="5+ years">5+ years</SelectItem>
                    <SelectItem value="8+ years">8+ years</SelectItem>
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
                <Button onClick={handleCreateTemplate} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    "Create Template"
                  )}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : templates.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p>No templates available. Create your first template!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="p-6 hover:shadow-lg hover:bg-gray-800/50 bg-gray-800/30 transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{template.name}</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1.5 rounded-lg border border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/50">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {template.role}
                </span>
                <span className="inline-flex items-center bg-green-100 text-green-800 text-sm font-semibold px-3 py-1.5 rounded-lg border border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700/50">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {template.experienceLevel}
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-4">{template.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">
                  Created {template.createdAt.toLocaleDateString()}
                </span>

                <div className="flex gap-2 items-center justify-center">
                  <Button
                    className="bg-black/70 hover:bg-black/40"
                    variant="outline"
                    size="default"
                    asChild
                  >
                    <Link href={`/interview?title=${encodeURIComponent(template.name)}&position=${encodeURIComponent(template.role)}&experience=${encodeURIComponent(template.experienceLevel)}&description=${encodeURIComponent(template.description)}`}>
                      Use Template
                    </Link>
                  </Button>

                  <Button
                    className="bg-red-500/70 hover:bg-red-500/60"
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteTemplate(template.id)}
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}