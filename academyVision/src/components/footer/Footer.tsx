import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import { FaArrowRight } from "react-icons/fa";
import TermsOfService from "../termsOfService/TermsOfService";
import Impressum from "../termsOfService/Impressum";

const Footer: React.FC = () => {
  const { t } = useTranslation("translation");
  return (
    <div className={styles.bigContainerFooter}>
      <div className={styles.footerContainer}>
        <div>
          <NavLink to="/" className={styles.logoContainer}></NavLink>
        </div>
        <div className={styles.textContainerName}><span >{t("homePage.name")}</span></div>
        
        <div className={styles.linkContainer}>
          <NavLink to="/about">
            <FaArrowRight size={18} /> {t("header.about")}
          </NavLink>
          <NavLink to="/services">
            <FaArrowRight size={18} /> {t("header.services")}
          </NavLink>
          <NavLink to="/price">
            <FaArrowRight size={18} /> {t("header.price")}
          </NavLink>
          <NavLink to="/portfolio">
            <FaArrowRight size={18} /> {t("header.portfolio")}
          </NavLink>
          <NavLink to="/contacts">
            <FaArrowRight size={18} /> {t("header.contacts")}
          </NavLink>
        </div>
      </div>
      <div>
        <div></div>
      </div>
      <div className={styles.dateContainer}>
        <div>{t("footer.text")}</div>
        <span> © {new Date().getFullYear()} AM Vision </span>
        <div>
        <TermsOfService/>
        <Impressum/>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
