import { NavLink } from "react-router-dom";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <NavLink to="/" className="footer__logo">
            <span>&lt;/&gt;</span>
              Lilya
          </NavLink>
          
          <p className="footer__title">Développeuse Front-End React</p>
          <p className="footer__text"> Passionnée par le développement web et toujours prête à relever de nouveaux défis.</p>
        </div>

        <nav className="footer__nav" aria-label="Navigation secondaire">
          <h2>Navigation</h2>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/projets">Projets</NavLink>
          <NavLink to="/competences">Compétences</NavLink>
          <NavLink to="/parcours">Parcours</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="footer__socials">
          <h2>Réseaux</h2>
          <a href="https://github.com/Lilya3" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:">Email</a>
        </div>

        <div className="footer__contact">
          <h2>Une question ?</h2>
          <p>
            Je suis à la recherche d'un premier poste et ouverte à de nouvelles opportunités.
          </p>

          <NavLink to="/contact" className="footer__button">
            Me contacter
          </NavLink>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Lilya. Tous droits réservés.</p>
        <p>Développé avec React</p>
      </div>
    </footer>
  );
}

export default Footer;