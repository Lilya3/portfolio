function HomeAbout() {
  return (
    <section className="home__about">
      <div className="home__about-content">
        <p className="home__section-label">À propos de moi</p>

        <p>
          Après une reconversion et une formation OpenClassrooms, je suis
          motivée à intégrer une équipe de développement pour continuer à
          apprendre, collaborer et contribuer à des projets concrets.
        </p>
      </div>

      <div className="home__about-visual" aria-hidden="true">
        <span className="home__about-code">&lt;/&gt;</span>
      </div>
    </section>
  );
}

export default HomeAbout;