import { FC } from "react";
import styles from "./styles/Price.module.css";
import img from "../assets/pagesImage/price.png";
import ImageContainer from "../components/imageContainer/ImageContainer";
import MyContainer from "../components/myContainer/MyContainer";
import { useTranslation } from "react-i18next";
import PriceComponents from "../components/price/PriceComponents.tsx";
import ContactUs from "../components/contactUs/ContactUs.tsx";


const Price: FC = () => {
  const { t } = useTranslation("translation");

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
        
        <div className={styles.homeCardContainer}>
         <PriceComponents/>
         </div>
       <ContactUs/>
    
      </div>
    </>
  );
};

export default Price;
