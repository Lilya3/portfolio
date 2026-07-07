function ProjectFeatureCard({ feature }) {
  return (
    <article className="project-details__feature-card">
      <span className="project-details__feature-icon">{feature.icon}</span>

      <div>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </article>
  );
}

export default ProjectFeatureCard;