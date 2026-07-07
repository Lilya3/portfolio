function ProjectLearningList({ learnings }) {
  return (
    <div className="project-details__learnings">
      <h2>Ce que j&apos;ai appris</h2>

      <ul>
        {learnings.map((learning) => (
          <li key={learning}>
            <span className="code-arrow code-arrow--sm space-arrow-right">
              &gt;
            </span>
            {learning}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectLearningList;