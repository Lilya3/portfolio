function SoftSkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <article className="soft-skill-card">
      <span className="soft-skill-card__icon">
        <Icon />
      </span>

      <h3>{skill.title}</h3>
      <p>{skill.description}</p>
    </article>
  );
}

export default SoftSkillCard;