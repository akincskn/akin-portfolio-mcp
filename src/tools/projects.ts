import { projects } from "../data/projects.js";
import type { Project } from "../types/index.js";

export function getProjects(): string {
  try {
    return JSON.stringify(projects, null, 2);
  } catch (err) {
    throw new Error(`Failed to retrieve projects: ${String(err)}`);
  }
}

export function getProjectDetail(name: string): string {
  try {
    if (!name || name.trim() === "") {
      throw new Error("Project name cannot be empty.");
    }

    const project = projects.find(
      (p) => p.name.toLowerCase() === name.trim().toLowerCase()
    );

    if (!project) {
      const names = projects.map((p) => p.name).join(", ");
      throw new Error(
        `Project "${name}" not found. Available projects: ${names}`
      );
    }

    return JSON.stringify(project, null, 2);
  } catch (err) {
    throw new Error(`Failed to retrieve project detail: ${String(err)}`);
  }
}

export function searchProjects(keyword: string): string {
  try {
    if (!keyword || keyword.trim() === "") {
      throw new Error("Search keyword cannot be empty.");
    }

    const query = keyword.trim().toLowerCase();

    const results: Project[] = projects.filter((p) => {
      const inName = p.name.toLowerCase().includes(query);
      const inDescription = p.description.toLowerCase().includes(query);
      const inStack = p.stack.some((s) => s.toLowerCase().includes(query));
      const inHighlights = p.highlights.some((h) => h.toLowerCase().includes(query));
      return inName || inDescription || inStack || inHighlights;
    });

    if (results.length === 0) {
      return JSON.stringify(
        { message: `No projects found matching "${keyword}".`, results: [] },
        null,
        2
      );
    }

    return JSON.stringify({ count: results.length, results }, null, 2);
  } catch (err) {
    throw new Error(`Failed to search projects: ${String(err)}`);
  }
}
