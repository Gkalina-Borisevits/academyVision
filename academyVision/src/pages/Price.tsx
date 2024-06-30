import { FC } from "react";
import styles from "./styles/Price.module.css";
import img from "../assets/pagesImage/price.png";
import ImageContainer from "../components/imageContainer/ImageContainer";
import MyContainer from "../components/myContainer/MyContainer";
import { useTranslation } from "react-i18next";
import PriceComponents from "../components/price/PriceComponents.tsx";
import AdvantageCards from "../components/advantage-cards/AdvantageCards.tsx";
import ContactForm from "../components/contactForm/ContactForm.tsx";


const Price: FC = () => {
  const { t } = useTranslation("translation");

  return (
    <>
      <ImageContainer imgSrc={img} imgAlt="Image">
        <MyContainer>
          <div className={styles.textInImage}>
            <h1>{t("price.title")}</h1>
            <h3>{t("price.description")}</h3>
          </div>
        </MyContainer>
      </ImageContainer>
      <div className={styles.priceContainer}>
        
        <div className={styles.homeCardContainer}>
         <PriceComponents/>
         </div>
         <MyContainer>
         <ContactForm/>
         </MyContainer>
    <AdvantageCards/>
      </div>
    </>
  );
};

export default Price;
