import React from 'react'
import { useTranslation } from 'react-i18next';
import { AboutHome } from '../../types/AboutHome';
import styles from "./AboutHomePage.module.css"
import { FaArrowRight } from 'react-icons/fa';
import MyButton from '../myButton/MyButton';
import { useNavigate } from 'react-router-dom';

const AboutHomePage: React.FC = () => {
    const { t } = useTranslation("translation");
    const navigate = useNavigate();
    const aboutHomePage: AboutHome[] = t("aboutHomePage", { returnObjects: true });

    const handleButtonClickAbout = () => {
      navigate("/about");
      window.scrollTo(0, 0);
    };
    
  return (
    <div>
      {aboutHomePage.map((item) => (
        <div className={styles.aboutHomeContainer} key={item.id}>
          <h3><FaArrowRight/>{" "}{item.title}</h3>
          <h5>{item.description}</h5>
        </div>
      ))}
      <div>
                <MyButton
                  onClick={handleButtonClickAbout}
                  text={t("homePage.viewDetails")}
                />
              </div>
    </div>
  )
}

export default AboutHomePage
