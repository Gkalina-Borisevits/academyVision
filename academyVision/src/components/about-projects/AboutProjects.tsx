import React from "react";
import styles from "./styles/AboutProjects.module.css";
import "./styles/AboutProjects.css";
import MyContainer from '../myContainer/MyContainer';
import { AboutProject } from '../../types/AboutProject';
import logoCM from "../../assets/projects/logoCM.webp";
import logoPerfume from "../../assets/projects/logoPerfume.webp";
import logoHotel from "../../assets/projects/logoHotel.webp";
import logoCosmetics from "../../assets/projects/logoCosmetics.webp"
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import img1 from "../../assets/projects/furniture.webp";
import img2 from "../../assets/projects/creme.webp";
import img3 from "../../assets/projects/hotel.webp";
import img4 from "../../assets/projects/perfume.webp";
import { useNavigate } from "react-router-dom";
import MyButton from "../myButton/MyButton";


const AboutProjects: React.FC = () => {
  const { t } = useTranslation("translation");
  const navigate = useNavigate();
  const aboutProjects: AboutProject[] = t("aboutProject", {
    returnObjects: true,
  });

  const handleButtonClickProject = () => {
    navigate("/portfolio");
    window.scrollTo(0, 0);
  };
  return (
    <>
      <MyContainer>
      
        <div className={styles.headerProject}></div>
        <h2>{t("homePage.projects")}</h2>
        <div className={styles.containerWork}>
    
          <div
            className={`${styles.block} ${styles.block40} card__article`}
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className={styles.bgImg}>
              <div className={styles.header}>
                <img className={styles.logoCMStyle} src={logoCM} alt="" loading="lazy"/>
                <p>{aboutProjects[0].name}</p>
              </div>
              <ul>
                {aboutProjects[0].details.map((card) => (
                  <li>{card}</li>
                ))}
              </ul>
            </div>
            <div className="card__data card-block40">
              <Link to="/portfolio#card-0" className="card__button">
                {t("projects.details")}
              </Link>
            </div>
          </div>
          <div
            className={`${styles.block} ${styles.block60} card__article`}
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className={styles.bgImg}>
              <div className={styles.header}>
                <img className={styles.logoCosmeticsStyle} src={logoCosmetics} alt="" loading="lazy" />
                <p>{aboutProjects[1].name}</p>
              </div>
              <ul>
                {aboutProjects[1].details.map((card) => (
                  <li>{card}</li>
                ))}
              </ul>
            </div>
            <div className="card__data card-block60">
              <Link to="/portfolio#card-1" className="card__button">
                {t("projects.details")}
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.containerWork}>
          <div
            className={`${styles.block} ${styles.block60}  card__article`}
            style={{ backgroundImage: `url(${img3})` }}
          >
            <div className={styles.bgImg}>
              <div className={styles.header}>
                <img className={styles.logoHotelStyle} src={logoHotel} alt="" loading="lazy"/>
                <p>{aboutProjects[2].name}</p>
              </div>
           
              <ul>
                {aboutProjects[2].details.map((card) => (
                  <li>{card}</li>
                ))}
              </ul>
            </div>
            <div className="card__data card-block60">
              <Link to="/portfolio#card-2" className="card__button">
                {t("projects.details")}
              </Link>
            </div>
          </div>
          <div
            className={`${styles.block} ${styles.block40}  card__article`}
            style={{ backgroundImage: `url(${img4})` }}
          >
            <div className={styles.bgImg}>
              <div className={styles.header}>
                <img className={styles.logoPerfumeStyle} src={logoPerfume} alt="" loading="lazy"/>
                <p>{aboutProjects[3].name}</p>
              </div>
              <ul>
                {aboutProjects[3].details.map((card) => (
                  <li>{card}</li>
                ))}
              </ul>
            </div>
            <div className="card__data card-block40">
              <Link to="/portfolio#card-3" className="card__button">
                {t("projects.details")}
              </Link>
            </div>
          </div>
        </div>
        <div>
          <MyButton
            onClick={handleButtonClickProject}
            text={t("homePage.viewDetails")}
          />
        </div>
      </MyContainer>
    </>
  );
};

export default AboutProjects;
