"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import type { Template } from "@prisma/client";

// Add type definition for the return values
type TemplatesResponse = {
  success: boolean;
  templates?: Template[];
  error?: string;
};
type TemplateResponse = {
  success: boolean;
  template?: Template; // Using proper Template type
  error?: string;
};

export async function getTemplates(): Promise<TemplatesResponse> {
  try {
    const templates = await prisma.template.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return { success: true, templates };
  } catch (error) {
    console.error("Failed to fetch templates:", error);
    return {
      success: false,
      error: "Failed to fetch templates",
    };
  }
}

export async function createTemplate(formData: {
  name: string;
  role: string;
  experienceLevel: string;
  description: string;
}) {
  try {
    const { name, role, experienceLevel, description } = formData;

    // Validate required fields
    if (!name || !role || !experienceLevel) {
      return {
        success: false,
        error: "Name, role, and experience level are required",
      };
    }

    const template = await prisma.template.create({
      data: {
        name,
        role,
        experienceLevel,
        description: description || "",
      },
    });

    revalidatePath("/templates");
    return { success: true, template };
  } catch (error) {
    console.error("Failed to create template:", error);
    return {
      success: false,
      error: "Failed to create template",
    };
  }
}

export async function deleteTemplate(id: string) {
  try {
    await prisma.template.delete({
      where: { id },
    });

    revalidatePath("/templates");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete template:", error);
    return {
      success: false,
      error: "Failed to delete template",
    };
  }
}
