import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import BurgerMenu from "../burger-menu/BurgerMenu"

const Header: React.FC = () => {
  return (
    <div className={styles.navbarContainer}>
          <div><BurgerMenu/></div>
      <NavLink to="/" className={styles.logoContainer}></NavLink>
      <div className={styles.navbar}>
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/contacts">contacts</NavLink>
        <NavLink to="/portfolio">portfolio</NavLink>
        <NavLink to="/price">price</NavLink>
        <NavLink to="/services">services</NavLink>
      </div>
   
    
     
    </div>
  );
};

export default Header;
