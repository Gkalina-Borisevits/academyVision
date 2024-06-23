import { FC, useEffect, useState } from "react";
import styles from "./styles/Home.module.css";
import img from "../assets/pagesImage/home.png";
import HomeCards from "../components/home-cards/HomeCards";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import ImageContainer from "../components/imageContainer/ImageContainer";
import HomeCardsAccordion from "../components/home-cards/HomeCardsAccordion";
import AboutHomePage from "../components/aboutHomePage/AboutHomePage";
import MyButton from "../components/myButton/MyButton";
import MyContainer from "../components/myContainer/MyContainer";


const Home: FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 468);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 468);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <ImageContainer imgSrc={img} imgAlt="Image" />
  
    <div className={styles.homeContainer}>
   
    <MyContainer>
      <div className={styles.homeCardContainer}>
      <Container>
          <NavLink className="text-decoration-none" to="/services">
            {isMobile ? <HomeCardsAccordion /> : <HomeCards />}
          </NavLink>
        </Container>
      </div>
    
      <AboutHomePage/>
      <MyButton text="click "/>
      </MyContainer>
    </div>
  
    </>
  );
};

export default Home;
