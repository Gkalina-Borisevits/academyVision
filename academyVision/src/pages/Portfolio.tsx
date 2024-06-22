import { FC } from "react";
import styles from "./styles/Portfolio.module.css";
import img from "../assets/portfolio.png";

const Portfolio: FC = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <img src={img} alt="Image" className={styles.backgroundImage} />
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default Portfolio;
