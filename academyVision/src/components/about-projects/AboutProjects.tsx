import React from "react";
import styles from "./AboutProjects.module.css";
import "./AboutProjects.css";

import { useTranslation } from 'react-i18next';
import img1 from "../../assets/about-projects/test/1517154655_vodopad-v-lesu-video-oboi_jpg.jpg"
import img2 from "../../assets/about-projects/test/4862.jpg"
import img3 from "../../assets/about-projects/test/mult-pic905-895x505-90221.jpg"
import img4 from "../../assets/about-projects/test/photo_2024-03-12_19-21-10.jpg"
import img5 from "../../assets/homeIcons/smm.png"

import MyContainer from '../myContainer/MyContainer';
import { AboutProject } from '../../types/AboutProject';
import cartTest from "../../assets/aboutIcons/innovation.png"
import { Link } from 'react-router-dom';

import { useTranslation } from "react-i18next";
import img1 from "../../assets/about-projects/test/1517154655_vodopad-v-lesu-video-oboi_jpg.jpg";
import img2 from "../../assets/about-projects/test/4862.jpg";
import img3 from "../../assets/about-projects/test/mult-pic905-895x505-90221.jpg";
import img4 from "../../assets/about-projects/test/photo_2024-03-12_19-21-10.jpg";
import MyContainer from "../myContainer/MyContainer";
import { AboutProject } from "../../types/AboutProject";
import cartTest from "../../assets/aboutIcons/innovation.png";
import { Link, useNavigate } from "react-router-dom";
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
        {" "}
        <div className={styles.headerProject}></div>
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
                <p>{aboutProjects[0].name}</p>
              </div>
              <ul>
                {aboutProjects[0].details.map((card) => (
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
                <p>{aboutProjects[0].name}</p>
              </div>
              <ul>
                {aboutProjects[0].details.map((card) => (
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
                <p>{aboutProjects[0].name}</p>
              </div>
              <ul>
                {aboutProjects[0].details.map((card) => (
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
