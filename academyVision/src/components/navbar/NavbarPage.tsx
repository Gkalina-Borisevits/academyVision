import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from "./Navbar.module.css";



const NavbarPage: React.FC = () => {
    const { t } = useTranslation('translation');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 680);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 680);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <div className={styles.navbar}>
       
        {!isMobile && (
          <>
            <NavLink to="/">{t('header.home')}</NavLink>
            <NavLink to="/about">{t('header.about')}</NavLink>
            <NavLink to="/services">{t('header.services')}</NavLink>
            <NavLink to="/price">{t('header.price')}</NavLink>
            <NavLink to="/portfolio">{t('header.portfolio')}</NavLink>
            <NavLink to="/contacts">{t('header.contacts')}</NavLink>
          </>
        )}
      </div>
    );
  };
  

export default NavbarPage;