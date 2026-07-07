function ProjectFilters({ filters, activeFilter, onFilterChange }) {
  return (
    <div
      className="projects__filters"
      aria-label="Filtrer les projets par technologie"
    >
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={`projects__filter ${
            activeFilter === filter ? "projects__filter--active" : ""
          }`}
          onClick={() => onFilterChange(filter)}
          aria-pressed={activeFilter === filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilters;