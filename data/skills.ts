import { SkillCategoryType } from "../types";

export const skillCategories: SkillCategoryType[] = [
  {
    id: "frontend",
    title: "Frontend",
    iconClass: "ri-layout-4-line",
    iconBgColor: "rgba(0, 212, 255, 0.094)",
    iconColor: "rgb(0, 212, 255)",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
    proficiency: 92,
    delayMs: 0
  },
  {
    id: "backend",
    title: "Backend",
    iconClass: "ri-server-line",
    iconBgColor: "rgba(0, 255, 136, 0.094)",
    iconColor: "rgb(0, 255, 136)",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT Auth", "Middleware"],
    proficiency: 88,
    delayMs: 80
  },
  {
    id: "database",
    title: "Database",
    iconClass: "ri-database-2-line",
    iconBgColor: "rgba(255, 107, 107, 0.094)",
    iconColor: "rgb(255, 107, 107)",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    proficiency: 85,
    delayMs: 160
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    iconClass: "ri-tools-line",
    iconBgColor: "rgba(255, 217, 61, 0.094)",
    iconColor: "rgb(255, 217, 61)",
    skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Netlify", "CI/CD", "Linux"],
    proficiency: 78,
    delayMs: 240
  },
  {
    id: "ai-integrations",
    title: "AI & Integrations",
    iconClass: "ri-robot-line",
    iconBgColor: "rgba(199, 125, 255, 0.094)",
    iconColor: "rgb(199, 125, 255)",
    skills: ["Vercel AI SDK", "Gemini API", "Stripe", "Cloudinary", "Firebase FCM", "TensorFlow Lite"],
    proficiency: 75,
    delayMs: 320
  },
  {
    id: "testing",
    title: "Testing & QA",
    iconClass: "ri-bug-line",
    iconBgColor: "rgba(255, 159, 67, 0.094)",
    iconColor: "rgb(255, 159, 67)",
    skills: ["Jest", "React Testing Library", "Zod", "Postman", "Swagger"],
    proficiency: 75,
    delayMs: 400
  }
];

export const familiarSkills: string[] = [
  "Prisma ORM", "Zod", "NextAuth",
  "Clerk", "Resend", "Upstash Redis", "Shadcn/ui",
  "Jira", "Postman", "ESLint", "Prettier",
];