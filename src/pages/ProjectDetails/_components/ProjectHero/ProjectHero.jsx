import "./ProjectHero.scss";

function ProjectHero({ project }) {
  return (
    <section className="project-details__hero">
      <div className="project-details__content">
        <h1 className="project-details__title">{project.title}</h1>

        <p className="project-details__subtitle">{project.subtitle}</p>

        <p className="project-details__description">{project.description}</p>

        <ul className="project-details__technologies">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-details__actions">
          {project.site && (
            <a
              href={project.site}
              target="_blank"
              rel="noreferrer"
              className="project-details__button project-details__button--primary"
              aria-label={`Voir le site du projet ${project.title}`}
            >
              Site
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-details__button project-details__button--secondary"
            aria-label={`Voir le code GitHub du projet ${project.title}`}
          >
            Code
          </a>
        </div>
      </div>

      <div className="project-details__visual">
        <img
          src={project.image}
          alt={`Capture d'écran du projet ${project.title}`}
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
}

export default ProjectHero;