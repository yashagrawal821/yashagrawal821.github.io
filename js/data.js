/* ============================================================================
   DATA.JS — ALL EDITABLE PORTFOLIO CONTENT LIVES HERE
   ============================================================================
   This is the ONLY file you should need to edit to update your portfolio.

   HOW TO ADD A NEW PROJECT:
     Copy one object inside PROJECTS (between the { and }), paste it as a
     new entry, and edit the values. Nothing else needs to change.

   HOW TO ADD A NEW SKILL / TOOL TO THE CAROUSEL:
     Add one object to TECH_LOGOS with a name, an icon path (put the SVG
     file in assets/icons/), and a brand color.

   HOW TO ADD A NEW EXPERIENCE / TIMELINE ENTRY:
     Add one object to EXPERIENCE. Order = left-to-right on desktop,
     top-to-bottom on mobile, so keep them chronological.

   HOW TO CHANGE YOUR ACHIEVEMENT:
     Edit the ACHIEVEMENT object directly.

   After editing, save this file and re-upload it to your GitHub repo —
   nothing else in the project needs to change.
   ============================================================================ */

const PROFILE = {
  name: "Yash Agrawal",
  role: "Data Analyst",
  location: "Moradabad, Uttar Pradesh, India",
  tagline: "Make the data speak!",
  email: "yashsinghal821866@gmail.com",
  phone: "+91 8218663981",
  linkedin: "https://www.linkedin.com/in/yashsite",
  github: "https://github.com/yashagrawal821",
  resumeFile: "assets/resume.pdf",
  photo: "assets/images/profile.jpg",
  summary:
    "Detail-oriented and analytically driven Computer Science graduate specializing in Data analytics and business intelligence. I take operational data through a disciplined pipeline — cleaning, modelling, analysis and visualization — until it becomes something a decision-maker can act on the same day.",
  education: {
    degree: "B.Tech, Computer Science & Engineering",
    school: "IFTM University",
    years: "2022 – 2026",
    cgpa: "8.34",
  },
};

/* Workflow chain shown in the About section (edit labels/order if you like) */
const WORKFLOW = [
  "RAW DATA",
  "CLEAN DATA",
  "MODELED DATA",
  "ANALYSIS",
  "DASHBOARD",
  "BUSINESS DECISION",
];

/* ============================================================================
   SKILLS — grouped into cards. Add/remove chips freely within a group,
   or add a whole new group object to the array.
   ============================================================================ */
const SKILLS = [
  {
    group: "Analytics & Reporting",
    color: "var(--cyan)",
    items: ["Data Analysis", "Report Automation", "KPI Reporting"],
  },
  {
    group: "Advanced SQL",
    color: "var(--cyan)",
    items: ["CTEs", "Window Functions", "RANK / DENSE_RANK / NTILE", "LAG", "Subqueries", "CASE Logic"],
  },
  {
    group: "Business Intelligence",
    color: "var(--violet)",
    items: ["Power BI", "DAX", "Dashboarding", "Data Visualization"],
  },
  {
    group: "Excel & Data Prep",
    color: "var(--violet)",
    items: ["Advanced Excel", "Data Cleaning & Transformation", "Data Validation"],
  },
  {
    group: "Data Modelling",
    color: "var(--gold)",
    items: ["Schema Design", "Query Optimization", "Pareto / Cumulative Analysis"],
  },
  {
    group: "Technical Foundation",
    color: "var(--gold)",
    items: ["C", "C++", "JavaScript", "HTML / CSS", "Solidity", "DSA"],
  },
];

/* ============================================================================
   TECH LOGO CAROUSEL — the moving strip of tools & technologies.
   `icon` points to an SVG in assets/icons/. To add a new one, drop the SVG
   there and add an entry here.
   ============================================================================ */
const TECH_LOGOS = [
  { name: "MySQL", icon: "assets/icons/mysql.svg" },
  { name: "Power BI", icon: "assets/icons/powerbi.svg" },
  { name: "DAX", icon: "assets/icons/dax.svg" },
  { name: "Excel", icon: "assets/icons/excel.svg" },
  { name: "JavaScript", icon: "assets/icons/javascript.svg" },
  { name: "HTML5", icon: "assets/icons/html5.svg" },
  { name: "CSS3", icon: "assets/icons/css3.svg" },
  { name: "C", icon: "assets/icons/c.svg" },
  { name: "C++", icon: "assets/icons/cplusplus.svg" },
  { name: "Solidity", icon: "assets/icons/solidity.svg" },
  { name: "Git", icon: "assets/icons/git.svg" },
  { name: "GitHub", icon: "assets/icons/github.svg" },
];

/* ============================================================================
   PROJECTS — the centerpiece of the site.
   category must be one of: "MySQL / SQL", "Power BI", "Analytics", "MIS / Operations"
   accent: any of "cyan" | "violet" | "gold"
   media: array of image paths — first one is the card's main preview image.
   ============================================================================ */
const PROJECTS = [
  {
    id: "supply-chain-sql",
    title: "MySQL Supply Chain & Logistics Analysis",
    category: "MySQL / SQL",
    accent: "cyan",
    problem:
      "Supply chain data was fragmented across ten disconnected tables with no unified, validated view of customer, inventory, supplier or logistics performance.",
    tools: ["MySQL", "Advanced SQL", "CTEs", "Window Functions"],
    metrics: [
      { num: "178", label: "Queries" },
      { num: "10", label: "Tables" },
      { num: "9", label: "Chapters" },
    ],
    outcome:
      "A 9-chapter, fully validated analytical report — from data integrity checks to customer segmentation, Pareto/profitability analysis, inventory health, supplier dependency, warehouse efficiency and logistics performance.",
    github: "https://github.com/yashagrawal821/MySQL-Supply-Chain-And-Logistics-Analysis",
    live: null,
    media: ["assets/images/projects/supply-chain-1.png"],
  },
  {
    id: "powerbi-healthcare",
    title: "Power BI Healthcare Analytics Dashboard",
    category: "Power BI",
    accent: "gold",
    problem:
      "Hospital data was scattered across five separate reports — no single place to see admissions, revenue, bed occupancy and department performance together.",
    tools: ["Power BI", "DAX", "Data Modelling"],
    metrics: [
      { num: "25K+", label: "Records" },
      { num: "9", label: "Tables" },
      { num: "40+", label: "DAX Measures" },
    ],
    outcome:
      "A single-page dynamic dashboard using bookmark navigation to deliver 6 distinct report views — Overview, Patients, Doctors, Departments, Finance, Operations — feeling like a live website, not a static report.",
    github: "https://github.com/yashagrawal821/PowerBI-Healthcare-Report",
    live: null,
    media: [
      "assets/images/projects/healthcare-1.png",
      "assets/images/projects/healthcare-2.png",
    ],
  },
  {
    id: "powerbi-sales",
    title: "Power BI Sales Performance Report",
    category: "Power BI",
    accent: "violet",
    problem:
      "Sales leadership needed one interactive report to track revenue, margin and target achievement across regions, products and customers — not five static spreadsheets.",
    tools: ["Power BI", "DAX", "Power Query"],
    metrics: [
      { num: "6", label: "Report Pages" },
      { num: "8", label: "Tables" },
      { num: "30+", label: "DAX Measures" },
    ],
    outcome:
      "A 6-page interactive report — Executive, Regional, Product, Customer and Profitability views plus drill-through — delivering dynamic KPIs, trend analysis and drill-down insight for sales stakeholders.",
    github: "https://github.com/yashagrawal821/PowerBI-Sales-Performance-Report",
    live: null,
    media: [
      "assets/images/projects/sales-1.png",
      "assets/images/projects/sales-2.png",
    ],
  },

  /* ---------------------------------------------------------------------
     TO ADD A NEW PROJECT: copy the block below, fill it in, and add a
     comma after the closing brace above. Then drop preview image(s) into
     assets/images/projects/ and point `media` at them.
  --------------------------------------------------------------------- 
  {
    id: "your-project-slug",
    title: "Project Title",
    category: "MySQL / SQL",   // or "Power BI" | "Analytics" | "MIS / Operations"
    accent: "cyan",             // "cyan" | "violet" | "gold"
    problem: "One sentence: the business problem.",
    tools: ["Tool 1", "Tool 2"],
    metrics: [
      { num: "12", label: "Something" },
      { num: "34", label: "Something Else" },
    ],
    outcome: "One or two sentences: what it delivered.",
    github: "https://github.com/yourname/your-repo",
    live: null,                 // or a URL if it's deployed somewhere
    media: ["assets/images/projects/your-image.png"],
  },
  --------------------------------------------------------------------- */
];

/* ============================================================================
   EXPERIENCE / JOURNEY TIMELINE
   ============================================================================ */
const EXPERIENCE = [
  {
    year: "2025",
    title: "Web Design & Development Internship",
    org: "Internship Studio",
    desc: "HTML · CSS · JS foundations",
    color: "var(--text-faint)",
  },
  {
    year: "2026",
    title: "Freelance Data Analyst",
    org: "Independent Client Engagement (Remote)",
    desc: "Power BI dashboard for a startup founder",
    color: "var(--cyan)",
  },
  {
    year: "2026",
    title: "Assistant Data Analyst",
    org: "Nilgriva Stockflow Advisory Pvt Ltd (On site)",
    desc: "Business analytics",
    color: "var(--gold)",
  },
];

const ACHIEVEMENT = {
  label: "Winner as Team Leader · Nov 2023",
  title: "Maharishi Startup Expo 2.0 — 1st position among ~25 teams",
  detail: "Startup Innovation Hackathon, Maharishi University, Lucknow — led the team end-to-end across ideation, execution and final presentation.",
  icon: "🏆",
};
