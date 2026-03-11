#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getAbout, getContact, getExperienceSummary } from "./tools/about.js";
import { getSkills } from "./tools/skills.js";
import { getProjects, getProjectDetail, searchProjects } from "./tools/projects.js";
import { about } from "./data/about.js";
import { projects } from "./data/projects.js";
import { skills } from "./data/skills.js";

const server = new McpServer({
  name: "akin-portfolio-mcp",
  version: "1.0.0",
});

// ─── Resources ────────────────────────────────────────────────────────────────
// Resources expose static data that clients can read.
// URI scheme: portfolio://<resource-name>

server.resource("about", "portfolio://about", async () => ({
  contents: [{ uri: "portfolio://about", text: JSON.stringify(about, null, 2), mimeType: "application/json" }],
}));

server.resource("skills", "portfolio://skills", async () => ({
  contents: [{ uri: "portfolio://skills", text: JSON.stringify(skills, null, 2), mimeType: "application/json" }],
}));

server.resource("projects", "portfolio://projects", async () => ({
  contents: [{ uri: "portfolio://projects", text: JSON.stringify(projects, null, 2), mimeType: "application/json" }],
}));

// ─── Tools ────────────────────────────────────────────────────────────────────
// Tools are callable functions. Each tool validates its own input and returns
// a text response. Errors surface as isError: true so the client can react.

server.tool(
  "get_about",
  "Get general information about Akın Coşkun: name, title, location, and professional summary.",
  {},
  async () => {
    try {
      return { content: [{ type: "text", text: getAbout() }] };
    } catch (err) {
      return { content: [{ type: "text", text: String(err) }], isError: true };
    }
  }
);

server.tool(
  "get_skills",
  "Get Akın's technology stack. Optionally filter by category: frontend, backend, database, auth, automation, ai, devops, tools.",
  { category: z.string().optional().describe("Skill category to filter by (optional)") },
  async ({ category }) => {
    try {
      return { content: [{ type: "text", text: getSkills(category) }] };
    } catch (err) {
      return { content: [{ type: "text", text: String(err) }], isError: true };
    }
  }
);

server.tool(
  "get_projects",
  "List all of Akın's projects with descriptions, tech stacks, and links.",
  {},
  async () => {
    try {
      return { content: [{ type: "text", text: getProjects() }] };
    } catch (err) {
      return { content: [{ type: "text", text: String(err) }], isError: true };
    }
  }
);

server.tool(
  "get_project_detail",
  "Get detailed information about a specific project by name.",
  { name: z.string().describe("The project name (e.g. RivalRadar, OpsFlow, KolayAidat)") },
  async ({ name }) => {
    try {
      return { content: [{ type: "text", text: getProjectDetail(name) }] };
    } catch (err) {
      return { content: [{ type: "text", text: String(err) }], isError: true };
    }
  }
);

server.tool(
  "search_projects",
  "Search projects by keyword. Matches against project name, description, tech stack, and highlights.",
  { keyword: z.string().describe("Search keyword (e.g. N8N, Kafka, AI, Supabase)") },
  async ({ keyword }) => {
    try {
      return { content: [{ type: "text", text: searchProjects(keyword) }] };
    } catch (err) {
      return { content: [{ type: "text", text: String(err) }], isError: true };
    }
  }
);

server.tool(
  "get_contact",
  "Get Akın's contact information: email, GitHub, and portfolio URL.",
  {},
  async () => {
    try {
      return { content: [{ type: "text", text: getContact() }] };
    } catch (err) {
      return { content: [{ type: "text", text: String(err) }], isError: true };
    }
  }
);

server.tool(
  "get_experience_summary",
  "Get a brief summary of Akın's experience: total projects, production apps, and key technology areas.",
  {},
  async () => {
    try {
      return { content: [{ type: "text", text: getExperienceSummary() }] };
    } catch (err) {
      return { content: [{ type: "text", text: String(err) }], isError: true };
    }
  }
);

// ─── Start ────────────────────────────────────────────────────────────────────
// stdio transport: messages come from stdin, responses go to stdout.
// stderr is safe for logging — it won't pollute the MCP protocol stream.

async function main(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  process.stderr.write("akin-portfolio-mcp running on stdio\n");
}

main().catch((err: unknown) => {
  process.stderr.write(`Fatal: ${String(err)}\n`);
  process.exit(1);
});
