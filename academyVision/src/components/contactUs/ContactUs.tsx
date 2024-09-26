import { FaWhatsapp, FaTelegram, FaEnvelope } from "react-icons/fa";
import styles from "./ContactUs.module.css";
import { useTranslation } from "react-i18next";
import MyContainer from "../myContainer/MyContainer";

const ContactUs: React.FC = () => {
  const { t } = useTranslation("translation");



  const handleEmailClick = () => {
    const url = "mailto:info@amvision-agency.com";
    window.location.href = url;
  };
  return (

    <div className={styles.container}>
        <MyContainer>
    <div className={styles.contactContainer}>


     <div className={styles.fullWidthDiv}></div>

      <div className={styles.textContactsUs}>
        <h1>{t("contactUs.contactUs")}</h1>
        <p>{t("contactUs.contactUsText")}</p>
      </div>
      <div className={styles.linkContainer}>
        <div>
          <a href="whatsapp://send?phone=+491628929039"  className={styles.whatsapp} target="_blank">
            <FaWhatsapp />
            <span className={styles.ripples}></span>
          </a>
          <h3>WhatsApp</h3>
          <p>+49 16 289 29 039</p>
        </div>
        <div>
          <a href="https://t-do.de/@amvision_de" className={styles.telegram} target="_blank">
            <FaTelegram />
            <span className={styles.ripples}></span>
          </a>
          <h3>Telegram</h3>
          <p>+49 16 289 29 039</p>
        </div>
        <div>
          <a onClick={handleEmailClick} className={styles.email}>
            <FaEnvelope />
            <span className={styles.ripples}></span>
          </a>
          <h3>E-Mail</h3>
          <p>info@amvision-agency.com</p>
        </div>
      </div>
      </div>
      </MyContainer>
    </div>
  );
};

export default ContactUs;
