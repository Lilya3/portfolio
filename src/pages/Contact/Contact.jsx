import ContactForm from "../../components/ContactForm/ContactForm";
import Seo from "../../components/Seo/Seo";

import ContactInfoList from "./_components/ContactInfoList/ContactInfoList";
import ContactLinks from "./_components/ContactLinks/ContactLinks";

import "./Contact.scss";

function Contact() {
  return (
    <>
      <Seo
        title="Contact | Lilya3 - Développeuse Front-End React"
        description="Contactez Lilya3 pour échanger autour d'une opportunité professionnelle, d'un projet web ou d'une collaboration en développement front-end."
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
              idéalement en télétravail complet ou hybride, dans un environnement
              compatible avec ma RQTH.
            </p>

            <ContactInfoList />
          </div>

          <div className="contact-page__form-card">
            <h2>Envoyez-moi un message</h2>

            <p>
              Une opportunité pour un premier poste en développement front-end ou
              un échange autour de mon profil ? Écrivez-moi, je vous répondrai
              avec plaisir.
            </p>

            <ContactForm />
          </div>
        </section>

        <ContactLinks />
      </section>
    </>
  );
}

export default Contact;