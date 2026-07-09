import "./SkillCard.scss";

function SkillCard({ group }) {
  const GroupIcon = group.icon;

  return (
    <article className="skills-card">
      <div className="skills-card__header">
        <h3>
          <span className="skills-card__group-icon">
            <GroupIcon />
          </span>

          {group.title}
        </h3>

        <p>{group.description}</p>
      </div>

      <ul className="skills-card__list">
        {group.skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <li className="skills-card__item" key={skill.name}>
              <div className="skills-card__skill">
                <span className={`skills-card__icon ${skill.className}`}>
                  <Icon />
                </span>

                <span>{skill.name}</span>
              </div>

              <div className="skills-card__level">
                <div
                  className="skills-card__bar"
                  role="progressbar"
                  aria-label={`${skill.name} : ${skill.level}%`}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={skill.level}
                >
                  <span style={{ width: `${skill.level}%` }} />
                </div>

                <strong>{skill.level}%</strong>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default SkillCard;