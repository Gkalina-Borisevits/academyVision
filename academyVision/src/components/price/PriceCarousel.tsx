import { Price } from "../../types/Price";
import { useTranslation } from "react-i18next";
import styles from "./PriceCarousel.module.css";
import React from "react";
import MyButton from "../../components/myButton/MyButton";
import { ReactNode } from "react";
import MyContainer from "../myContainer/MyContainer";
import silver from "../../assets/priceText/silver.webp";
import gold from "../../assets/priceText/gold.webp";
import platinum from "../../assets/priceText/platinum.webp";
import other from "../../assets/priceText/other.webp";

const listPage: string[] = [silver, gold, platinum, other]

const PriceCarousel: React.FC = () => {
  const { t } = useTranslation("translation");
  const aboutPrices: Price[] = t("aboutPrice", { returnObjects: true });

  const formatText = (text: string | undefined): ReactNode => {
    return text
      ? text.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            <br />
          </React.Fragment>
        ))
      : "Text is not available";
  };

  return (
    <div className={styles.blockContainer}>
      {aboutPrices.map((price) => (
        <div
          key={price.id}
          id={`price-item-${price.id}`}
          className={styles.blockItem}
        >
          <>
            <div className={styles.imageContainer}>
              <img src={listPage[price.id]} alt={price.title} className={styles.image} loading="lazy"/>
            </div>
            <MyContainer>
              <div className={styles.textContainer}>
                <h3>{price.title}</h3>
                <div className={styles.textContainerRow}>
                  <h4>{formatText(price?.text)}</h4>
                  <h4>{formatText(price?.text2)}</h4>
                </div>
                <div className={styles.textContainerFooter}>
                <h4>{formatText(price?.text3)}</h4>
                </div>
                <div className={styles.buttonComponent}>
                  <MyButton text={t("homePage.viewDetails")} />
                </div>
              </div>
            </MyContainer>
          </>
        </div>
      ))}
    </div>
  );
};

export default PriceCarousel;
