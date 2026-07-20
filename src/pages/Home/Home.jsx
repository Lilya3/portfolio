import Seo from "../../components/Seo/Seo";

import { projects } from "../../data/projects";

import HomeHero from "./_components/HomeHero/HomeHero";
import HomeStats from "./_components/HomeStats/HomeStats";
import HomeFeaturedProjects from "./_components/HomeFeaturedProjects/HomeFeaturedProjects";
import HomeAbout from "./_components/HomeAbout/HomeAbout";

import "./Home.scss";

function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <Seo
        title="Accueil | Lilya3 - Développeuse Front-End React"
        description="Portfolio de Lilya3, développeuse front-end React. Découvrez ses projets web, ses compétences et son profil."
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