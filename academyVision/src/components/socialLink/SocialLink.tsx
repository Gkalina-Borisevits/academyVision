import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import styles from "./SocialLink.module.css";

const SocialLink: React.FC = () => {

  const whatsappUrl = "https://wa.me/491628929039";
  const telegramUrl = `https://t.me/amvision_de`;

  return (
    <div className={styles.contactLinks}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
      >
        <FaWhatsapp className={styles.whatsappContainer} />
        <span className={styles.ripple}></span>
      </a>
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.telegram}
      >
        <FaTelegram className={styles.whatsappContainer} />
        <span className={styles.ripple}></span>
      </a>
    </div>
  );
};

export default SocialLink;
