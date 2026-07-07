const stats = [
  {
    value: "11",
    label: "projets réalisés",
  },
  {
    value: "React",
    label: "Spécialisation front-end",
  },
  {
    value: "Formation",
    label: "OpenClassrooms - Intégrateur Web",
  },
];

function HomeStats() {
  return (
    <div className="home__stats">
      {stats.map((stat) => (
        <div className="home__stat" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default HomeStats;