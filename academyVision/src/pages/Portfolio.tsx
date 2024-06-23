import { FC } from "react";
import styles from "./styles/Portfolio.module.css";
import img from "../assets/pagesImage/portfolio.png";
import ImageContainer from "../components/imageContainer/ImageContainer";

const Portfolio: FC = () => {
  return (
    <div className={styles.portfolioContainer}>
      <ImageContainer imgSrc={img} imgAlt="Image" />
    </div>
  );
};

export default Portfolio;
