import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo/Seo";

import { projects } from "../../data/projects";

import "./Projects.scss";

const filters = [
  "Tous",
  "React",
  "JavaScript",
  "Sass",
  "Redux Toolkit",
  "React Router",
  "API REST",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "JWT",
  "SEO",
  "Accessibilité",
  "Performance",
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(activeFilter)
        );

  return (

    <>
      <Seo
        title="Projets | Lilya - Développeuse Front-End React"
        description="Découvrez les projets web réalisés par Lilya : applications React, intégration web, optimisation SEO et interfaces modernes."
      />

    <section className="projects">
      <div className="projects__hero">
        <div>
          <p className="projects__eyebrow">Portfolio</p>

          <h1>
            Mes <span>projets</span>
          </h1>

          <p>
            Découvrez une sélection de projets réalisés durant ma formation,
            avec des problématiques concrètes autour du front-end, du SEO,
            de l'authentification et de la gestion d'état.
          </p>
        </div>

        <div className="projects__visual" aria-hidden="true">
          <span>&lt;/&gt;</span>
        </div>
      </div>

      <div className="projects__filters" aria-label="Filtrer les projets par technologie">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`projects__filter ${
              activeFilter === filter ? "projects__filter--active" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects__list">
        {filteredProjects.length === 0 ? (
          <p className="projects__empty">
            Aucun projet ne correspond à ce filtre.
          </p>
        ) : (
          filteredProjects.map((project) => (
            <article className="projects__item" key={project.id}>
              <div className="projects__image">
                <img
                  src={project.image}
                  alt={`Capture d'écran du projet ${project.title}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="projects__content">
                <h2>{project.title}</h2>

                <p className="projects__subtitle">{project.description}</p>

                <ul className="projects__tags">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                <div className="projects__actions">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label={`Voir le code GitHub du projet ${project.title}`}
                  >
                    Code
                  </a>

                  <Link
                    to={`/projets/${project.slug}`}
                    className="projects__button projects__button--secondary"
                    aria-label={`En savoir plus sur le projet ${project.title}`}
                  >
                    En savoir +
                  </Link>

                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noreferrer"
                      className="projects__button"
                      aria-label={`Voir le site du projet ${project.title}`}
                    >
                      Site
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  </>
  );
}

export default Projects;