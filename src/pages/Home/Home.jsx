import "./Home.scss";

function Home() {
  return(
    <section className="home">
      <div className="home__hero">
        <div className="home__content">
          <p className="home__eyebrow">Portfolio Développeuse Web</p>

          <h1 className="home__title">
            Prénom Nom
            <span>développeuse Front-End React</span>
          </h1>

          <p className="home__description">
            Après une reconversion professionnelle, 
            je conçois des interfaces web modernes, accessibles et maintenables avec React, 
            JavaScript et Sass.
          </p>

          <div className="home__actions">
            <a href="/projets" className="home__button home__button--primary">
            Voir mes projets
            </a>

            <a
              href="https://github.com/Lilya3"
              target="_blank"
              rel="noreferrer"
              className="home__button home__button--secondary">
                Voir mon GitHub
              </a>
          </div>
        </div>

        <div className="home__visual" aria-hidden="true">
          <div className="home__card">
            <span className="home__card-tag">React</span>
            <span className="home__card-tag">Javascript</span>
            <span className="home__card-tag">Sass|SCSS</span>

            <pre>
{`const developer = {
  name: "Lilya",
  role: "Front-End",
  stack: ["React", "JS", "Sass"],
};`}
            </pre>
          </div>
        </div>
      </div>

      <div className="home__stats">
        <div className="home__stat">
          <strong>11</strong>
          <span>projets réalisés</span>
        </div>

        <div className="home__stat">
          <strong>React</strong>
          <span>Spécialisation front-end</span>
        </div>

        <div className="home__stat">
          <strong>Formation</strong>
          <span>OpenClassrooms - Intégrateur Web</span>
        </div>
      </div>
    </section>
  );
}

export default Home;