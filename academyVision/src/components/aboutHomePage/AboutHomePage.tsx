import React from "react";
import { useTranslation } from "react-i18next";
import { AboutHome } from "../../types/AboutHome";
import styles from "./AboutHomePage.module.css";
import { FaArrowRight } from "react-icons/fa";
import MyButton from "../myButton/MyButton";
import { useNavigate } from "react-router-dom";
import image from "../../assets/pagesImage/price.webp";

const AboutHomePage: React.FC = () => {
  const { t } = useTranslation("translation");
  const navigate = useNavigate();
  // const [parallaxSpeed, setParallaxSpeed] = useState(-40);

  const aboutHomePage: AboutHome[] = t("aboutHomePage", {
    returnObjects: true,
  });

  const handleButtonClickAbout = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     if (width >= 1200) {
  //       setParallaxSpeed(-30);
  //     } else if (width >= 768) {
  //       setParallaxSpeed(-20);
  //       setParallaxSpeed(-10);
  //     }
  //   };
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);


  return (
   
      <div className={styles.aboutHomePageContainer}>
        <div className={styles.aboutHomeTextContent}>
          {aboutHomePage.map((item) => (
            <div className={styles.aboutHomeText} key={item.id}>
              <h3>
                <FaArrowRight /> {item.title}
              </h3>
              <h5>{item.description}</h5>
            </div>
          ))}
          <div className={styles.buttonContainer}>
            <MyButton
              onClick={handleButtonClickAbout}
              text={t("homePage.viewDetails")}
            />
          </div>
        </div>
    
          <div className={styles.imageContainer}>
            <img src={image} alt="About image" loading="lazy" />
          </div>
       
      </div>
    
  );
};

export default AboutHomePage;
