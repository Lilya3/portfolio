import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <div className="home__hero">
      <div className="home__content">
        <p className="home__eyebrow">Portfolio</p>

        <h1 className="home__title">
          Alice Lendormi
          <span>développeuse Front-End React</span>
        </h1>

        <p className="home__description">
          Après une reconversion professionnelle, je conçois des interfaces web
          modernes, accessibles et maintenables avec React, JavaScript et Sass.
        </p>

        <div className="home__actions">
          <Link to="/projets" className="home__button home__button--primary">
            Voir mes projets
          </Link>

          <a
            href="https://github.com/Lilya3"
            target="_blank"
            rel="noreferrer"
            className="home__button home__button--secondary"
          >
            Voir mon GitHub
          </a>
        </div>
      </div>

      <div className="home__visual" aria-hidden="true">
        <div className="home__card">
          <span className="home__card-tag">React</span>
          <span className="home__card-tag">JavaScript</span>
          <span className="home__card-tag">Sass | SCSS</span>

          <pre>
{`const developer = {
  name: "Lilya3",
  role: "Front-End",
  stack: ["React", "JS", "Sass"],
};`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;