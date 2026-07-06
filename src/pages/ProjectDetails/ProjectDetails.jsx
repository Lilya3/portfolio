import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "../../components/Seo/Seo";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markup";

import { projects } from "../../data/projects";

import "./ProjectDetails.scss";

function ProjectDetails() {
  const { slug } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const project = projects.find((project) => project.slug === slug);

  useEffect(() => {
    if (!project || selectedImageIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImageIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedImageIndex((currentIndex) =>
          currentIndex === 0 ? project.gallery.length - 1 : currentIndex - 1
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedImageIndex((currentIndex) =>
          currentIndex === project.gallery.length - 1 ? 0 : currentIndex + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex, project]);

  if (!project) {
    return <Navigate to="/projets" replace />;
  }

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex((currentIndex) =>
      currentIndex === 0 ? project.gallery.length - 1 : currentIndex - 1
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((currentIndex) =>
      currentIndex === project.gallery.length - 1 ? 0 : currentIndex + 1
    );
  };

  const isHtmlSnippet = project.codeTitle.toLowerCase().includes("html");

  const highlightedCode = Prism.highlight(
    project.codeSnippet,
    isHtmlSnippet ? Prism.languages.markup : Prism.languages.jsx,
    isHtmlSnippet ? "markup" : "jsx"
  );

  return (
    <>
      <Seo
        title={`${project.title} | Lilya - Projet Front-End`}
        description={`Découvrez le projet ${project.title}, réalisé par Lilya dans le cadre de son portfolio de développeuse front-end React.`}
      />

    <section className="project-details">
      <Link to="/projets" 
      className="project-details__back" 
      aria-label="Retourner à la page des projets"
      >
        <span className="code-arrow code-arrow--md space-arrow-right">&lt;</span>
        Retour aux projets
      </Link>

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
            {project.demo && (
              <a
                href={project.demo}
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

      <section className="project-details__about-grid">
        <div className="project-details__about">
          <h2>À propos du projet</h2>
          <p>{project.about}</p>
        </div>

        <div className="project-details__info">
          <div className="project-details__info-row">
            <span>Type</span>
            <strong>{project.type}</strong>
          </div>

          <div className="project-details__info-row">
            <span>Année</span>
            <strong>{project.year}</strong>
          </div>

          <div className="project-details__info-row">
            <span>Outils</span>
            <strong>{project.tools}</strong>
          </div>

          <div className="project-details__info-row">
            <span>API</span>
            <strong>{project.api}</strong>
          </div>

          <div className="project-details__info-row">
            <span>Backend</span>
            <strong>{project.backend}</strong>
          </div>
        </div>
      </section>

      <section className="project-details__details">
        <div className="project-details__features">
          <h2>Fonctionnalités principales</h2>

          <div className="project-details__features-grid">
            {project.features.map((feature) => (
              <article
                className="project-details__feature-card"
                key={feature.title}
              >
                <span className="project-details__feature-icon">
                  {feature.icon}
                </span>

                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="project-details__learning-grid">
          <div className="project-details__learnings">
            <h2>Ce que j'ai appris</h2>

            <ul>
              {project.learnings.map((learning) => (
                <li key={learning}>
                  <span className="code-arrow code-arrow--sm space-arrow-right">
                    &gt;
                  </span>
                  {learning}
                </li>
              ))}
            </ul>
          </div>

          <div className="project-details__code-card">
            <div className="project-details__code-header">
              <span>{project.codeTitle}</span>
            </div>

            <pre>
              <code
                dangerouslySetInnerHTML={{
                  __html: highlightedCode,
                }}
              />
            </pre>
          </div>
        </div>
      </section>

      <section className="project-details__gallery">
        <h2>Aperçu du projet</h2>

        <div className="project-details__gallery-grid">
          {project.gallery.map((image, index) => (
            <button
              key={image}
              type="button"
              className="project-details__gallery-item"
              onClick={() => setSelectedImageIndex(index)}
              aria-label={`Agrandir l'aperçu ${index + 1} du projet ${project.title}`}
            >
             <img
                src={image}
                alt={`Aperçu ${index + 1} du projet ${project.title}`}
                loading="lazy"
                decoding="async"
              />

              <span>Agrandir</span>
            </button>
          ))}
        </div>

        {selectedImageIndex !== null && (
          <div
            className="project-details__lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Aperçu agrandi du projet ${project.title}`}
            onClick={closeLightbox}
          >
            <button
              type="button"
              className="project-details__lightbox-close"
              onClick={closeLightbox}
              onClick={(event) => {
                event.stopPropagation();
                closeLightbox();
              }}
              aria-label="Fermer l'image"
            >
              ×
            </button>

            <button
              type="button"
              className="project-details__lightbox-nav project-details__lightbox-nav--prev"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
              aria-label="Image précédente"
            >
              ‹
            </button>

            <img
              src={project.gallery[selectedImageIndex]}
              alt={`Aperçu agrandi ${selectedImageIndex + 1} du projet ${project.title}`}
              decoding="async"
              onClick={(event) => event.stopPropagation()}
            />

            <button
              type="button"
              className="project-details__lightbox-nav project-details__lightbox-nav--next"
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
              aria-label="Image suivante"
            >
              ›
            </button>
          </div>
        )}
      </section>
    </section>
  </>
  );
}

export default ProjectDetails;