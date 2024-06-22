import { FC } from "react";
import styles from "./styles/Home.module.css";
import img from "../assets/home.png";

const Home: FC = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <img src={img} alt="Image" className={styles.backgroundImage} />
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default Home;
