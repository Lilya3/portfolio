import "./ProjectGallery.scss";

function ProjectGallery({ images, projectTitle, onSelectImage }) {
  return (
    <section className="project-details__gallery">
      <h2>Aperçu du projet</h2>

      <div className="project-details__gallery-grid">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className="project-details__gallery-item"
            onClick={() => onSelectImage(index)}
            aria-label={`Agrandir l'aperçu ${index + 1} du projet ${projectTitle}`}
          >
            <img
              src={image}
              alt={`Aperçu ${index + 1} du projet ${projectTitle}`}
              loading="lazy"
              decoding="async"
            />

            <span>Agrandir</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ProjectGallery;