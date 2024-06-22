import { FC } from "react";
import styles from "./styles/Home.module.css";
import img from "../assets/home.png";
import { FC } from 'react'
import BurgerMenu from '../components/burger-menu/BurgerMenu'
import HomeCards from '../components/home-cards/HomeCards'
import { NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Home: FC = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <img src={img} alt="Image" className={styles.backgroundImage} />
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};
      
      <Container>
          <NavLink className="text-decoration-none" to="/services"> 
         <HomeCards/>
      </NavLink>
    
     
      </Container>
    
      
      </div>
  )
}

export default Home;
