import React from "react";
// import { Card } from "react-bootstrap";
import "./StyleMoreAboutProject.css";
import styles from "./StyleMoreAboutProject.module.css";
import { useTranslation } from "react-i18next";
import { MoreAboutProject } from "../../types/MoreAboutProject";



const MoreAboutProjects: React.FC = () => {
    const { t } = useTranslation("translation");
    const moreAboutProjects: MoreAboutProject[] = t("moreAboutProject", { returnObjects: true });

    return (
        <div className={styles.homeCardContainer}>
            {moreAboutProjects.map((card) => (
                <div key={card.id} className={styles.cardContainer} id={`card-${card.id}`}>
                    {card.id % 2 === 0 ? (
                        <>
                            <div className={styles.imageContainer}>
                                <img src={card.page} alt="image" className={styles.cardImage} />
                            </div>
                            <div className={styles.textContainer}>
                                <h2 className={styles.cardTitle}>{card.title}</h2>
                                <p className={styles.cardDescription}>{card.titleDetails}</p>
                                <div className={`${styles.tagContainer} ${styles.tagContainerLeft}`} >
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
                                <div className={styles.tagContainer} >
                                {card.technologis.map((tag, index) => (
                                        <span key={index} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.imageContainer}>
                                <img src={card.page} alt="image" className={styles.cardImage} />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MoreAboutProjects;
