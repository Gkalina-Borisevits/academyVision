import { FaWhatsapp, FaTelegram, FaEnvelope } from "react-icons/fa";
import styles from "./ContactUs.module.css";
import { useTranslation } from "react-i18next";

const ContactUs: React.FC = () => {
  const { t } = useTranslation("translation");

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${+491633}`;
    window.open(url, "_blank");
  };

  const handleTelegramClick = () => {
    const url = `https://t.me/${+497676}`;
    window.open(url, "_blank");
  };

  const handleEmailClick = () => {
    const url = "mailto:email@example.com";
    window.location.href = url;
  };
  return (
    <div className={styles.contactContainer}>
    
      <div className={styles.textContactsUs}>
        <h1>{t("contactUs.contactUs")}</h1>
        <p>{t("contactUs.contactUsText")}</p>
      </div>
      <div className={styles.linkContainer}>
        <div>
          <a href="#" onClick={handleWhatsAppClick} className={styles.whatsapp}>
            <FaWhatsapp />
            <span className={styles.ripples}></span>
          </a>
          <h3>WhatsApp</h3>
          <p>+491633</p>
        </div>
        <div>
          <a href="#" onClick={handleTelegramClick} className={styles.telegram}>
            <FaTelegram />
            <span className={styles.ripples}></span>
          </a>
          <h3>Telegram</h3>
          <p>+491633</p>
        </div>
        <div>
          <a href="#" onClick={handleEmailClick} className={styles.email}>
            <FaEnvelope />
            <span className={styles.ripples}></span>
          </a>
          <h3>E-Mail</h3>
          <p>email@example.com</p>
        </div>

      </div>
      <div className={styles.fullWidthDiv}></div>
    </div>
  );
};

export default ContactUs;
