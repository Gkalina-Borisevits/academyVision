import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import BurgerMenu from "../burger-menu/BurgerMenu";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaGlobe } from "react-icons/fa";
import NavbarPage from "../navbar/NavbarPage";
import MyContainer from "../myContainer/MyContainer";

const Header: React.FC = () => {
  const { i18n } = useTranslation("translation");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 680);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 680);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.navbarContainer} ${isScrolled ? styles.scrolled : ""
          }`}
      >
        {isMobile && <BurgerMenu />}
        <MyContainer>
          <div className={styles.myContainer}>
            <NavLink to="/" className={styles.logoContainer}></NavLink>
            <div>
              {!isMobile && <NavbarPage />}
            </div>
            <div
              className={styles.languageIcon}
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
        </MyContainer>
      </div>
    </>
  );
};

export default Header;
