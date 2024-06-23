import { FC } from "react";
import styles from "./styles/Home.module.css";
import img from "../assets/pagesImage/home.png";
import HomeCards from "../components/home-cards/HomeCards";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import AboutCardsAccordion from "../components/about-cards/about-accordion/AboutCardsAccordion";
import FotoCards from "../components/foto-cards/FotoCards";
import HomeCardsAccordion from "../components/home-cards/home-accordion/HomeCardsAccordion";

const Home: FC = () => {
  return (
    <>
      <div className={styles.imageContainer}>
        <img src={img} alt="Image" className={styles.backgroundImage} />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.homeCardContainer}>
        <Container>
          {/* <NavLink className="text-decoration-none" to="/services">
            <HomeCards />
          </NavLink> */}
          {/* <HomeCardsAccordion/> */}
          {/* <AboutCardsAccordion/> */}
          <FotoCards/>
        </Container>
      </div>
    </>
  );
};

export default Home;
