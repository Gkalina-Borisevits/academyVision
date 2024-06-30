import { FC, useEffect, useState } from "react";
import styles from "./styles/Portfolio.module.css";
import img from "../assets/pagesImage/portfolio.png";
import ImageContainer from "../components/imageContainer/ImageContainer";
import AboutCards from "../components/about-cards/AboutCards";
import MoreAboutProjects from "../components/more-about-project/MoreAboutProjects";
import MyContainer from "../components/myContainer/MyContainer";
import StagesOfWork from "../components/stages-of-work/StagesOfWork";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AboutCardsAccordion from "../components/about-cards/about-accordion/AboutCardsAccordion";
import MoreAboutProjectsMobile from "../components/more-about-project/more-about-project-mobile/MoreAboutProjectsMobile";
import StageOfWorkAccordion from "../components/stages-of-work/stages-of-work-accordion/StageOfWorkAccordion";
import ContactUs from "../components/contactUs/ContactUs";

const Portfolio: FC = () => {
  const { hash } = useLocation();
  const { t } = useTranslation("translation");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <ImageContainer imgSrc={img} imgAlt="Image">
        <MyContainer>
          <div className={styles.textInImage}>
            <h1>{t("portfolio.portfolio")}</h1>
            <h3>{t("portfolio.imageTitle")}</h3>
          </div>
        </MyContainer>
      </ImageContainer>
    
        <MyContainer>
          <div className={styles.aboutCardsPortfolioPage}>
          {isMobile ? <AboutCardsAccordion /> : <AboutCards />}
          </div>
         <div className={styles.ourProjectContainer}><h2>{t("homePage.projects")}</h2></div>
          {isMobile ? <MoreAboutProjectsMobile /> : <MoreAboutProjects />}
          </MyContainer>
          <ContactUs/>
          <MyContainer>
          {isMobile ? <StageOfWorkAccordion /> : <StagesOfWork /> }
        </MyContainer>

    </>
  );
};

export default Portfolio;
