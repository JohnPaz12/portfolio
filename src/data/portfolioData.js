// ============================================================
//  PORTFOLIO DATA — Edit everything here!
// ============================================================

export const personal = {
  name: "Yohannes Gizachew",
  roles: [
    "Full Stack Developer",
    "Backend Developer",
    "UI/UX Designer",
  ],
  tagline:
    "Building thoughtful web and mobile experiences — from clean interfaces to solid MERN backends.",
  bio: `I'm a 4th-year Computer Science student at Unity University in Addis Ababa, passionate about full-stack development, UI/UX design, and mobile apps. I enjoy turning ideas into real products — learning by building, refining interfaces, and writing code that is clear and maintainable. Currently focused on MERN stack projects and growing as a developer ready for internships and collaborative work.`,
  location: "Addis Ababa, Ethiopia",
  email: "yohannesgizchew11@gmail.com",
  phone: "+251 978 253 859",
  whatsapp: "https://wa.me/251978253859",
  resumeUrl: "/assets/cv.html",

  social: {
    github: "https://github.com/JohnPaz12",
    linkedin: "https://www.linkedin.com/in/yohannes-gizachew-155283297",
    instagram: "https://www.instagram.com/yohannes_gizachew11",
    email: "mailto:yohannesgizchew11@gmail.com",
  },

  stats: [
    { label: "Year of Study", value: 4 },
    { label: "Projects Built", value: 8 },
    { label: "Tech Stack Focus", value: 3 },
    { label: "Technologies", value: 12 },
  ],
};

// ─────────────────────────────────────────────
//  SKILLS — icon names map to react-icons/si
// ─────────────────────────────────────────────
export const skills = {
  frontend: [
    { name: "React",        icon: "SiReact",       color: "#61DAFB" },
    { name: "Next.js",      icon: "SiNextdotjs",   color: "#FFFFFF" },
    { name: "JavaScript",   icon: "SiJavascript",  color: "#F7DF1E" },
    { name: "HTML5",        icon: "SiHtml5",       color: "#E34F26" },
    { name: "CSS3",         icon: "SiCss3",        color: "#1572B6" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
  ],
  backend: [
    { name: "Node.js",    icon: "SiNodedotjs",  color: "#339933" },
    { name: "Express",    icon: "SiExpress",    color: "#FFFFFF"  },
    { name: "MongoDB",    icon: "SiMongodb",    color: "#47A248"  },
    { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1"  },
    { name: "Firebase",   icon: "SiFirebase",   color: "#FFCA28"  },
    { name: "REST APIs",  icon: "SiPostman",    color: "#FF6C37"  },
  ],
  design: [
    { name: "Figma",   icon: "SiFigma",            color: "#F24E1E" },
    { name: "Git",     icon: "SiGit",              color: "#F05032" },
    { name: "GitHub",  icon: "SiGithub",           color: "#FFFFFF" },
    { name: "VS Code", icon: "SiVisualstudiocode", color: "#007ACC" },
    { name: "Vite",    icon: "SiVite",             color: "#646CFF" },
  ],
};

// ─────────────────────────────────────────────
//  PROFESSIONAL SKILLS
// ─────────────────────────────────────────────
export const professionalSkills = [
  { label: "Problem Solving",       icon: "🧠" },
  { label: "Team Collaboration",    icon: "🤝" },
  { label: "Communication",         icon: "💬" },
  { label: "UI/UX Thinking",        icon: "🎨" },
  { label: "Agile / Scrum",         icon: "🔄" },
  { label: "Code Review",           icon: "🔍" },
  { label: "Fast Learner",          icon: "⚡" },
  { label: "Time Management",       icon: "⏱️" },
  { label: "Project Management",    icon: "📋" },
  { label: "Technical Writing",     icon: "📝" },
];

// ─────────────────────────────────────────────
//  SERVICES  (Tech Consulting removed)
// ─────────────────────────────────────────────
export const services = [
  {
    id: 1,
    emoji: "🌐",
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable web applications using React, Next.js, and Node.js from concept to deployment.",
    features: ["React / Next.js", "MERN Stack", "REST APIs", "Performance Optimization"],
    accent: "var(--accent-cyan)",
  },
  {
    id: 2,
    emoji: "⚙️",
    title: "Backend Development",
    description:
      "Architecting robust server-side solutions, APIs, and database systems that power modern applications reliably.",
    features: ["Node.js / Express", "MongoDB / PostgreSQL", "Auth & Security", "API Design"],
    accent: "var(--accent-violet)",
  },
  {
    id: 3,
    emoji: "🎨",
    title: "UI/UX Design",
    description:
      "Crafting intuitive and visually stunning interfaces in Figma with a deep focus on user experience and accessibility.",
    features: ["Figma / Prototyping", "Design Systems", "Wireframing", "User Research"],
    accent: "var(--accent-pink)",
  },
  {
    id: 4,
    emoji: "📱",
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile apps with React Native that feel native on both iOS and Android.",
    features: ["React Native", "Cross-Platform", "Push Notifications", "App Store Ready"],
    accent: "var(--accent-cyan)",
  },
  {
    id: 5,
    emoji: "🗄️",
    title: "Database Design",
    description:
      "Designing efficient database schemas and optimizing queries for high-performance data-driven applications.",
    features: ["Schema Design", "Query Optimization", "Data Migration", "Caching Strategies"],
    accent: "var(--accent-violet)",
  },
];

// ─────────────────────────────────────────────
//  PROJECTS
// ─────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Wisdom Book Shop",
    description:
      "A book shop web application for browsing, managing inventory, and handling book-related workflows. Built as part of my learning journey with the MERN stack and a focus on clean UI.",
    image: null,
    tags: ["React", "Node.js", "MongoDB", "Express", "MERN"],
    github: null,
    live: null,
    featured: true,
  },
];

// ─────────────────────────────────────────────
//  EXPERIENCE
// ─────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role: "Computer Science Student (4th Year)",
    company: "Unity University",
    period: "2022 – Present",
    description:
      "Studying computer science with a focus on software development, data structures, and building real-world projects. Actively learning full-stack web development (MERN), UI/UX design, and mobile app fundamentals.",
    tags: ["MERN", "React", "UI/UX", "Mobile Dev"],
    icon: "💼",
  },
];

// ─────────────────────────────────────────────
//  EDUCATION
// ─────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Unity University",
    period: "2022 – Present (4th Year)",
    description:
      "Pursuing a BSc in Computer Science in Addis Ababa, with growing specialization in full-stack development, software engineering, and user-centered design.",
    icon: "🎓",
  },
];
