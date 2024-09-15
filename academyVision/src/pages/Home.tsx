import { useEffect, useState } from "react";
import styles from "./styles/Home.module.css";
import img from "../assets/pagesImage/home.png";
import HomeCards from "../components/home-cards/HomeCards";
import HomeCardsAccordion from "../components/home-cards/home-accordion/HomeCardsAccordion";
import ImageContainer from "../components/imageContainer/ImageContainer";
import AboutHomePage from "../components/aboutHomePage/AboutHomePage";
import MyContainer from "../components/myContainer/MyContainer";
import ContactForm from "../components/contactForm/ContactForm";
import { useTranslation } from "react-i18next";
import AboutProjects from "../components/about-projects/AboutProjects";
import computerImage from "../assets/computer/computer.jpg";
import image from "../assets/home/about3.jpg";


const Home: React.FC = () => {
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
    return text.split("").map((char, index) => (
      <span
        key={index}
        className={styles.letter}
        style={{
          animationDelay: `${index * 0.05}s`,
          display: char === " " ? "inline-block" : "inline",
          whiteSpace: char === " " ? "pre" : "normal",
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
            <h1>{splitTextIntoSpans(t("homePage.name"))}</h1>
            <h2>{t("homePage.homeTitleHeader")}</h2>
            <h3>{t("homePage.homeTitle")}</h3>
          </div>
        </MyContainer>
      </ImageContainer>
      <div className={styles.homeContainer}>
        <div className={styles.homeCardContainer}>
          {isMobile ? <HomeCardsAccordion /> : <HomeCards />}
        </div>

        <div className={styles.aboutProjects}>
          <AboutProjects />
        </div>

        <div className={styles.homeContactsFormContainer}>
          <ContactForm />
        </div>
        <div className={styles.computerImageContainer}>
          <img src={computerImage} alt="computer"></img>
        </div>

        <div className={styles.aboutBigContainer}>
          <MyContainer>
            <div className={styles.aboutTextContainer}>
              <div className={styles.aboutText}>
                <h2>{t("homePage.aboutUs")}</h2>
                <h4>{t("homePage.aboutTitle")}</h4>
              </div>
            </div>
            <div className={styles.aboutHomePageContainer}>
              <div className={styles.about}>
                <p>{t("homePage.ourValues")}</p>
                <AboutHomePage />
              </div>

              <div className={styles.imageContainer}>
                <img src={image} alt="" />
              </div>
            </div>
          </MyContainer>
        </div>
        <div className={styles.containerMargin}></div>
      </div>
    </>
  );
};

export default Home;
