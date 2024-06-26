import { FC, useEffect, useState } from "react";
import styles from "./styles/Price.module.css";
import img from "../assets/pagesImage/price.png";
import ImageContainer from "../components/imageContainer/ImageContainer";
import MyContainer from "../components/myContainer/MyContainer";
import AboutProjects from "../components/about-projects/AboutProjects";
import StageOfWorkAccordion from "../components/stages-of-work/stages-of-work-accordion/StageOfWorkAccordion.tsx";
import AdvantageCards from "../components/advantage-cards/AdvantageCards.tsx";
import { useTranslation } from "react-i18next";
import StagesOfWork from "../components/stages-of-work/StagesOfWork.tsx";

const Price: FC = () => {
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
      <div className={styles.priceContainer}>
        <MyContainer>
          <div className={styles.advantageCardContainer}>
            <AdvantageCards />
          </div>
          {isMobile ? <StageOfWorkAccordion /> : <StagesOfWork />}
          <AboutProjects />
          {/* <StagesWork/> */}
        </MyContainer>
      </div>
    </>
  );
};

export default Price;
