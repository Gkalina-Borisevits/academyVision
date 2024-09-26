import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import styles from "./SocialLink.module.css";


const SocialLink: React.FC = () => {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/491628929039`;
    window.open(url, "_blank");
  };

  const handleTelegramClick = () => {
    const url = `https://t.me/491628929039`;
    window.open(url, "_blank");
  };
  return (
    <div className={styles.contactLinks}>
      <a onClick={handleWhatsAppClick} className={styles.whatsapp}>
        <FaWhatsapp className={styles.whatsappContainer} />
        <span className={styles.ripple}></span>
      </a>
      <a onClick={handleTelegramClick} className={styles.telegram}>
        <FaTelegram className={styles.whatsappContainer} />
        <span className={styles.ripple}></span>
      </a>
    </div>
  );
};     

export default SocialLink;
