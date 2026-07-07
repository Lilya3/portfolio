import { useState } from "react";
import Seo from "../../components/Seo/Seo";

import { projects } from "../../data/projects";

import ProjectFilters from "./_components/ProjectFilters/ProjectFilters";
import ProjectListItem from "./_components/ProjectListItem/ProjectListItem";

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

        <ProjectFilters
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="projects__list">
          {filteredProjects.length === 0 ? (
            <p className="projects__empty">
              Aucun projet ne correspond à ce filtre.
            </p>
          ) : (
            filteredProjects.map((project) => (
              <ProjectListItem project={project} key={project.id} />
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;