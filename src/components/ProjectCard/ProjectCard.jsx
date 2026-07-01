import "./ProjectCard.scss"

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__image">
        <img
        src={project.image}
        alt={`Aperçu du projet ${project.title}`}
        />
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>

        <p className="project-card__description">
          {project.description}
        </p>

        <ul
        className="project-card__technologies"
        aria-label={`Technologies utilisées pour ${project.title}`}
        >
          {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          {project.demo && (
            <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="project-card__link project-card__link--primary"
            >
              Voir le site
            </a>
          )}

          <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-card__link project-card__link--secondary"
          >
            Voir le code
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard