import {
  FaGithub,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

const contactLinks = [
  {
    title: "GitHub",
    description: "Découvrez mon code et mes projets open source.",
    href: "https://github.com/Lilya3",
    ariaLabel: "Voir mon profil GitHub",
    icon: FaGithub,
    isExternal: true,
  },
  {
    title: "Email",
    description: "Contact direct pour toute opportunité.",
    href: "mailto:alicelendormi@gmail.com",
    ariaLabel: "M'envoyer un email",
    icon: FaEnvelope,
  },
  {
    title: "CV",
    description: "Téléchargez mon CV au format PDF.",
    href: "/cv/cv.pdf",
    ariaLabel: "Télécharger mon CV au format PDF",
    icon: FaFileAlt,
    isExternal: true,
    isDownload: true,
  },
];

function ContactLinks() {
  return (
    <section
      className="contact-page__links"
      aria-labelledby="contact-links-title"
    >
      <h2 id="contact-links-title">Retrouvez-moi</h2>

      <div className="contact-page__cards">
        {contactLinks.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.title}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noreferrer" : undefined}
              download={link.isDownload || undefined}
              aria-label={link.ariaLabel}
            >
              <Icon />
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default ContactLinks;