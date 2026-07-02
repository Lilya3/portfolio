import kasaImage from "../assets/projects/kasa/webp/homepage-desktop.webp";
import argentBankImage from "../assets/projects/argentbank/webp/homepage.webp";
import ninaCarducciImage from "../assets/projects/nina_carducci/webp/gallery-page.webp";

export const projects = [
  {
    id: 1,
    slug: "kasa",
    title: "Kasa",
    description:
      "Application de location immobilière développée avec React, comprenant une navigation dynamique et des pages détaillées.",
    technologies: ["React", "React Router", "Sass"],
    image: kasaImage,
    github: "https://github.com/Lilya3/Kasa",
    demo: null,
    featured: true,
  },
  {
    id: 2,
    slug: "argentbank",
    title: "ArgentBank",
    description:
      "Application bancaire avec authentification, gestion du profil utilisateur et centralisation de l’état avec Redux Toolkit.",
    technologies: ["React", "Redux Toolkit", "API REST", "Express", "MongoDB", "JWT", "Node.js"],
    image: argentBankImage,
    github: "https://github.com/Lilya3/ArgentBank",
    demo: null,
    featured: true,
  },
  {
    id: 3,
    slug: "nina-carducci",
    title: "Nina Carducci",
    description:
      "Optimisation des performances, du référencement naturel et de l’accessibilité du site d’une photographe.",
    technologies: ["HTML", "CSS", "JavaScript", "SEO", "Accessibilité", "Performance"],
    image: ninaCarducciImage,
    github: "https://github.com/Lilya3/Nina_Carducci",
    demo: "https://lilya3.github.io/Nina_Carducci/",
    featured: true,
  },
];