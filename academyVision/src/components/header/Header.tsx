import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import BurgerMenu from "../burger-menu/BurgerMenu";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaGlobe } from "react-icons/fa";

const Header: React.FC = () => {
  const { i18n, t } = useTranslation("translation");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const languages = [
    { code: "en", name: "EN", flag: "🇬🇧" },
    { code: "de", name: "DE", flag: "🇩🇪" },
    { code: "ru", name: "RU", flag: "🇷🇺" },
    { code: "ua", name: "UA", flag: "🇺🇦" },
  ];

  useEffect(() => {
    if (i18n.language) {
      localStorage.setItem("userLanguage", i18n.language);
    }
  }, [i18n.language]);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      languageMenuRef.current &&
      !languageMenuRef.current.contains(event.target as Node)
    ) {
      setIsLanguageDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${styles.navbarContainer} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.burgerInHeader}>
        <BurgerMenu />
      </div>
      <NavLink to="/" className={styles.logoContainer}></NavLink>
      <div className={styles.navbar}>
        <NavLink to="/">{t("header.home")}</NavLink>
        <NavLink to="/about">{t("header.about")}</NavLink>
        <NavLink to="/services">{t("header.services")}</NavLink>
        <NavLink to="/price">{t("header.price")}</NavLink>
        <NavLink to="/portfolio">{t("header.portfolio")}</NavLink>
        <NavLink to="/contacts">{t("header.contacts")}</NavLink>
      </div>
      <div
        className={`flex items-center ${styles.languageIcon}`}
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
      >
        <FaGlobe />
      </div>
      {isLanguageDropdownOpen && (
        <div ref={languageMenuRef} className={styles.languageDropdown}>
          {languages.map((language) => (
            <div
              key={language.code}
              className={styles.languageOption}
              onClick={() => {
                changeLanguage(language.code);
                setIsLanguageDropdownOpen(false);
              }}
            >
              {language.flag} {language.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
