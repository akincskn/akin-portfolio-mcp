import type { Project } from "../types/index.js";

export const projects: Project[] = [
  {
    name: "RivalRadar",
    description:
      "AI-powered competitor analysis tool. Enter a company name, get a full SWOT analysis, pricing comparison, and actionable recommendations in 60 seconds.",
    stack: ["Next.js 14", "Tailwind", "shadcn/ui", "NextAuth.js v5", "Prisma", "Neon", "N8N", "Groq Llama 3.3", "UptimeRobot"],
    url: "https://rivalradar-three.vercel.app",
    github: "https://github.com/akincskn/rivalradar",
    highlights: ["Multi-agent AI pipeline", "N8N workflow automation", "Zero-cost infrastructure", "PDF report export"],
  },
  {
    name: "OpsFlow",
    description:
      "Incident management SaaS platform with microservice architecture, real-time Kafka event streaming, and multi-tenant RBAC.",
    stack: ["Express.js", "TypeORM", "React", "MUI", "Redux", "Kafka", "Redis"],
    url: "https://opsflowweb.vercel.app",
    github: "https://github.com/akincskn/opsflow-api",
    highlights: ["Microservice architecture (3 repos)", "Kafka event-driven", "Multi-tenant RBAC", "Invite flow"],
  },
  {
    name: "KolayAidat",
    description: "Apartment dues tracking and management system for Turkish housing market.",
    stack: ["Next.js 14", "Prisma", "PostgreSQL", "Tailwind", "shadcn/ui", "NextAuth.js", "Nodemailer"],
    url: "https://kolayaidat.vercel.app",
    github: "https://github.com/akincskn/kolayaidat",
    highlights: ["Full-stack monorepo", "Email notifications", "Server Components"],
  },
  {
    name: "Çerezmatik",
    description:
      "KVKK (Turkish GDPR) cookie consent banner generator. Generate and embed cookie banners with one click.",
    stack: ["Next.js 14", "Prisma", "PostgreSQL", "Tailwind", "shadcn/ui"],
    url: "https://cerezmatik.vercel.app",
    github: "https://github.com/akincskn/cerezmatik",
    highlights: ["JS snippet generation", "Embed code system", "Template engine"],
  },
  {
    name: "FormJet",
    description: "Smart form builder with N8N workflow automation. Create forms, embed them, and automate responses.",
    stack: ["Next.js 14", "Supabase", "N8N", "Tailwind", "shadcn/ui"],
    url: "https://formjet-bice.vercel.app",
    github: "https://github.com/akincskn/formjet",
    highlights: ["Supabase integration", "N8N automation", "Embeddable forms"],
  },
  {
    name: "Notera",
    description: "OneNote-style note-taking app with rich text editing, auto-save, and dark theme.",
    stack: ["Next.js 14", "Supabase", "Tiptap", "Tailwind", "shadcn/ui"],
    url: "https://notdefteri-virid.vercel.app",
    github: "https://github.com/akincskn/notdefteri",
    highlights: ["Tiptap rich text editor", "Auto-save", "Dark theme"],
  },
  {
    name: "MockAPI",
    description:
      "Instant backend generator for frontend developers. Dynamic PostgreSQL schema generation with multi-tenant support.",
    stack: ["Next.js 14", "Prisma", "Raw SQL", "PostgreSQL"],
    github: "https://github.com/akincskn/mockapi",
    highlights: ["Dynamic schema generation", "Multi-tenant", "Generic CRUD engine"],
  },
  {
    name: "Portfolio Website",
    description: "Personal portfolio site with Turkish/English language support showcasing all projects.",
    stack: ["Next.js", "Firebase Hosting"],
    url: "https://akin-coskun.web.app",
    highlights: ["i18n (TR/EN)", "All projects listed"],
  },
];
