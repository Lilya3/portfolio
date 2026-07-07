function MethodologyCard({ step, index }) {
  const Icon = step.icon;

  return (
    <article className="methodology-card">
      <span className="methodology-card__icon">
        <Icon />
      </span>

      <h3>
        {index + 1}. {step.title}
      </h3>

      <p>{step.description}</p>
    </article>
  );
}

export default MethodologyCard;