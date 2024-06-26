import React from 'react'
import { useTranslation } from 'react-i18next';
import { AboutHome } from '../../types/AboutHome';
import styles from "./AboutHomePage.module.css"
import { FaArrowRight } from 'react-icons/fa';

const AboutHomePage: React.FC = () => {
    const { t } = useTranslation("translation");
    const aboutHomePage: AboutHome[] = t("aboutHomePage", { returnObjects: true });
    
  return (
    <div>
      {aboutHomePage.map((item) => (
        <div className={styles.aboutHomeContainer} key={item.id}>
          <h3><FaArrowRight/>{" "}{item.title}</h3>
          <h5>{item.description}</h5>
        </div>
      ))}
    </div>
  )
}

export default AboutHomePage
