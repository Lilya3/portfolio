import "./ProjectInfoRow.scss";

function ProjectInfoRow({ label, value }) {
  if (!value) {
    return null;
  }

  return (
    <div className="project-details__info-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default ProjectInfoRow;