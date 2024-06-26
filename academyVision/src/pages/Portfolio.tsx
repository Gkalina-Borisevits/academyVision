import { FC, useEffect } from "react";
import styles from "./styles/Portfolio.module.css";
import img from "../assets/pagesImage/portfolio.png";
import ImageContainer from "../components/imageContainer/ImageContainer";
import AboutCards from "../components/about-cards/AboutCards";
import MoreAboutProjects from "../components/more-about-project/MoreAboutProjects";
import MyContainer from "../components/myContainer/MyContainer";
import StagesOfWork from "../components/stages-of-work/StagesOfWork";
import { useLocation } from "react-router-dom";

const Portfolio: FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  
  return (
    <div className={styles.portfolioContainer}>
      <ImageContainer imgSrc={img} imgAlt="Image" />
      <MyContainer>
        <AboutCards />
        <MoreAboutProjects />
        <StagesOfWork />
      </MyContainer>

    </div>
  );
};

export default Portfolio;
