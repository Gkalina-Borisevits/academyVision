import { FC } from "react";
import styles from "./styles/Price.module.css";
import img from "../assets/pagesImage/price.webp";
import ImageContainer from "../components/imageContainer/ImageContainer";
import { NavLink } from "react-router-dom";
import MyContainer from "../components/myContainer/MyContainer";

const Price: FC = () => {
  return (
    <div className={styles.priceContainer}>
      <ImageContainer imgSrc={img} imgAlt="Image" >
        <MyContainer>
      <div style={{ color: "black", fontSize: "24px" }}>Hello World
      </div>
      <div> <NavLink to="/" className={styles.logoContainer}></NavLink></div>
      </MyContainer>
      </ImageContainer>
    
    </div>
  );
};

export default Price;
