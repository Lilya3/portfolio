import { FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const contactInfos = [
  {
    label: "Email",
    value: "alicelendormi@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Localisation",
    value: "Cugnaux, proche Toulouse, France",
    icon: FaMapMarkerAlt,
  },
  {
    label: "Délai de réponse",
    value: "Sous 48h",
    icon: FaClock,
  },
];

function ContactInfoList() {
  return (
    <div className="contact-page__infos">
      {contactInfos.map((info) => {
        const Icon = info.icon;

        return (
          <div key={info.label}>
            <Icon />

            <p>
              <span>{info.label}</span>
              {info.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ContactInfoList;