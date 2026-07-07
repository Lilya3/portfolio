import { Link } from "react-router-dom";

import ProjectCard from "../../../../components/ProjectCard/ProjectCard";

function HomeFeaturedProjects({ projects }) {
  return (
    <section className="home__featured">
      <div className="home__section-heading">
        <h2>Projets vedettes</h2>

        <Link to="/projets" className="home__section-link">
          Découvrir les projets{" "}
          <span className="code-arrow code-arrow--md space-arrow-left">
            &gt;
          </span>
        </Link>
      </div>

      <div className="home__projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default HomeFeaturedProjects;