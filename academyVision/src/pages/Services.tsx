import { FC, useEffect, useState } from "react";
import styles from "./styles/Services.module.css";
import img from "../assets/pagesImage/services.webp";
import ImageContainer from "../components/imageContainer/ImageContainer";
import AdvantageCards from "../components/advantage-cards/AdvantageCards";
import MyContainer from "../components/myContainer/MyContainer";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/contactForm/ContactForm";
import ServicesPageCard from "../components/servicesPageCard/ServicesPageCard";
import AccordionServicesCard from "../components/servicesPageCard/accordionServicesCard/AccordionServicesCard";
import ContactUs from "../components/contactUs/ContactUs";
import MoreHomeCardsMobile from "../components/home-card-more/home-card-more-mobile/MoreHomeCardsMobile";
import MoreHomeCards from "../components/home-card-more/MoreHomeCards";

const Services: FC = () => {
  const { t } = useTranslation("translation");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 468);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 468);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const splitTextIntoSpans = (text: string): React.ReactNodeArray => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className={styles.letter}
        style={{
          animationDelay: `${index * 0.05}s`,
          display: char === ' ' ? 'inline-block' : 'inline', 
          whiteSpace: char === ' ' ? 'pre' : 'normal'
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
            <h1>{splitTextIntoSpans(t("homePage.name"))}</h1>
            <h2>{t("homePage.homeTitleHeader")}</h2>
            <h3>{t("services.headerText")}</h3>
          </div>
        </MyContainer>
      </ImageContainer>
      <div className={styles.servicesContainer}>
        <MyContainer>
          <div className={styles.homeCardContainer}>
            {isMobile ? <AccordionServicesCard /> : <ServicesPageCard />}
          </div>
        </MyContainer>
        <ContactUs />
        <MyContainer>
          {isMobile ? <MoreHomeCardsMobile /> : <MoreHomeCards />}
          </MyContainer>
          <ContactForm />

          <AdvantageCards />
       
      </div>
    </>
  );
};

export default Services;
