import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__brand">
          <p>Développeuse Front-End React</p>
        </div>

        <nav className="footer__links">

          <a
            href="https://github.com/Lilya3"
            target="_blank"
            rel="noreferrer"
            aria-label="Voir mon profil GitHub"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/alice-lendormi-5073b5420"
            target="_blank"
            rel="noreferrer"
            aria-label="Voir mon profil LinkedIn"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:alicelendormi@gmail.com"
            aria-label="M'envoyer un email"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>

        </nav>

        <div className="footer__bottom">

          <p>© 2026 Lilya. Tous droits réservés.</p>

          <button
            type="button"
            className="footer__scroll-top"
            aria-label="Retour en haut"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <FaArrowUp />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;