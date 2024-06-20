import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";



const Footer: React.FC = () => {
    const { t } = useTranslation("translation");
  return (
    <div className={styles.footerContainer}>
      <NavLink to="/about">{t("header.about")}</NavLink>
        <NavLink to="/services">{t("header.services")}</NavLink>
        <NavLink to="/price">{t("header.price")}</NavLink>
        <NavLink to="/portfolio">{t("header.portfolio")}</NavLink>
        <NavLink to="/contacts">{t("header.contacts")}</NavLink>
    </div>
  )
}

export default Footer
