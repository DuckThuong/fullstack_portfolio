import avatarPhoto from "./avatar.jpg";
import cvPdf from "./CV_FullStack_Trịnh_Đức_Thưởng.pdf";

// ─── INTERFACES ──────────────────────────────────────────────────────────────

export interface Social {
  github: string;
  linkedin: string;
  facebook: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  /** URL ảnh đại diện (import từ src/data hoặc đường dẫn public) */
  avatar: string;
  /** Chữ hiển thị khi ảnh chưa tải được */
  avatarInitials: string;
  avatarColor: string;
  bio: string;
  social: Social;
  /** File CV local (import PDF) */
  cvFile: string;
  /** Tên file khi tải xuống */
  cvFileName: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface TechnicalSkill {
  name: string;
  level: number;
  color: string;
}

export interface Skills {
  technical: TechnicalSkill[];
  tools: string[];
  soft: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  color: string;
  demo: string;
  github: string;
  featured: boolean;
}

export interface TimelineItem {
  year: string;
  type: "work" | "project" | "education";
  title: string;
  organization: string;
  description: string;
  icon: string;
}

export type TechBgKind = "react" | "scss" | "code";

export interface TechBgItem {
  id: string;
  kind: TechBgKind;
  code?: string;
  top: string;
  left?: string;
  right?: string;
  size?: number;
  duration?: number;
  delay?: number;
}

export interface ContactChannel {
  id: string;
  label: string;
  hint: string;
  value: string;
  href: string;
  icon: string;
  primary?: boolean;
}

export interface PortfolioData {
  profile: Profile;
  stats: Stat[];
  skills: Skills;
  projects: Project[];
  timeline: TimelineItem[];
}

function phoneToIntl(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("0") ? `84${digits.slice(1)}` : digits;
}

/** Kênh liên hệ (Zalo, email, gọi điện) — không cần backend */
export function getContactChannels(profile: Profile): ContactChannel[] {
  const phoneIntl = phoneToIntl(profile.phone);
  const phoneTel = profile.phone.replace(/\s/g, "");
  const firstName = profile.name.trim().split(/\s+/).pop() ?? profile.name;
  const mailSubject = encodeURIComponent(
    `Contact from Portfolio — ${profile.name}`,
  );
  const mailBody = encodeURIComponent(
    `Hi ${firstName},\n\nI'm reaching out via your portfolio because:\n\n`,
  );

  return [
    {
      id: "zalo",
      label: "Message on Zalo",
      hint: "Fastest response",
      value: profile.phone,
      href: `https://zalo.me/${phoneIntl}`,
      icon: "💬",
      primary: true,
    },
    {
      id: "email",
      label: "Send Email",
      hint: "Opens your mail app",
      value: profile.email,
      href: `mailto:${profile.email}?subject=${mailSubject}&body=${mailBody}`,
      icon: "📧",
    },
    {
      id: "phone",
      label: "Call",
      hint: "Direct call on mobile",
      value: profile.phone,
      href: `tel:${phoneTel}`,
      icon: "📱",
    },
  ];
}


const portfolioData: PortfolioData = {
  profile: {
    name: "TRINH DUC THUONG",
    title: "Fullstack Developer — ReactJS & NestJS",
    tagline:
      "Turning ideas into polished, end-to-end products — frontend to backend.",
    email: "trinhthuong26022003@gmail.com",
    phone: "0868 472 032",
    location: "Hanoi, Vietnam",
    avatar: avatarPhoto,
    avatarInitials: "TT",
    avatarColor: "#6C63FF",
    bio: "Fullstack Developer with a strong focus on ReactJS/TypeScript on the frontend and NestJS on the backend, plus working experience in Java Spring Boot. I enjoy owning features end-to-end — from API design and database modeling to building smooth, maintainable UIs. Experience spans bus booking, logistics, real-time bidding, ERP, and e-commerce systems. Looking for a team where I can keep learning, ship quality code, and collaborate well with designers, QA, and backend engineers.",
    social: {
      github: "https://github.com/DuckThuong",
      linkedin:
        "https://www.linkedin.com/in/tr%E1%BB%8Bnh-%C4%91%E1%BB%A9c-th%C6%B0%E1%BB%9Fng-a75669413",
      facebook: "https://www.facebook.com/duck.thuongggg/",
    },
    cvFile: cvPdf,
    cvFileName: "CV_FullStack_Trịnh_Đức_Thưởng.pdf",
  },

  stats: [
    { label: "Projects completed", value: "7+" },
    { label: "Years of experience", value: "2" },
    { label: "Technologies", value: "10+" },
    { label: "GitHub commits", value: "~ 300+" },
  ],

  skills: {
    technical: [
      { name: "ReactJS", level: 90, color: "#61DAFB" },
      { name: "NestJS", level: 85, color: "#E0234E" },
      { name: "TypeScript", level: 85, color: "#3178C6" },
      { name: "HTML5 / CSS3", level: 90, color: "#E34F26" },
      { name: "JavaScript (ES6+)", level: 80, color: "#F7DF1E" },
      { name: "Ant Design", level: 80, color: "#147f92" },
      { name: "TanStack Query", level: 80, color: "#14af2e" },
      { name: "Node.js", level: 78, color: "#3C873A" },
      { name: "RESTful API Design", level: 78, color: "#009688" },
      { name: "Git / GitHub / GitLab", level: 75, color: "#F05032" },
      { name: "Axios / REST Integration", level: 75, color: "#FF6B35" },
      { name: "WebSocket / Socket.IO", level: 70, color: "#010101" },
      { name: "MySQL", level: 65, color: "#00758F" },
      { name: "Tailwind CSS", level: 60, color: "#06B6D4" },
      { name: "Redux Toolkit", level: 60, color: "#3b0e85" },
      { name: "SASS", level: 60, color: "#74a31d" },
      { name: "Java / Spring Boot", level: 30, color: "#6DB33F" },
    ],
    tools: ["VS Code", "Figma", "Postman", "Vercel", "Firebase", "Ngrok"],
    soft: [
      "Logical thinking",
      "Teamwork",
      "Eager to learn",
      "Proactive",
      "Strong communication",
    ],
  },

  projects: [
    {
      id: 1,
      title: "GO-RIDE — Bus Ticket Booking System",
      description:
        "Search trip → select seat → mock payment flow, with route and date filters. Redux Toolkit manages booking state; TanStack Query caches trip lists; Ant Design UI with custom SASS theming.",
      tech: [
        "React",
        "Redux Toolkit",
        "SASS",
        "Ant Design",
        "TanStack Query",
        "HTML5",
        "CSS3",
      ],
      image: "🚌",
      color: "#6C63FF",
      demo: "https://fe-bookings-sigma.vercel.app/",
      github: "https://github.com/DuckThuong/fe-bookings",
      featured: true,
    },
    {
      id: 2,
      title: "MVL Logistics — Transport Company Landing Page",
      description:
        "Service introduction page with hero, pricing, FAQ, and validated contact form. Responsive layout; CSS Modules for scoped styles; Axios + TanStack Query for form submission.",
      tech: [
        "React",
        "SASS",
        "Ant Design",
        "TanStack Query",
        "CSS Modules",
        "Axios",
      ],
      image: "🚚",
      color: "#FF6B6B",
      demo: "https://fe-logistics.vercel.app/",
      github: "https://github.com/DuckThuong/fe-logistics",
      featured: true,
    },
    {
      id: 3,
      title: "Ziraiten — Fullstack Payment Integration",
      description:
        "Built and integrated a Stripe payment gateway (webhook handling, transaction processing, reconciliation) on a NestJS backend. Developed the ReactJS frontend, fixing pagination, responsive UI, and optimizing bundle size with code splitting and lazy loading.",
      tech: [
        "React",
        "NestJS",
        "TypeScript",
        "Stripe",
        "Webhook",
        "RESTful API",
        "MySQL",
      ],
      image: "💳",
      color: "#635BFF",
      demo: "#",
      github: "#",
      featured: true,
    },
    {
      id: 4,
      title: "ChaTask — Personal Task Manager",
      description:
        "Todo app with CRUD tasks, status filters, LocalStorage persistence, and realtime updates via Socket.IO. TypeScript for type-safe internal APIs; React Router for clear screen separation.",
      tech: [
        "React",
        "TypeScript",
        "Ant Design",
        "SASS",
        "TanStack Query",
        "LocalStorage",
        "Socket.IO",
        "React Router",
        "Redux Toolkit",
      ],
      image: "✅",
      color: "#4ECDC4",
      demo: "https://chat.chatask.ai/app/home",
      github: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Festaria MD — Sales Platform for CloudMD",
      description:
        "Fullstack e-commerce module: built backend order processing, product CRUD, and inventory sync with Java Spring Boot; developed multi-step checkout forms on the frontend with HTML/JavaScript, focused on UX and form validation.",
      tech: [
        "Java",
        "Spring Boot",
        "MySQL",
        "React",
        "HTML5",
        "JavaScript",
        "Redux Toolkit",
      ],
      image: "🏪",
      color: "#45B7D1",
      demo: "#",
      github: "#",
      featured: false,
    },
    {
      id: 6,
      title: "INBID — Online Auction Platform",
      description:
        "Real-time bidding interface built with ReactJS. Implemented WebSocket for live bidding and notifications, synchronized order state with Redux Toolkit, and integrated third-party APIs (Instagram Graph API, Facebook SDK, Stripe API).",
      tech: [
        "React",
        "React Router",
        "TypeScript",
        "WebSocket",
        "Redux Toolkit",
        "Tailwind CSS",
        "Bootstrap",
        "Stripe API",
      ],
      image: "🏷️",
      color: "#45B7D1",
      demo: "#",
      github: "#",
      featured: false,
    },
    {
      id: 7,
      title: "ERP Attendance — Internal Time Tracking System",
      description:
        "Enterprise project: attendance module with timesheets, leave approval, and report export (Excel/PDF). REST API integration, role-based access, and timezone/holiday edge cases handled on the frontend.",
      tech: [
        "React",
        "React Router",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS",
        "Bootstrap",
        "RESTful API",
      ],
      image: "⏱️",
      color: "#45B7D1",
      demo: "#",
      github: "#",
      featured: false,
    },
    {
      id: 8,
      title: "CowaTech — Company Site & Internal Platform",
      description:
        "Fullstack project: built RESTful APIs with NestJS for authentication/authorization and role-based access control (RBAC); developed the frontend with ReactJS, Redux Toolkit, Tailwind CSS, and Bootstrap, ensuring seamless client-server integration.",
      tech: [
        "React",
        "NestJS",
        "TypeScript",
        "JWT",
        "RBAC",
        "Redux Toolkit",
        "Tailwind CSS",
        "Bootstrap",
        "MySQL",
      ],
      image: "🏢",
      color: "#45B7D1",
      demo: "https://cowa-tech.com/",
      github: "#",
      featured: false,
    },
  ],

  timeline: [
    {
      year: "May 2026",
      type: "work",
      title: "Fullstack Developer",
      organization: "TCOM CORP",
      description:
        "Building GO-RIDE, a bus ticket booking platform: trip search, seat selection, and booking management. Managed state with Redux Toolkit, synced server state with TanStack Query, and built responsive UI with Ant Design and SASS.",
      icon: "🚌",
    },
    {
      year: "Mar 2026",
      type: "work",
      title: "Fullstack Developer",
      organization: "TCOM CORP",
      description:
        "Owned the Festaria MD sales module for CloudMD: built backend order flow, product CRUD, and inventory sync with Java Spring Boot; developed multi-step checkout forms on the frontend, focusing on UX and validation.",
      icon: "🛍️",
    },
    {
      year: "Dec 2025",
      type: "work",
      title: "Fullstack Developer",
      organization: "TCOM CORP",
      description:
        "Built RESTful APIs with NestJS for authentication and role-based access control (RBAC) on CowaTech; developed the ReactJS frontend with Redux Toolkit, Tailwind CSS, and Bootstrap.",
      icon: "🏢",
    },
    {
      year: "Oct 2025",
      type: "work",
      title: "Fullstack Developer",
      organization: "TCOM CORP",
      description:
        "Built ChaTask — task management UI with filters, Kanban board views, and realtime notifications via Socket.IO. Used TypeScript to reduce bugs when scaling APIs; TanStack Query for fetch and cache.",
      icon: "📋",
    },
    {
      year: "Mar 2025",
      type: "work",
      title: "Fullstack Developer",
      organization: "TCOM CORP",
      description:
        "Developed internal ERP attendance module: timesheets, leave approval, and report export. Integrated REST APIs, role-based access, and handled timezone/holiday edge cases.",
      icon: "⏱️",
    },
    {
      year: "Aug 2024",
      type: "work",
      title: "Fullstack Developer",
      organization: "TCOM CORP",
      description:
        "Built and integrated a Stripe payment gateway on a NestJS backend for Ziraiten (webhook handling, transaction processing, reconciliation); developed the ReactJS frontend, fixing pagination, responsive UI, and bundle size.",
      icon: "💳",
    },
    {
      year: "Mar 2024",
      type: "work",
      title: "Frontend Developer Intern",
      organization: "TCOM CORP",
      description:
        "Interned on the Fulfillment team: fixed UI bugs, built shared components with ReactJS/Ant Design/SASS, integrated REST APIs with Axios and TanStack Query, and learned GitLab review workflows.",
      icon: "🌱",
    },
  ],
};

export const techBackgroundItems: TechBgItem[] = [
  {
    id: "react-1",
    kind: "react",
    top: "14%",
    left: "6%",
    size: 72,
    duration: 11,
    delay: 0,
  },
  {
    id: "react-2",
    kind: "react",
    top: "68%",
    right: "7%",
    size: 56,
    duration: 13,
    delay: 1.5,
  },
  {
    id: "react-3",
    kind: "react",
    top: "38%",
    right: "12%",
    size: 40,
    duration: 10,
    delay: 0.8,
  },
  {
    id: "scss-1",
    kind: "scss",
    top: "22%",
    right: "10%",
    size: 80,
    duration: 12,
    delay: 0.3,
  },
  {
    id: "scss-2",
    kind: "scss",
    top: "72%",
    left: "10%",
    size: 64,
    duration: 14,
    delay: 2,
  },
  {
    id: "code-react",
    kind: "code",
    code: "import { useState } from 'react'",
    top: "28%",
    left: "4%",
    duration: 15,
    delay: 1,
  },
  {
    id: "code-jsx",
    kind: "code",
    code: "export default function App()",
    top: "52%",
    left: "3%",
    duration: 16,
    delay: 0.5,
  },
  {
    id: "code-nest",
    kind: "code",
    code: "@Controller('users') export class UsersController {}",
    top: "18%",
    left: "22%",
    duration: 13,
    delay: 1.8,
  },
  {
    id: "code-scss-mixin",
    kind: "code",
    code: "@mixin flex-center { ... }",
    top: "58%",
    right: "5%",
    duration: 14,
    delay: 0.2,
  },
  {
    id: "code-scss-nest",
    kind: "code",
    code: ".hero { &__title { } }",
    top: "78%",
    right: "18%",
    duration: 12,
    delay: 2.5,
  },
  {
    id: "code-hook",
    kind: "code",
    code: "const [open, setOpen] = useState(false)",
    top: "44%",
    right: "4%",
    duration: 17,
    delay: 1.2,
  },
];

export default portfolioData;