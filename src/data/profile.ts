export const profile = {
  name: "Alice",
  age: 27,
  title: "Professional IT Developer & Technology Specialist",
  tagline: "Flutter · iOS · Python · React · WordPress",
  location: "United Kingdom",
  rate: "USD 15 / hour",
  availability: "Available for freelance",
  level: "Iron",
  workana: "https://www.workana.com/freelancer/365213241f8bbf307eff3615a51d5c3f",
  headline:
    "Turning ideas into reliable digital solutions through precision, creativity, and dedication.",
  stack: ["Flutter", "iOS", "Python", "React", "WordPress", "Shopify"],
  languages: [
    { name: "English", level: "Native / bilingual", score: 100 },
    { name: "Japanese", level: "High intermediate", score: 78 },
    { name: "Spanish", level: "Intermediate", score: 55 },
  ],
  skills: [
    { name: "Flutter", years: "+10 years", detail: "Cross-platform mobile, polished UI, maintainable widgets" },
    { name: "React.js", years: "+10 years", detail: "Interfaces, dashboards, reusable component systems" },
    { name: "Python", years: "5–10 years", detail: "Data engineering, automation, document processing" },
    { name: "iOS", years: "Mobile", detail: "Intuitive, pleasant native-feeling experiences" },
    { name: "WordPress", years: "Web", detail: "Clear, professional business websites" },
    { name: "Shopify", years: "Commerce", detail: "Storefronts with a clean path to purchase" },
  ],
  experience: {
    position: "Freelance Software Developer",
    company: "Self-employed",
    start: "August 2021",
    current: true,
    bullets: [
      "Develop software and digital solutions based on project requirements.",
      "Work with Flutter, iOS, Python, React, and WordPress where they serve the brief.",
      "Clarify requirements, organize implementation, and keep communication clear.",
      "Review functionality, test important user flows, and check deliverables before submission.",
      "Emphasize attention to detail, maintainable implementation, usability, and quality assurance.",
    ],
  },
  process: [
    {
      n: "01",
      title: "Understand the brief",
      text: "I clarify objectives, priorities, and intended users. If something is unclear, I ask instead of assuming.",
    },
    {
      n: "02",
      title: "Plan the solution",
      text: "Requirements become practical tasks, with dependencies, scope, and expected outcomes made explicit.",
    },
    {
      n: "03",
      title: "Implement with care",
      text: "I work systematically, watching functionality, consistency, usability, and the quality of the code.",
    },
    {
      n: "04",
      title: "Test and refine",
      text: "I review the work against the brief, check key flows, validate inputs, and address issues before you see them.",
    },
    {
      n: "05",
      title: "Deliver cleanly",
      text: "Deliverables match the agreed scope, with limitations communicated and files provided in the agreed format.",
    },
    {
      n: "06",
      title: "Stay in conversation",
      text: "You should always know how the project is progressing. Important decisions are discussed before they become problems.",
    },
  ],
  strengths: [
    { title: "Precision", text: "Requirements and implementation details are reviewed carefully before I move on." },
    { title: "Diligence", text: "Work is approached with patience, consistency, and a strong sense of ownership." },
    { title: "Quality assurance", text: "Functionality, edge cases, and potential issues are checked before delivery." },
    { title: "Organization", text: "Complex work is broken into manageable stages and kept structured." },
    { title: "Reliability", text: "Deadlines are respected, progress is communicated, and concerns are raised early." },
    { title: "Improvement", text: "Feedback is reviewed and the result is refined wherever it genuinely helps." },
  ],
  expect: [
    "A careful review of your requirements before work begins",
    "Professional, respectful communication",
    "Attention to both visible details and underlying functionality",
    "A structured workflow with clearly defined expectations",
    "Honest discussion of scope, feasibility, and challenges",
    "Testing before delivery, and refinements when they are agreed",
  ],
  quote:
    "My commitment is simple: understand carefully, develop thoughtfully, test thoroughly, and deliver professionally.",
};

export type ProjectCategory =
  | "all"
  | "mobile"
  | "web"
  | "data"
  | "commerce"
  | "automation";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  stack: string[];
  category: ProjectCategory;
  date: string;
  image: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "flutter-mobile",
    title: "Cross-Platform Mobile App Development with Flutter",
    summary: "A polished mobile experience built around reusable widgets, validation, and consistent behavior across devices.",
    description:
      "A modern cross-platform mobile application using Flutter, with a focus on responsive UI, consistent user experience, and maintainable structure. Navigation, reusable components, form validation, and clear interaction feedback are treated as first-class work.",
    features: [
      "Cross-platform UI with Flutter and Dart",
      "Reusable widgets and organized app structure",
      "Form handling and input validation",
      "Responsive layouts across screen sizes",
      "Functional testing and interface refinement",
    ],
    stack: ["Flutter", "Dart", "Mobile UI"],
    category: "mobile",
    date: "August 2025",
    image: "/images/work/project-01.png",
    accent: "Flutter",
  },
  {
    slug: "react-dashboard",
    title: "React Business Analytics Dashboard",
    summary: "KPI cards, charts, and filterable tables in a maintainable React component system.",
    description:
      "A responsive analytics dashboard built with React to present business information through organized metrics, charts, and data tables. The interface favors clear hierarchy, reusable components, and practical empty, loading, and error states.",
    features: [
      "Dashboard cards for key performance indicators",
      "Interactive charts and data visualizations",
      "Searchable, filterable tables",
      "Reusable React components",
      "Responsive desktop and mobile layouts",
    ],
    stack: ["React.js", "JavaScript"],
    category: "web",
    date: "September 2025",
    image: "/images/work/project-06.png",
    accent: "React",
  },
  {
    slug: "python-documents",
    title: "Python Document Processing & Data Extraction Automation",
    summary: "Automation that extracts, validates, and exports business documents without silently accepting bad data.",
    description:
      "A document-processing automation concept that reduces manual effort when extracting, organizing, and validating information from business documents. Uncertain results are flagged for review rather than quietly accepted.",
    features: [
      "Processing of supported document formats",
      "Extraction of text and relevant fields",
      "Validation of extracted values",
      "Structured CSV or Excel output",
      "Error reporting for ambiguous results",
    ],
    stack: ["Python", "Database"],
    category: "data",
    date: "February 2026",
    image: "/images/work/project-02.png",
    accent: "Python",
  },
  {
    slug: "wordpress-redesign",
    title: "WordPress Website Redesign & User Experience Improvement",
    summary: "A clearer, more consistent WordPress presence with stronger hierarchy, navigation, and mobile behavior.",
    description:
      "A redesign concept focused on presentation, usability, and maintainability of an existing WordPress site. Pages are reviewed for navigation, layout consistency, and a better experience across devices, without discarding important content.",
    features: [
      "Typography, spacing, and visual hierarchy",
      "Simplified navigation and page organization",
      "Mobile-friendly layouts",
      "Forms, links, and interactive checks",
      "On-page SEO and accessibility review",
    ],
    stack: ["WordPress", "Responsive Web Design"],
    category: "web",
    date: "April 2026",
    image: "/images/work/project-03.png",
    accent: "WordPress",
  },
  {
    slug: "shopify-store",
    title: "Shopify E-commerce Store Design & Development",
    summary: "A clean commerce experience with a clear path from product discovery to checkout.",
    description:
      "A professional Shopify storefront concept designed to help businesses showcase products and give customers a smooth shopping experience. Layout, navigation, and product presentation stay consistent from desktop to mobile.",
    features: [
      "Homepage and collection layouts",
      "Product pages with variants and media",
      "Cart and checkout configuration",
      "Menus and product filtering",
      "Responsive storefront design",
    ],
    stack: ["Shopify", "E-commerce"],
    category: "commerce",
    date: "May 2025",
    image: "/images/work/project-04.png",
    accent: "Shopify",
  },
  {
    slug: "unity-adventure",
    title: "Unity 3D Adventure Game Development",
    summary: "Immersive environments, responsive controls, and readable gameplay architecture in Unity.",
    description:
      "A 3D adventure concept developed with Unity, combining real-time movement, camera control, exploration, and interaction systems. Player controls, interactions, and game logic are kept clearly separated.",
    features: [
      "Third-person movement and camera",
      "Interactive objects and triggers",
      "Level navigation and checkpoints",
      "Game state and scene management",
      "In-game UI for objectives and feedback",
    ],
    stack: ["Unity 3D", "C#"],
    category: "mobile",
    date: "December 2025",
    image: "/images/work/project-05.png",
    accent: "Unity",
  },
  {
    slug: "wellness-site",
    title: "Women's Massage & Wellness Website Design and Development",
    summary: "An elegant, calm booking-led site for a massage and wellness studio.",
    description:
      "A modern website concept for a women's massage and wellness service. The design combines a refined visual identity, intuitive navigation, and clear service information so clients can explore treatments and request appointments with ease.",
    features: [
      "Elegant homepage and branding",
      "Treatment descriptions and categories",
      "Therapist and studio introduction",
      "Appointment or inquiry form",
      "Responsive layouts and clear CTAs",
    ],
    stack: ["WordPress", "HTML", "CSS", "JavaScript"],
    category: "web",
    date: "March 2026",
    image: "/images/work/project-07.jpg",
    accent: "Wellness",
  },
  {
    slug: "excel-vba",
    title: "Excel VBA Business Process Automation",
    summary: "Macros that take repetitive spreadsheet work off the table and keep outputs consistent.",
    description:
      "An Excel VBA solution designed to reduce repetitive manual work and improve consistency in routine operations. Structured data is processed through predefined business rules, with validation and readable procedures.",
    features: [
      "Automated processing and formatting",
      "Macro-driven repetitive tasks",
      "Input validation and error handling",
      "Consistent output generation",
      "Clear controls and status messages",
    ],
    stack: ["Excel", "VBA"],
    category: "automation",
    date: "July 2026",
    image: "/images/work/project-08.jpg",
    accent: "VBA",
  },
  {
    slug: "make-notion",
    title: "Make.com & Notion Business Workflow Automation",
    summary: "Connected operations that create and update Notion records from live business events.",
    description:
      "A workflow automation concept integrating Make.com with Notion to reduce duplicate data entry and keep operational information centralized. Incoming events are mapped to Notion properties with validation and monitoring.",
    features: [
      "Automated Notion database entries",
      "Field mapping from incoming events",
      "Conditional routing by business rules",
      "Validation of missing information",
      "Error handling and execution monitoring",
    ],
    stack: ["Make.com", "Notion API", "Webhooks"],
    category: "automation",
    date: "March 2026",
    image: "/images/work/project-09.jpg",
    accent: "Ops",
  },
];

export const filters: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "web", label: "Web & React" },
  { id: "mobile", label: "Mobile" },
  { id: "data", label: "Python & data" },
  { id: "commerce", label: "Commerce" },
  { id: "automation", label: "Automation" },
];
