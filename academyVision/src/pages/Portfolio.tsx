import { FC, useEffect, useState } from "react";
import styles from "./styles/Portfolio.module.css";
import img from "../assets/pagesImage/portfolio.jpg";
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
    setIsMobile(window.innerWidth < 1000);
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
            <h3>{t("portfolio.imageTitle")}</h3>
          </div>
        </MyContainer>
      </ImageContainer>

      <MyContainer>
        <div className={styles.aboutCardsPortfolioPage}>
          {isMobile ? <AboutCardsAccordion /> : <AboutCards />}
        </div>
        <div className={styles.ourProjectContainer}>
          <h2>{t("homePage.projects")}</h2>
        </div>
        {isMobile ? <MoreAboutProjectsMobile /> : <MoreAboutProjects />}
      </MyContainer>
      <ContactUs />
      <MyContainer>
        <div className={styles.stageOfContainer}>
          {isMobile ? <StageOfWorkAccordion /> : <StagesOfWork />}
        </div>
      </MyContainer>
    </>
  );
};

export default Portfolio;
