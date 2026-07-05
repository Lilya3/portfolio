import "./Home.scss";
import { Link } from "react-router-dom";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../data/projects";

function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="home">
      <div className="home__hero">
        <div className="home__content">
          <p className="home__eyebrow">Portfolio</p>

          <h1 className="home__title">
            Prénom Nom
            <span>développeuse Front-End React</span>
          </h1>

          <p className="home__description">
            Après une reconversion professionnelle,
            je conçois des interfaces web modernes,
            accessibles et maintenables avec React,
            JavaScript et Sass.
          </p>

          <div className="home__actions">
            <Link
              to="/projets"
              className="home__button home__button--primary"
            >
              Voir mes projets
            </Link>

            <a
              href="https://github.com/Lilya3"
              target="_blank"
              rel="noreferrer"
              className="home__button home__button--secondary"
            >
              Voir mon GitHub
            </a>
          </div>
        </div>

        <div className="home__visual" aria-hidden="true">
          <div className="home__card">
            <span className="home__card-tag">React</span>
            <span className="home__card-tag">JavaScript</span>
            <span className="home__card-tag">Sass | SCSS</span>

            <pre>
{`const developer = {
  name: "Lilya",
  role: "Front-End",
  stack: ["React", "JS", "Sass"],
};`}
            </pre>
          </div>
        </div>
      </div>

      <div className="home__stats">
        <div className="home__stat">
          <strong>11</strong>
          <span>projets réalisés</span>
        </div>

        <div className="home__stat">
          <strong>React</strong>
          <span>Spécialisation front-end</span>
        </div>

        <div className="home__stat">
          <strong>Formation</strong>
          <span>OpenClassrooms - Intégrateur Web</span>
        </div>
      </div>

      <section className="home__featured">
        <div className="home__section-heading">
          <h2>Projets vedettes</h2>

          <Link
            to="/projets"
            className="home__section-link"
          >
            Découvrir les projets <span className="code-arrow code-arrow--md space-arrow-left">&gt;</span>
          </Link>
        </div>

        <div className="home__projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>

      <section className="home__about">
        <div className="home__about-content">
          <p className="home__section-label">À propos de moi</p>

          <p>
            Après une reconversion et une formation OpenClassrooms, je suis motivée à
            intégrer une équipe de développement pour continuer à apprendre, collaborer
            et contribuer à des projets concrets.
          </p>

          {/* <Link to="/parcours" className="home__about-button">
            En savoir plus sur mon parcours →
          </Link> */}
        </div>

        <div className="home__about-visual" aria-hidden="true">
          <span className="home__about-code">&lt;/&gt;</span>
        </div>
      </section>
    </section>
  );
}

export default Home;