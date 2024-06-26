import { useEffect, useState } from "react";
import styles from "./styles/Home.module.css";
import img from "../assets/pagesImage/home.png";
import HomeCards from "../components/home-cards/HomeCards";
import HomeCardsAccordion from "../components/home-cards/home-accordion/HomeCardsAccordion";
import ImageContainer from "../components/imageContainer/ImageContainer";
import AboutHomePage from "../components/aboutHomePage/AboutHomePage";
import MyButton from "../components/myButton/MyButton";
import MyContainer from "../components/myContainer/MyContainer";
import ContactForm from "../components/contactForm/ContactForm";
import { useTranslation } from "react-i18next";
import AboutProjects from "../components/about-projects/AboutProjects";
import image from "../assets/home/aboutHome.png";

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

  return (
    <>
      <ImageContainer imgSrc={img} imgAlt="Image">
        <MyContainer>
        <div className={styles.textInImage}>
          <h1>{t("homePage.name")}</h1>
          <h3>{t("homePage.aboutText")}</h3>
        </div>
        </MyContainer>
        
      </ImageContainer>
      <div className={styles.homeContainer}>
        <MyContainer>
          <div className={styles.homeCardContainer}>
            {isMobile ? <HomeCardsAccordion /> : <HomeCards />}
          </div>
          <div className={styles.aboutProjects}>
            <h2>{t("homePage.projects")}</h2>
            <AboutProjects />
            <div>
              <MyButton text={t("homePage.viewDetails")} />
            </div>
          </div>
          <div className={styles.homeContactsFormContainer}>
            <div className={styles.formContainerHome}>
              <h2>{t("homePage.discussProject")}</h2>
              <p>{t("homePage.textForm")}</p>
            </div>
            <ContactForm />
          </div>
          <div className={styles.aboutTextContainer}>
            <h2>{t("homePage.aboutUs")}</h2>
            <h4>{t("homePage.aboutTitle")}</h4>
           
          </div>
          <div className={styles.aboutHomePageContainer}>
            <div>
              <p>{t("homePage.ourValues")}</p>
              <AboutHomePage />
            </div>
            <div>
              <img src={image} alt="" />
            </div>
          </div>
        </MyContainer>
      </div>
    </>
  );
};

export default Home;
