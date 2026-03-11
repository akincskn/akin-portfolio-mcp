import { skills } from "../data/skills.js";
import type { SkillCategory } from "../types/index.js";

const VALID_CATEGORIES: SkillCategory[] = [
  "frontend",
  "backend",
  "database",
  "auth",
  "automation",
  "ai",
  "devops",
  "tools",
];

export function getSkills(category?: string): string {
  try {
    if (category === undefined || category === "") {
      return JSON.stringify(skills, null, 2);
    }

    const lower = category.toLowerCase() as SkillCategory;
    if (!VALID_CATEGORIES.includes(lower)) {
      throw new Error(
        `Invalid category "${category}". Valid categories: ${VALID_CATEGORIES.join(", ")}`
      );
    }

    const result = { [lower]: skills[lower] };
    return JSON.stringify(result, null, 2);
  } catch (err) {
    throw new Error(`Failed to retrieve skills: ${String(err)}`);
  }
}
