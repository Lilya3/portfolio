import { Link } from "react-router-dom";

function ProjectListItem({ project }) {
  return (
    <article className="projects__item">
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
  );
}

export default ProjectListItem;