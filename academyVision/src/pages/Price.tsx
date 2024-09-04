import { FC } from "react";
import styles from "./styles/Price.module.css";
import img from "../assets/pagesImage/price.jpg";
import ImageContainer from "../components/imageContainer/ImageContainer";
import MyContainer from "../components/myContainer/MyContainer";
import { useTranslation } from "react-i18next";
import PriceComponents from "../components/price/PriceComponents.tsx";
import AdvantageCards from "../components/advantage-cards/AdvantageCards.tsx";
import ContactForm from "../components/contactForm/ContactForm.tsx";
import computerImage from "../assets/computer/computerPrice.jpg";
import PriceCarousel from "../components/price/PriceCarousel.tsx";

const Price: FC = () => {
  const { t } = useTranslation("translation");

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
            <h1>{splitTextIntoSpans(t("price.title"))}</h1>
            <h3>{t("price.description")}</h3>
          </div>
        </MyContainer>
      </ImageContainer>

      <div className={styles.priceContainer}>
        <div className={styles.homeCardContainer}>
          <PriceComponents />
        </div>
        <div className={styles.contactFormContainerPrice}>
          <ContactForm />
        </div>
        <div className={styles.computerImageContainer}>
          <img src={computerImage} alt="computer" />
          <div className={styles.carouselOverlay}>
            <PriceCarousel />
          </div>
        </div>

        <div className={styles.advantageContainerPrice}>
          <AdvantageCards />
        </div>
      </div>
    </>
  );
};

export default Price;
