function ProjectLightbox({
  image,
  imageIndex,
  projectTitle,
  onClose,
  onPrevious,
  onNext,
}) {
  if (!image) {
    return null;
  }

  return (
    <div
      className="project-details__lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Aperçu agrandi du projet ${projectTitle}`}
      onClick={onClose}
    >
      <button
        type="button"
        className="project-details__lightbox-close"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
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
          onPrevious();
        }}
        aria-label="Image précédente"
      >
        ‹
      </button>

      <img
        src={image}
        alt={`Aperçu agrandi ${imageIndex + 1} du projet ${projectTitle}`}
        decoding="async"
        onClick={(event) => event.stopPropagation()}
      />

      <button
        type="button"
        className="project-details__lightbox-nav project-details__lightbox-nav--next"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Image suivante"
      >
        ›
      </button>
    </div>
  );
}

export default ProjectLightbox;