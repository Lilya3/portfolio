import { useState } from "react";

import "./ContactForm.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const mailSubject = encodeURIComponent(formData.subject);
    const mailBody = encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\n\nMessage :\n${formData.message}`
    );

    window.location.href = `mailto:alicelendormi@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="sr-only" htmlFor="contact-name">
            Votre nom
          </label>

          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Votre nom"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-form__field">
          <label className="sr-only" htmlFor="contact-email">
            Votre email
          </label>

          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Votre email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="contact-form__field">
        <label className="sr-only" htmlFor="contact-subject">
          Sujet
        </label>

        <input
          id="contact-subject"
          type="text"
          name="subject"
          placeholder="Sujet"
          autoComplete="off"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form__field">
        <label className="sr-only" htmlFor="contact-message">
          Votre message
        </label>

        <textarea
          id="contact-message"
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">
        Envoyer le message
        <span aria-hidden="true">↗</span>
      </button>

      <p className="contact-form__privacy">
        Vos données ne seront pas partagées.
      </p>
    </form>
  );
}

export default ContactForm;