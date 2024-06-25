import { useEffect, useState } from "react";
import styles from "./styles/Home.module.css";
import img from "../assets/pagesImage/home.png";
import HomeCards from "../components/home-cards/HomeCards";
import HomeCardsAccordion from "../components/home-cards/home-accordion/HomeCardsAccordion";
import ImageContainer from "../components/imageContainer/ImageContainer";
import AboutHomePage from "../components/aboutHomePage/AboutHomePage";
import MyButton from "../components/myButton/MyButton";
import MyContainer from "../components/myContainer/MyContainer";
import ContactForm from "../components/contactForm/ContactForm";


const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 468);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 468);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ImageContainer imgSrc={img} imgAlt="Image" />
      <div className={styles.homeContainer}>
        <MyContainer>
          <div className={styles.homeCardContainer}>
            {isMobile ? <HomeCardsAccordion /> : <HomeCards />}
          </div>
          <AboutHomePage />
          <MyButton text="click" />
          <ContactForm />
        </MyContainer>
      </div>
    </>
  );
};

export default Home;


