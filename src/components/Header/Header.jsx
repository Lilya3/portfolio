import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo" aria-label="Retour à l'accueil">
          <span>&lt;/&gt;</span>
          Lilya
        </NavLink>

        <nav className="header__nav" aria-label="Navigation principale">
          <NavLink to="/projets" className="header__link">Projets</NavLink>
          <NavLink to="/competences" className="header__link">Compétences</NavLink>
          {/* <NavLink to="/parcours" className="header__link">Parcours</NavLink> */}
          <NavLink to="/contact" className="header__link">Contact</NavLink>
        </nav>

        <div className="header__actions">
          <a className="header__button" href="" target="_blank" rel="noreferrer">
            Voir mon CV
          </a>
        </div>

        <button
          className="header__burger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      <nav
        className={`header__mobile-nav ${isMenuOpen ? "header__mobile-nav--open" : ""}`}
        aria-label="Navigation mobile"
      >
        <NavLink to="/" onClick={closeMenu}>Accueil</NavLink>
        <NavLink to="/projets" onClick={closeMenu}>Projets</NavLink>
        <NavLink to="/competences" onClick={closeMenu}>Compétences</NavLink>
        {/* <NavLink to="/parcours" onClick={closeMenu}>Parcours</NavLink> */}
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

        <a
          className="header__mobile-cv"
          href="/cv.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          Voir mon CV
        </a>
      </nav>
    </header>
  );
}

export default Header;