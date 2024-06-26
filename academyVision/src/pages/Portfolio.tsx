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

const Portfolio: FC = () => {
  const { hash } = useLocation();
  const { t } = useTranslation("translation");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 468);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 468);
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
    <div className={styles.portfolioContainer}>
      
      <MyContainer>
      {isMobile ? <AboutCardsAccordion /> : <AboutCards />}
        <MoreAboutProjects />
        <StagesOfWork />
      </MyContainer>
    </div>
    </>
  );
};

export default Portfolio;
