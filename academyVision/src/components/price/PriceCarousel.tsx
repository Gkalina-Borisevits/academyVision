import { Price } from "../../types/Price";
import { useTranslation } from "react-i18next";
import styles from "./PriceCarousel.module.css";
import React from "react";
import image from "../../assets/priceText/gold.png";
import MyButton from "../../components/myButton/MyButton";
import { ReactNode } from "react";
import MyContainer from "../myContainer/MyContainer";



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
      {aboutPrices.map((price, index) => (
        <div
          key={price.id}
          id={`price-item-${price.id}`}
          className={styles.blockItem}
        >
          {index % 2 === 0 ? (
            <>
             <div className={styles.imageContainer}>
                  <img src={image} alt={price.title} className={styles.image} />
                </div>
                <MyContainer>
              <div className={styles.textContainer}>
                <h3>{price.title}</h3>
               
                <h4>{formatText(price?.text)}</h4>
                <h4>{formatText(price?.text2)}</h4>
                <h4>{formatText(price?.text3)}</h4>
                <div className={styles.buttonComponent}>
                  <MyButton text={t("homePage.viewDetails")} />
                </div>
              </div>
              </MyContainer>
            </>
          ) : (
            <>
              <div className={styles.imageContainer}>
                <img src={image} alt={price.title} className={styles.image} />
              </div>
              <div className={styles.textContainer}>
                <h3>{price.title}</h3>
                <h4>{formatText(price?.text)}</h4>
                <h4>{formatText(price?.text2)}</h4>
                <h4>{formatText(price?.text3)}</h4>
                <div className={styles.buttonComponent}>
                  <MyButton text={t("homePage.viewDetails")} />
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PriceCarousel;
