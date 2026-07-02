import kasaAbout from "../assets/projects/kasa/webp/about-page.webp";
import kasaHome from "../assets/projects/kasa/webp/homepage-desktop.webp";
import kasaHousingCollapsed from "../assets/projects/kasa/webp/housing-details-collapsed.webp";
import kasaHousingExpanded from "../assets/projects/kasa/webp/housing-details-expanded.webp";

import argentBankHome from "../assets/projects/argentbank/webp/homepage.webp";
import argentBankSignIn from "../assets/projects/argentbank/webp/sign-in-form.webp";
import argentBankUserProfile from "../assets/projects/argentbank/webp/user-profile.webp";
import argentBankEditProfile from "../assets/projects/argentbank/webp/edit-user-profile.webp";

import ninaGallery from "../assets/projects/nina_carducci/webp/gallery-page.webp";
import ninaServices from "../assets/projects/nina_carducci/webp/services-pages.webp";
import ninaContact from "../assets/projects/nina_carducci/webp/contact-page.webp";
import ninaMobile from "../assets/projects/nina_carducci/webp/homepage-mobile.webp";

export const projects = [
  {
    id: 1,
    slug: "kasa",

    title: "Kasa",

    subtitle : "Application de location immobilière",
    
    description:
    "Application de location immobilière développée avec React",
    
    about: "L'objectif de ce projet était de développer le front-end d'une application de location immobilière React Router, des pages détaillées pour chaque logement, des composants réutilisables, une navigation dynamique et une interface responsive basée sur des données JSON.",
    
    type: "Application web",

    year: "2026",

    duration: "2 semaines",

    tools: "React",

    api: "Données JSON",

    backend:"Aucun",

    status: "Projet validé",

    technologies: ["React", "React Router", "Sass"],

    features: [
      {
        title: "Recherche",
        description: "Recherche de logements par ville ou mot-clé.",
        icon: "⌕"
      },
      {
        title: "Filtres",
        description: "Filtrage par équipements.",
        icon: "◈"
      },
      {
        title: "Responsive",
        description: "Adapté à tous les écrans.",
        icon: "◈"
      },
      {
        title: "Navigation",
        description: "Navigation fluide.",
        icon: ">"
      }
    ],

    learnings: [
      "Structurer une application React avec des composants réutilisables",
      "Gérer une navigation dynamique avec React Router",
      "Manipuler des données JSON locales",
      "Créer une interface responsive avec Sass",
    ],
    
    codeTitle: "Slideshow.jsx",

    codeSnippet: `export default function Slideshow({ pictures }) {
      const [currentIndex, setCurrentIndex] = useState(0);
      const total = pictures.length;

      const nextSlide = () => {
        setCurrentIndex(currentIndex === total - 1 ? 0 : currentIndex + 1);
      };

      const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? total - 1 : currentIndex - 1);
      };

      return (
        <img
          src={pictures[currentIndex]}
          alt={\`Slide \${currentIndex + 1}\`}
          className="slideshow__image"
        />
      );
    }`,

    image: kasaHome,

    gallery: [
      kasaHome,
      kasaAbout,
      kasaHousingCollapsed,
      kasaHousingExpanded,
    ],

    github: "https://github.com/Lilya3/Kasa",

    demo: null,

    featured: true,
  },


  {
    id: 2,

    slug: "argentbank",

    title: "ArgentBank",

    subtitle: "Application bancaire avec authentification",

    description:
    "Application bancaire avec authentification, gestion du profil utilisateur et centralisation de l’état avec Redux Toolkit.",

    about:
    "Ce projet consistait principalement à développer le front-end d'une application bancaire avec React et Redux Toolkit. J'y ai mis en place l'authentification utilisateur, la gestion du token JWT, ainsi que la récupération et la modification des données du profil via une API REST. J'ai également travaillé avec un back-end existant basé sur Node.js, Express et MongoDB, et participé à la conception de son évolution en proposant une documentation Swagger pour les futurs endpoints de gestion des transactions.",
    
    type: "Application web",

    year: "2026",

    duration: "3 semaines",

    tools: "React, Redux Toolkit, Swagger",

    api: "API REST",

    backend: "Node.js, Express, MongoDB",

    status: "Projet validé",

    technologies: ["React", "Redux Toolkit", "API REST", "Express", "MongoDB", "JWT", "Node.js"],

    features: [
      {
        title: "Authentification",
        description: "Connexion sécurisée avec token JWT.",
        icon: "◈",
      },
      {
        title: "Profil utilisateur",
        description: "Récupération et modification du profil.",
        icon: "◈",
      },
      {
        title: "État global",
        description: "Gestion des données utilisateur avec Redux Toolkit.",
        icon: "◈",
      },
      {
        title: "API REST",
        description: "Communication avec un back-end Node.js / Express.",
        icon: "◈",
      },
    ],

    learnings: [
      "Gérer une authentification avec JWT",
      "Centraliser l’état utilisateur avec Redux Toolkit",
      "Consommer une API REST depuis React",
      "Comprendre un environnement Node.js, Express et MongoDB",
    ],

    codeTitle: "Profile.jsx",

    codeSnippet: `const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);

    const [isEditing, setIsEditing] = useState(false);
    const [editedUserName, setEditedUserName] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();

      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          Authorization: \`Bearer \${token}\`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: editedUserName,
        }),
      });

      const data = await response.json();
      dispatch(setUser(data.body));
      setIsEditing(false);
    };`,
    
    image: argentBankHome,

    gallery: [
      argentBankHome,
      argentBankSignIn,
      argentBankUserProfile,
      argentBankEditProfile,
    ],
    
    github: "https://github.com/Lilya3/ArgentBank",
    
    demo: null,
    
    featured: true,
  },


  {
    id: 3,

    slug: "nina-carducci",

    title: "Nina Carducci",

    subtitle: "Optimisation SEO et performances",

    description:
    "Optimisation des performances, du référencement naturel et de l’accessibilité du site d’une photographe.",

    about:
    "L'objectif de ce projet était d'améliorer les performances, le référencement naturel et l'accessibilité du site d'une photographe. J'ai optimisé les images, amélioré la structure HTML, ajouté des balises SEO, corrigé des points d'accessibilité et vérifié les résultats avec Lighthouse.",
    
    type: "Site vitrine",

    year: "2026",

    duration: "2 semaines",

    tools: "HTML, CSS, JavaScript, Lighthouse",

    api: "Aucune",

    backend: "Aucun",

    status:"Projet validé",

    technologies: ["HTML", "CSS", "JavaScript", "SEO", "Accessibilité", "Performance"],

    features: [
      {
        title: "Performance",
        description: "Optimisation du score Lighthouse.",
        icon: "◈",
      },
      {
        title: "SEO",
        description: "Amélioration du référencement naturel.",
        icon: "◈",
      },
      {
        title: "Accessibilité",
        description: "Correction des points bloquants d’accessibilité.",
        icon: "◈",
      },
      {
        title: "Images optimisées",
        description: "Compression, WebP et chargement optimisé.",
        icon: "◈",
      },
    ],

    learnings: [
      "Analyser un site avec Lighthouse",
      "Optimiser les images pour le web",
      "Améliorer le SEO technique",
      "Appliquer des bonnes pratiques d’accessibilité",
    ],

    codeTitle: "index.html",

    codeSnippet: `<title>Photographe professionnelle à Bordeaux - Nina Carducci</title>

    <meta name="description" content="Photographe professionnelle à Bordeaux spécialisée en mariages, portraits et événements. Devis sous 24h.">

    <meta property="og:title" content="Nina Carducci - Photographe à Bordeaux">
    <meta property="og:description" content="Photographe professionnelle à Bordeaux spécialisée en mariages, portraits et événements. Devis sous 24h.">
    <meta property="og:type" content="website">

    <img
      src="./assets/images/slider/wedding-photography-romantic-moment.webp"
      alt="Bride and groom dancing together at their wedding"
      width="1920"
      height="887"
    >`,
    
    image: ninaGallery,

    gallery: [
      ninaGallery,
      ninaServices,
      ninaContact,
      ninaMobile,
    ],
    
    github: "https://github.com/Lilya3/Nina_Carducci",
    
    demo: "https://lilya3.github.io/Nina_Carducci/",
    
    featured: true,
  },
];