import React from "react";
import styles from "./AboutProjects.module.css";
import "./AboutProjects.css";
import MyContainer from '../myContainer/MyContainer';
import { AboutProject } from '../../types/AboutProject';
import cartTest from "../../assets/aboutIcons/innovation.png"
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import img1 from "../../assets/projects/möbel.png";
import img2 from "../../assets/projects/creme.png";
import img4 from "../../assets/projects/parfume.png";
import img3 from "../../assets/projects/hotel.png";
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
                <img className={styles.imgStyle} src={cartTest} alt="" />
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
                <img className={styles.imgStyle} src={cartTest} alt="" />
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
                <img className={styles.imgStyle} src={cartTest} alt="" />
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
                <img className={styles.imgStyle} src={cartTest} alt="" />
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
