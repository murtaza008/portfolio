import { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "ai-ecommerce",
    title: "AI E-Commerce Store",
    description:
      "A full-featured AI-powered e-commerce platform with semantic product search, Gemini AI shopping assistant, Stripe payments, Redis-based cart management, and a complete admin dashboard with analytics.",
    imageUrl: "/assets/p1.png",
    tags: [
      "Next.js 16",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Upstash Redis",
      "Gemini API"
    ],
    type: "Full Stack",
    demoUrl: "https://ai-ecommerce-two.vercel.app/",
    codeUrl: "https://github.com/murtaza008/ai-ecommerce",
    delayMs: 0
  },
  {
    id: "ai-job-board",
    title: "AI-Powered Job Board & Marketplace",
    description:
      "An AI-driven job marketplace featuring resume parsing, intelligent job match scoring, AI-generated cover letters, Stripe-powered job postings, and multi-role authentication for employers and candidates.",
    imageUrl: "/assets/p2.png",
    tags: [
      "Next.js 16",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Clerk",
      "Gemini API"
    ],
    type: "Full Stack",
    demoUrl: "https://ai-job-board-eta.vercel.app/",
    codeUrl: "https://github.com/murtaza008/ai-job-board",
    delayMs: 90
  },
  {
    id: "driver-monitoring-system",
    title: "Driver Monitoring System",
    description:
      "An AI-powered fleet safety platform frontend with real-time driver risk monitoring, violation tracking, facial recognition integration, safety reports, and analytics dashboards for fleet managers.",
    imageUrl: "/assets/p3.png",
    tags: [
      "React.js",
      "Firebase",
      "TensorFlow Lite",
      "MediaPipe",
      "Cloudinary",
      "AI"
    ],
    type: "Frontend",
    demoUrl: "https://murtaza008.github.io/driver-monitoring-system-frontend/",
    codeUrl: "https://github.com/murtaza008/driver-monitoring-system-frontend",
    delayMs: 180
  },
  {
    id: "interview-ai-assistant",
    title: "Interview AI Assistant",
    description:
      "An AI-powered interview preparation platform with secure JWT authentication, resume parsing, PDF text extraction, and personalized interview assistance built using the MERN stack.",
    imageUrl: "/assets/p4.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "MERN"
    ],
    type: "Full Stack",
    demoUrl: "https://ai-study-planner-frontend-kappa.vercel.app/",
    codeUrl: "https://github.com/murtaza008/AI-Study-Planner-frontend",
    delayMs: 270
  },
  {
    id: "trtc-chat-app",
    title: "TRTC Real-Time Chat Application",
    description:
      "A real-time chat application with secure authentication, persistent user management, Tencent Cloud Chat integration, and dynamic UserSig generation for live messaging features.",
    imageUrl: "/assets/p5.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tencent Cloud",
      "JWT"
    ],
    type: "Full Stack",
    demoUrl: "https://chat-app-frontend-indol-nu.vercel.app/login",
    codeUrl: "https://github.com/murtaza008/chat-app-frontend",
    delayMs: 360
  },
  {
    id: "taskflow-task-manager",
    title: "TaskFlow Task Manager",
    description:
      "A full-stack task management system featuring authentication, dashboards, CRUD operations, advanced filtering and sorting, and efficient server-state handling with React Query.",
    imageUrl: "/assets/p6.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "React Query",
      "MERN"
    ],
    type: "Full Stack",
    demoUrl: "https://taskflow-frontend-rouge-xi.vercel.app",
    codeUrl: "https://github.com/murtaza008/taskflow-frontend",
    delayMs: 450
  }
];
