export const PROFESSIONAL = "professional";
export const GAMER = "gamer";

export const themes = {
  professional: {
    bg: "#000",
    surface: "#0a0005",
    card: "#110008",
    border: "#2a0012",
    accent: "#ff0055",
    accentDim: "#cc0044",
    accentRgb: "255,0,85",
    text: "#fff",
    muted: "#999",
    btnBg: "#ff0055",
    btnText: "#fff",
    heroGrad:
      "radial-gradient(ellipse 60% 70% at 75% 50%, rgba(255,0,85,0.12) 0%, transparent 65%)",
    fontDisplay: "'Syne', sans-serif",
    fontBody: "'DM Sans', sans-serif",
    label: "PROFESSIONAL MODE",
    radarColor: "#ff0055",
    timelineAccent: "#ff0055",
  },
  gamer: {
    bg: "#000",
    surface: "#08060f",
    card: "#100d1c",
    border: "#2a2250",
    accent: "#c8b8ff",
    accentDim: "#9d88ee",
    accentRgb: "200,184,255",
    text: "#fff",
    muted: "#999",
    btnBg: "#c8b8ff",
    btnText: "#080610",
    heroGrad:
      "radial-gradient(ellipse 60% 70% at 75% 50%, rgba(200,184,255,0.12) 0%, transparent 65%)",
    fontDisplay: "'Orbitron', sans-serif",
    fontBody: "'Exo 2', sans-serif",
    label: "GAMER MODE",
    radarColor: "#c8b8ff",
    timelineAccent: "#00e5ff",
  },
};

export const timeline = [
  {
    year: "2019",
    title: "Junior Architect",
    desc: "Mastering the foundations of pixel-perfect frontend engineering and clean architectural patterns.",
  },
  {
    year: "2021",
    title: "Full-Stack Systems",
    desc: "Scaling distributed microservices and real-time data delivery for high-traffic fintech ecosystems.",
  },
  {
    year: "2022",
    title: "Technical Leadership",
    desc: "Leading cross-functional engineering teams to deliver high-end digital solutions and optimized performance.",
  },
  {
    year: "2024",
    title: "DualVault Protocol",
    desc: "Launching the next generation of digital portfolios through uncompromised dual-state architecture.",
  },
];

export const projects = [
  {
    title: "FinTech Dashboard",
    tag: "React - Node.js - PostgreSQL",
    desc: "Real-time financial analytics platform serving 50k+ daily active users with sub-100ms query response.",
    link: "#",
    year: "2024",
  },
  {
    title: "AI Content Engine",
    tag: "Python - FastAPI - OpenAI",
    desc: "Automated content generation pipeline reducing editorial workload by 70% across 3 major publications.",
    link: "#",
    year: "2023",
  },
  {
    title: "Design System v2",
    tag: "Storybook - TypeScript - Figma",
    desc: "Modular component library adopted by 12 engineering teams with 98% accessibility compliance.",
    link: "#",
    year: "2023",
  },
  {
    title: "GameSync Protocol",
    tag: "Unity - C# - WebSockets",
    desc: "Low-latency multiplayer synchronization engine achieving <16ms tick rate for competitive play.",
    link: "#",
    year: "2022",
  },
  {
    title: "Cloud Migration Suite",
    tag: "AWS - Terraform - Docker",
    desc: "Infrastructure-as-code toolkit that migrated 200+ legacy services to cloud with zero downtime.",
    link: "#",
    year: "2022",
  },
  {
    title: "Shader Library",
    tag: "GLSL - Three.js - WebGL",
    desc: "Collection of 40+ production-ready shaders for game environments and interactive web experiences.",
    link: "#",
    year: "2021",
  },
];

export const skills = [
  {
    node: "NODE.1",
    title: "Frontend Architecture",
    desc: "Architecting high-performance interfaces with Next.js and Framer Motion. Focused on fluid transitions and pixel-perfect responsiveness.",
  },
  {
    node: "NODE.2",
    title: "Interaction Design",
    desc: "Crafting immersive user journeys through advanced motion principles and interactive prototypes.",
  },
  {
    node: "NODE.3",
    title: "Backend Systems",
    desc: "Building scalable microservices and robust API layers using Node.js, PostgreSQL, and GraphQL.",
  },
  {
    node: "NODE.4",
    title: "Game Development",
    desc: "Engineering real-time experiences with Unity and C#. Specializing in shader programming and procedural generation.",
  },
];

export const testimonials = [
  {
    quote: "Architectural precision in code is unmatched. The professional persona is sleek and highly performant.",
    name: "Alex Rivers",
    role: "Senior Engineer @ Meta",
  },
  {
    quote: "The gaming dashboard is next-level. It captures the energy of a pro-setup while keeping stats perfectly organized.",
    name: "Viper Chen",
    role: "Captain @ Team Neon",
  },
  {
    quote: "A rare talent that bridges the gap between high-end engineering and creative play. The dual-state UI is flawless.",
    name: "Sarah Jenkins",
    role: "UX Lead @ Adobe",
  },
  {
    quote: "Switching between the minimalist work profile and the high-energy gaming mode is seamless. Brilliant execution.",
    name: "Cipher",
    role: "Lead Dev @ OpenSource",
  },
];

export const logos = [
  "NVIDIA",
  "AWS",
  "Cloudflare",
  "Google Cloud",
  "Azure",
  "Intel",
  "Oracle",
  "IBM",
];

export const skillMatrixLogos = [
  { name: "AWS" },
  { name: "GCP" },
  { name: "Next" },
  { name: "React" },
  { name: "Node" },
  { name: "Express" },
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "MySQL" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "Firebase" },
  { name: "Supabase" },
  { name: "C" },
  { name: "C++" },
  { name: "JavaScript" },
  { name: "Go" },
  { name: "Python" },
  { name: "TypeScript" },
  { name: "Cloudinary" },
  { name: "Docker" },
  { name: "Tailwind" },
  { name: "Bootstrap" },
  { name: "Postman" },
];

export const podium = [
  { rank: 2, game: "CS2", rankName: "GLOBAL", color: "#00e5ff", icon: "AIM" },
  { rank: 1, game: "VALORANT", rankName: "RADIANT", color: "#ff4d6d", icon: "PRO" },
  { rank: 3, game: "APEX LEGENDS", rankName: "PREDATOR", color: "#c8b8ff", icon: "SYS" },
];

export const rankList = [
  { num: "04", game: "OVERWATCH 2", rank: "GRANDMASTER" },
  { num: "05", game: "LEAGUE OF LEGENDS", rank: "CHALLENGER" },
  { num: "06", game: "DOTA 2", rank: "IMMORTAL" },
  { num: "07", game: "RAINBOW SIX", rank: "CHAMPION" },
  { num: "08", game: "WARZONE", rank: "IRIDESCENT" },
  { num: "09", game: "ROCKET LEAGUE", rank: "GC III" },
  { num: "10", game: "STREET FIGHTER 6", rank: "MASTER" },
];
