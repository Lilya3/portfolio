import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaFigma,
  Monitor,
  Layers3,
  Wrench,
  Server,
  SiJavascript,
  SiRedux,
  SiReactrouter,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiEslint,
  SiPrettier,
  VscCode,
  BookOpen,
  Target,
  Puzzle,
  Users,
  Lightbulb,
  PenTool,
  Code2,
  ClipboardCheck,
  Rocket,
} from "./icons";

export const skillGroups = [
  {
    title: "Front-End",
    description: "Création d’interfaces modernes, responsives et accessibles.",
    icon: Monitor,
    skills: [
      { name: "HTML5", level: 95, icon: FaHtml5, className: "icon-html" },
      { name: "CSS3", level: 90, icon: FaCss3Alt, className: "icon-css" },
      { name: "Sass", level: 85, icon: FaSass, className: "icon-sass" },
      {
        name: "JavaScript",
        level: 90,
        icon: SiJavascript,
        className: "icon-javascript",
      },
      { name: "React", level: 85, icon: FaReact, className: "icon-react" },
      {
        name: "React Router",
        level: 80,
        icon: SiReactrouter,
        className: "icon-router",
      },
    ],
  },
  {
    title: "State Management",
    description: "Gestion d’état pour des applications React plus complexes.",
    icon: Layers3,
    skills: [
      {
        name: "Redux Toolkit",
        level: 80,
        icon: SiRedux,
        className: "icon-redux",
      },
    ],
  },
  {
    title: "Outils & Workflow",
    description: "Outils que j’utilise au quotidien pour développer efficacement.",
    icon: Wrench,
    skills: [
      { name: "Git", level: 90, icon: FaGitAlt, className: "icon-git" },
      {
        name: "GitHub",
        level: 95,
        icon: FaGithub,
        className: "icon-github",
      },
      {
        name: "VS Code",
        level: 95,
        icon: VscCode,
        className: "icon-vscode",
      },
      {
        name: "Figma",
        level: 80,
        icon: FaFigma,
        className: "icon-figma",
      },
      {
        name: "ESLint",
        level: 80,
        icon: SiEslint,
        className: "icon-eslint",
      },
      {
        name: "Prettier",
        level: 75,
        icon: SiPrettier,
        className: "icon-prettier",
      },
    ],
  },
  {
    title: "Back-End (bases)",
    description: "Bases back-end pour comprendre et interagir avec les APIs.",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        level: 70,
        icon: FaNodeJs,
        className: "icon-node",
      },
      {
        name: "Express",
        level: 65,
        icon: SiExpress,
        className: "icon-express",
      },
      {
        name: "MongoDB",
        level: 60,
        icon: SiMongodb,
        className: "icon-mongodb",
      },
      {
        name: "API REST",
        level: 85,
        icon: SiPostman,
        className: "icon-api",
      },
    ],
  },
];

export const softSkills = [
  {
    title: "Apprentissage continu",
    description:
      "Je me forme régulièrement pour rester à jour sur les nouvelles technologies.",
    icon: BookOpen,
  },
  {
    title: "Rigueur & qualité",
    description: "J’écris un code propre, structuré et maintenable.",
    icon: Target,
  },
  {
    title: "Résolution de problèmes",
    description: "J’analyse, je teste et je trouve des solutions efficaces.",
    icon: Puzzle,
  },
  {
    title: "Travail en équipe",
    description:
      "J’aime collaborer, partager mes idées et apprendre des autres.",
    icon: Users,
  },
];


export const methodologySteps = [
  {
    title: "Comprendre",
    description: "Analyse du besoin et des objectifs.",
    icon: Lightbulb,
  },
  {
    title: "Concevoir",
    description: "Maquettes, architecture et planification.",
    icon: PenTool,
  },
  {
    title: "Développer",
    description: "Intégration du code et des fonctionnalités.",
    icon: Code2,
  },
  {
    title: "Tester",
    description: "Tests, corrections et optimisations.",
    icon: ClipboardCheck,
  },
  {
    title: "Livrer",
    description: "Mise en production et suivi.",
    icon: Rocket,
  },
];