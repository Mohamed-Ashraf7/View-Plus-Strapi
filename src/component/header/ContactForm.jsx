import { useTranslation } from "react-i18next";
const ContactForm = () => {
     const { t} = useTranslation();
  return (
    <div className="popup" id="appointmentPopup">
      <div className="popup-content">
        <span className="close" id="closePopup">
          &times;
        </span>
        <h2>{t("BOOK APPOINTMENT")}</h2>
        <div className="form-container">
          <form className="form">
            <div className="form-group">
              <label htmlFor="email">{t("Your Name")}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("Enter your name")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t("Email")}</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder={t("Enter your email")}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t("Phone")}</label>
              <input
                type="number"
                id="Phone"
                name="Phone"
                placeholder={t("Enter your Phone")}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t("Your Address")}</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder={t("Enter your Address")}
                required
              />
            </div>
            <button className="form-submit-btn" type="submit">
              {t("Send Email")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
