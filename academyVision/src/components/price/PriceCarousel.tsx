import Slider from "react-slick";
import { Price } from "../../types/Price";
import { useTranslation } from "react-i18next";
import styles from "./PriceCarousel.module.css";
import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.customArrow}`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
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
            {price.text.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h4>
        </div>
      ))}
    </Slider>
  );
};

export default PriceCarousel;
