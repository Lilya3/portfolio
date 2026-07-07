import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFileAlt,
} from "react-icons/fa";

import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.scss";
import Seo from "../../components/Seo/Seo";

function Contact() {
  return (

    <>
      <Seo
        title="Contact | Lilya - Développeuse Front-End React"
        description="Contactez Lilya pour échanger autour d'une opportunité professionnelle, d'un projet web ou d'une collaboration en développement front-end."
      />

    <section className="contact-page" aria-labelledby="contact-title">
      <section className="contact-page__hero">
        <div className="contact-page__intro">
          <p className="contact-page__eyebrow">Contact</p>

          <h1 id="contact-title">
            Travaillons <br />
            ensemble<span>.</span>
          </h1>

          <p className="contact-page__description">
            Je recherche un premier poste en développement front-end, 
            idéalement en télétravail complet ou hybride, dans un environnement compatible avec ma RQTH.
          </p>

          <div className="contact-page__infos">
            <div>
              <FaEnvelope />
              <p>
                <span>Email</span>
                alicelendormi@gmail.com
              </p>
            </div>

            <div>
              <FaMapMarkerAlt />
              <p>
                <span>Localisation</span>
                Cugnaux, proche Toulouse, France
              </p>
            </div>

            <div>
              <FaClock />
              <p>
                <span>Délai de réponse</span>
                Sous 48h
              </p>
            </div>
          </div>
        </div>

        <div className="contact-page__form-card">
          <h2>Envoyez-moi un message</h2>
          <p>
            Une opportunité pour un premier poste en développement front-end ou un échange
            autour de mon profil ? Écrivez-moi, je vous répondrai avec plaisir.
          </p>

          <ContactForm />
        </div>
      </section>

      <section className="contact-page__links" aria-labelledby="contact-links-title">
        <h2 id="contact-links-title">Retrouvez-moi</h2>

        <div className="contact-page__cards">
          <a
            href="https://github.com/Lilya3"
            target="_blank"
            rel="noreferrer"
            aria-label="Voir mon profil GitHub"
          >
            <FaGithub />
            <h3>GitHub</h3>
            <p>Découvrez mon code et mes projets open source.</p>
          </a>

          <a
            href="https://www.linkedin.com/in/alice-lendormi-5073b5420"
            target="_blank"
            rel="noreferrer"
            aria-label="Voir mon profil LinkedIn"
          >
            <FaLinkedinIn />
            <h3>LinkedIn</h3>
            <p>Mon profil professionnel et mon parcours.</p>
          </a>

          <a
            href="mailto:alicelendormi@gmail.com"
            aria-label="M'envoyer un email"
          >
            <FaEnvelope />
            <h3>Email</h3>
            <p>Contact direct pour toute opportunité.</p>
          </a>

          <a
            href="/cv/cv.pdf"
            download
            target="_blank"
            rel="noreferrer"
            aria-label="Télécharger mon CV au format PDF"
          >
            <FaFileAlt />
            <h3>CV</h3>
            <p>Téléchargez mon CV au format PDF.</p>
          </a>
        </div>
      </section>
    </section>
  </>
  );
}

export default Contact;