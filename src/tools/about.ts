import { about } from "../data/about.js";
import type { Contact, ExperienceSummary } from "../types/index.js";
import { projects } from "../data/projects.js";
import { skills } from "../data/skills.js";

export function getAbout(): string {
  try {
    return JSON.stringify(about, null, 2);
  } catch (err) {
    throw new Error(`Failed to retrieve about info: ${String(err)}`);
  }
}

export function getContact(): string {
  try {
    const contact: Contact = {
      email: about.email,
      github: about.github,
      portfolio: about.portfolio,
      linkedin: about.linkedin,
    };
    return JSON.stringify(contact, null, 2);
  } catch (err) {
    throw new Error(`Failed to retrieve contact info: ${String(err)}`);
  }
}

export function getExperienceSummary(): string {
  try {
    const liveProjects = projects.filter((p) => p.url !== undefined).length;
    const keyAreas = Object.keys(skills);

    const summary: ExperienceSummary = {
      totalProjects: projects.length,
      productionProjects: liveProjects,
      keyAreas,
      highlight:
        "Built 9+ production SaaS applications with zero-cost infrastructure, specializing in AI integrations, workflow automation, and GEO/AEO optimization.",
    };

    return JSON.stringify(summary, null, 2);
  } catch (err) {
    throw new Error(`Failed to retrieve experience summary: ${String(err)}`);
  }
}
