import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import styles from "./SocialLink.module.css";


const SocialLink: React.FC = () => {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${+491633}`;
    window.open(url, "_blank");
  };

  const handleTelegramClick = () => {
    const url = `https://t.me/${+497676}`;
    window.open(url, "_blank");
  };
  return (
    <div className={styles.contactLinks}>
      <a href="#" onClick={handleWhatsAppClick} className={styles.whatsapp}>
        <FaWhatsapp />
        <span className={styles.ripple}></span>
      </a>
      <a href="#" onClick={handleTelegramClick} className={styles.telegram}>
        <FaTelegram />
        <span className={styles.ripple}></span>
      </a>
    </div>
  );
};     

export default SocialLink;
