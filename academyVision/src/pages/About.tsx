import { FC, useEffect, useState } from "react";
import styles from "./styles/About.module.css";
import img from "../assets/pagesImage/about.webp";
import ImageContainer from "../components/imageContainer/ImageContainer";
import AboutCards from "../components/about-cards/AboutCards";
import FotoCards from "../components/foto-cards/FotoCards";
import { useTranslation } from "react-i18next";
import MyContainer from "../components/myContainer/MyContainer";
import AboutCardsAccordion from "../components/about-cards/about-accordion/AboutCardsAccordion";
import ContactForm from "../components/contactForm/ContactForm";
import AdvantageCards from "../components/advantage-cards/AdvantageCards";
import { Parallax } from "react-parallax";
import computerImage from "../assets/computer/computerAbout.webp";

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

  const splitTextIntoSpans = (text: string): React.ReactNodeArray => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className={styles.letter}
        style={{
          animationDelay: `${index * 0.05}s`,
          display: char === ' ' ? 'inline-block' : 'inline', 
          whiteSpace: char === ' ' ? 'pre' : 'normal'
        }}
      >
        {char}
      </span>
    ));
  };
  

  return (
    <>
      <ImageContainer imgSrc={img} imgAlt="Image">
        <MyContainer>
          <div className={styles.textInImage}>
            <h1>{splitTextIntoSpans(t("about.aboutUs"))}</h1>
            <h3>{t("about.aboutTitle")}</h3>
          </div>
        </MyContainer>
      </ImageContainer>
      <div className={styles.aboutContainer}>
        <MyContainer>
          <div className={styles.aboutCardContainer}>
            {isMobile ? <AboutCardsAccordion /> : <AboutCards />}
          </div>
          </MyContainer>
          <div className={styles.computerImageContainer}>
          <img src={computerImage} alt="computer" loading="lazy"></img>
        </div>
          <div className={styles.ourTeamContainer}>
          <div className={styles.aboutText}>
              <h2>{t("about.ourTeam")}</h2>
              <h5>{t("about.aboutText")}</h5>
            </div>
            <MyContainer>
            <FotoCards />
            </MyContainer>
          </div>

          <div className={styles.homeContactsFormContainer}>
            <ContactForm />
          </div>
          <Parallax strength={500}>
          <div className={styles.advantageCardContainer}>
            <AdvantageCards />
          </div>
          </Parallax>
     
      </div>
    </>
  );
};

export default About;
