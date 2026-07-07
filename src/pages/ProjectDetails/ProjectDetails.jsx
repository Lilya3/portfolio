import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "../../components/Seo/Seo";

import { projects } from "../../data/projects";

import ProjectHero from "./components/ProjectHero/ProjectHero";
import ProjectInfoRow from "./components/ProjectInfoRow/ProjectInfoRow";
import ProjectFeatureCard from "./components/ProjectFeatureCard/ProjectFeatureCard";
import ProjectLearningList from "./components/ProjectLearningList/ProjectLearningList";
import ProjectCodeBlock from "./components/ProjectCodeBlock/ProjectCodeBlock";
import ProjectGallery from "./components/ProjectGallery/ProjectGallery";
import ProjectLightbox from "./components/ProjectLightbox/ProjectLightbox";

import useProjectLightbox from "./hooks/useProjectLightbox";

import "./ProjectDetails.scss";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  const {
    selectedImageIndex,
    selectedImage,
    openLightbox,
    closeLightbox,
    showPreviousImage,
    showNextImage,
  } = useProjectLightbox(project?.gallery ?? []);

  if (!project) {
    return <Navigate to="/projets" replace />;
  }

  return (
    <>
      <Seo
        title={`${project.title} | Lilya - Projet Front-End`}
        description={`Découvrez le projet ${project.title}, réalisé par Lilya dans le cadre de son portfolio de développeuse front-end React.`}
      />

      <section className="project-details">
        <Link
          to="/projets"
          className="project-details__back"
          aria-label="Retourner à la page des projets"
        >
          <span className="code-arrow code-arrow--md space-arrow-right">
            &lt;
          </span>
          Retour aux projets
        </Link>

        <ProjectHero project={project} />

        <section className="project-details__about-grid">
          <div className="project-details__about">
            <h2>À propos du projet</h2>
            <p>{project.about}</p>
          </div>

          <div className="project-details__info">
            <ProjectInfoRow label="Type" value={project.type} />
            <ProjectInfoRow label="Année" value={project.year} />
            <ProjectInfoRow label="Outils" value={project.tools} />
            <ProjectInfoRow label="API" value={project.api} />
            <ProjectInfoRow label="Backend" value={project.backend} />
          </div>
        </section>

        <section className="project-details__details">
          <div className="project-details__features">
            <h2>Fonctionnalités principales</h2>

            <div className="project-details__features-grid">
              {project.features.map((feature) => (
                <ProjectFeatureCard feature={feature} key={feature.title} />
              ))}
            </div>
          </div>

          <div className="project-details__learning-grid">
            <ProjectLearningList learnings={project.learnings} />

            <ProjectCodeBlock
              title={project.codeTitle}
              code={project.codeSnippet}
            />
          </div>
        </section>

        <ProjectGallery
          images={project.gallery}
          projectTitle={project.title}
          onSelectImage={openLightbox}
        />

        <ProjectLightbox
          image={selectedImage}
          imageIndex={selectedImageIndex}
          projectTitle={project.title}
          onClose={closeLightbox}
          onPrevious={showPreviousImage}
          onNext={showNextImage}
        />
      </section>
    </>
  );
}

export default ProjectDetails;