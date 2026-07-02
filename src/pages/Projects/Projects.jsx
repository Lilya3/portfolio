import { useState } from "react";
import { Link } from "react-router-dom";

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
                  <a href={project.github} target="_blank" rel="noreferrer">
                    Voir le code
                  </a>

                  <Link
                    to={`/projets/${project.slug}`}
                    className="projects__button"
                  >
                    Voir le projet
                  </Link>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

export default Projects;