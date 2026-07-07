import Seo from "../../components/Seo/Seo";

import { projects } from "../../data/projects";

import HomeHero from "./components/HomeHero/HomeHero";
import HomeStats from "./components/HomeStats/HomeStats";
import HomeFeaturedProjects from "./components/HomeFeaturedProjects/HomeFeaturedProjects";
import HomeAbout from "./components/HomeAbout/HomeAbout";

import "./Home.scss";

function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <Seo
        title="Accueil | Lilya - Développeuse Front-End React"
        description="Portfolio de Lilya, développeuse front-end React. Découvrez ses projets web, ses compétences et son profil."
      />

      <section className="home">
        <HomeHero />
        <HomeStats />
        <HomeFeaturedProjects projects={featuredProjects} />
        <HomeAbout />
      </section>
    </>
  );
}

export default Home;