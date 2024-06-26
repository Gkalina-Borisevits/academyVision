import { FC } from "react";
import styles from "./styles/Portfolio.module.css";
import img from "../assets/pagesImage/portfolio.png";
import ImageContainer from "../components/imageContainer/ImageContainer";
import AboutCards from "../components/about-cards/AboutCards";
import MoreAboutProjects from "../components/more-about-project/MoreAboutProjects";
import MyContainer from "../components/myContainer/MyContainer";
import StagesOfWork from "../components/stages-of-work/StagesOfWork";

const Portfolio: FC = () => {
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
