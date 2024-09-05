import Slider from "react-slick";
import { Price } from "../../types/Price";
import { useTranslation } from "react-i18next";
import styles from "./PriceCarousel.module.css";
import React from "react";
import { CSSProperties } from 'react';

interface ArrowProps {
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
  }

  const NextArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.customArrow}`}
        style={{ ...style, display: "block", right: "10px" }}
        onClick={onClick}
      />
    );
  };
  
  const PrevArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.customArrow}`}
        style={{ ...style, display: "block", left: "10px" }}
        onClick={onClick}
      />
    );
  };

const PriceCarousel: React.FC = () => {
  const { t } = useTranslation("translation");
  const aboutPrices: Price[] = t("aboutPrice", { returnObjects: true });

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipe: true,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings} className={styles.carouselContainer}>
    {aboutPrices.map((price) => (
      <div
        key={price.id}
        id={`price-item-${price.id}`}
        className={styles.carouselItem}
      >
        <h3>{price.title}</h3>
        <h4>
          {typeof price.text === 'string'
            ? price.text.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))
            : 'Text is not available'}
        </h4>
      </div>
    ))}
  </Slider>
  );
};

export default PriceCarousel;
