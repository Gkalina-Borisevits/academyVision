import React from "react";
import "./StyleMoreAboutProject.css";
import styles from "./StyleMoreAboutProject.module.css";
import {useTranslation} from "react-i18next";
import {MoreAboutProject} from "../../types/MoreAboutProject";
import project1 from '../../assets/projects/möbel.png'
import project2 from '../../assets/projects/creme.png'
import project3 from '../../assets/projects/hotel.png'
import project4 from '../../assets/projects/perfume.png'

const projects: string[] = [project1, project2, project3, project4]

const MoreAboutProjects: React.FC = () => {
    const {t} = useTranslation("translation");
    const moreAboutProjects: MoreAboutProject[] = t("moreAboutProject", {returnObjects: true});

    return (
        <div className={styles.homeCardContainer}>
            {moreAboutProjects.map((card) => (
                <div key={card.id} className={styles.cardContainer} id={`card-${card.id}`}>
                    {card.id % 2 === 0 ? (
                        <>
                            <div className={styles.imageContainer}>
                                <img src={projects[card.id]} alt="image" className={styles.cardImage}/>
                            </div>
                            <div className={styles.textContainer}>
                                <h2 className={styles.cardTitle}>{card.title}</h2>
                                <p className={styles.cardDescription}>{card.titleDetails}</p>
                                <div className={`${styles.tagContainer}`}>
                                    {card.technologis.map((tag, index) => (
                                        <span key={index} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.textContainer}>
                                <h2 className={styles.cardTitle}>{card.title}</h2>
                                <p className={styles.cardDescription}>{card.titleDetails}</p>
                                <div className={styles.tagContainer}>
                                    {card.technologis.map((tag, index) => (
                                        <span key={index} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.imageContainer}>
                                <img src={projects[card.id]} alt="image" className={styles.cardImage}/>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MoreAboutProjects;
