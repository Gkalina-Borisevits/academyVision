import { FC, useEffect, useState } from "react";
import styles from "./styles/About.module.css";
import img from "../assets/pagesImage/about.png";
import ImageContainer from "../components/imageContainer/ImageContainer";
import AboutCards from "../components/about-cards/AboutCards";
import FotoCards from "../components/foto-cards/FotoCards";
import { useTranslation } from "react-i18next";
import MyContainer from "../components/myContainer/MyContainer";
import AboutCardsAccordion from "../components/about-cards/about-accordion/AboutCardsAccordion";
import ContactForm from "../components/contactForm/ContactForm";
import AdvantageCards from "../components/advantage-cards/AdvantageCards";

const About: FC = () => {
  const { t } = useTranslation("translation");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 468);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 468);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ImageContainer imgSrc={img} imgAlt="Image">
        <MyContainer>
          <div className={styles.textInImage}>
            <h1>{t("about.aboutUs")}</h1>
            <h3>{t("about.aboutTitle")}</h3>
          </div>
        </MyContainer>
      </ImageContainer>
      <div className={styles.aboutContainer}>
        <MyContainer>
          <div className={styles.aboutCardContainer}>
            {isMobile ? <AboutCardsAccordion /> : <AboutCards />}
          </div>

          <div className={styles.ourTeamContainer}>
            <div className={styles.aboutText}>
              <h2>{t("about.ourTeam")}</h2>
              <h5>{t("about.aboutText")}</h5>
            </div>
            <FotoCards />
          </div>

          <div className={styles.homeContactsFormContainer}>
            <div className={styles.formContainerHome}>
              <h2>{t("homePage.discussProject")}</h2>
              <p>{t("homePage.textForm")}</p>
            </div>
            <ContactForm />
          </div>
          <div className={styles.advantageCardContainer} >
            <AdvantageCards/>
          </div>
        </MyContainer>
      </div>
    </>
  );
};

export default About;
