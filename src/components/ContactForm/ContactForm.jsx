import "./ContactForm.scss";

function ContactForm() {
  return (
    <form className="contact-form">
      <div className="contact-form__row">
        <input type="text" name="name" placeholder="Votre nom" required />
        <input type="email" name="email" placeholder="Votre email" required />
      </div>

      <input type="text" name="subject" placeholder="Sujet" required />

      <textarea name="message" placeholder="Votre message" required />

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