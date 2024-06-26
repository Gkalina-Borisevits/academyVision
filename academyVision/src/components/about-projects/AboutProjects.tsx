import React from 'react';
import styles from "./AboutProjects.module.css";
import "./AboutProjects.css";
import { useTranslation } from 'react-i18next';
import img1 from "../../assets/about-projects/test/1517154655_vodopad-v-lesu-video-oboi_jpg.jpg"
import img2 from "../../assets/about-projects/test/4862.jpg"
import img3 from "../../assets/about-projects/test/mult-pic905-895x505-90221.jpg"
import img4 from "../../assets/about-projects/test/photo_2024-03-12_19-21-10.jpg"
import MyContainer from '../myContainer/MyContainer';
import { AboutProject } from '../../types/AboutProject';
import MyButton from '../myButton/MyButton';


const AboutProjects: React.FC = () => {
    const { t } = useTranslation("translation");
    const aboutProjects: AboutProject[] = t("aboutProject", { returnObjects: true });

    return (
        < >
            <MyContainer > {/* Для того чтобы Container занимал всю ширину */}
                <div className={styles.headerProject}>
                    <h2>Наши проекты</h2>
                </div>
                <div className={styles.containerWork}>
                    <div className={`${styles.block} ${styles.block40} card__article`} style={{ backgroundImage: `url(${img1})` }}>
                        <div className={styles.bgImg}>
                            <div className={styles.header}>
                                <img className={styles.imgStyle} src={aboutProjects[0].icon} alt="" />
                                <p>{aboutProjects[0].name}</p>
                            </div>
                            <ul>
                                {aboutProjects[0].details.map((card) => (
                                    <li>{card}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="card__data card-block40">
                            <a href="#" className="card__button">More</a>
                        </div>
                    </div>
                    <div className={`${styles.block} ${styles.block60} card__article`} style={{ backgroundImage: `url(${img2})` }}>
                        <div className={styles.bgImg}>
                            <div className={styles.header}>
                                <img className={styles.imgStyle} src={aboutProjects[0].icon} alt="" />
                                <p>{aboutProjects[0].name}</p>
                            </div>
                            <ul>
                                {aboutProjects[0].details.map((card) => (
                                    <li>{card}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="card__data card-block60">
                            <a href="#" className="card__button ">More</a>
                        </div>
                    </div>
                </div>
                <div className={styles.containerWork}>
                    <div className={`${styles.block} ${styles.block60}  card__article`} style={{ backgroundImage: `url(${img3})` }}>
                        <div className={styles.bgImg}>
                            <div className={styles.header}>
                                <img className={styles.imgStyle} src={aboutProjects[0].icon} alt="" />
                                <p>{aboutProjects[0].name}</p>
                            </div>
                            <ul>
                                {aboutProjects[0].details.map((card) => (
                                    <li>{card}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="card__data card-block60">
                            <a href="#" className="card__button ">More</a>
                        </div>
                    </div>
                    <div className={`${styles.block} ${styles.block40}  card__article`} style={{ backgroundImage: `url(${img4})` }}>
                        <div className={styles.bgImg}>
                            <div className={styles.header}>
                                <img className={styles.imgStyle} src={aboutProjects[0].icon} alt="" />
                                <p>{aboutProjects[0].name}</p>
                            </div>
                            <ul>
                                {aboutProjects[0].details.map((card) => (
                                    <li>{card}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="card__data card-block40">
                            <a href="#" className="card__button ">More</a>
                        </div>
                    </div>
                </div>
                <div className={styles.btn}>
                    <MyButton text="More"/>
                </div>
            </MyContainer>


        </>
    );

}

export default AboutProjects;