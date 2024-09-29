import { Price } from "../../types/Price";
import { useTranslation } from "react-i18next";
import styles from "./PriceCarousel.module.css";
import React from "react";
import { ReactNode } from "react";
import MyContainer from "../myContainer/MyContainer";
import silver from "../../assets/priceText/silver.webp";
import gold from "../../assets/priceText/gold.webp";
import platinum from "../../assets/priceText/platinum.webp";
import other from "../../assets/priceText/other.webp";
import { Parallax } from 'react-scroll-parallax';
import OrderButton from "./order-modal/OrderButton";

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
      : "";
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
            <Parallax speed={-40}>
              <img
                src={listPage[price.id]}
                alt={price.title}
                className={styles.image}
                loading="lazy"
              />
            </Parallax>
            </div>
            <MyContainer>
              <div className={styles.textContainer}>
                <h3>{price.title}</h3>
                <div className={styles.textContainerRow}>
                  <h5>{formatText(price?.text)}</h5>
                  <h5>{formatText(price?.text2)}</h5>
                </div>
                <div className={styles.textContainerFooter}>
                <h5>{formatText(price?.text3)}</h5>
                </div>
                <div className={styles.buttonComponent}>
                  <OrderButton/>
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
