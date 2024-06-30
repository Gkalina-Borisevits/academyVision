import React from "react";
// import { Card } from "react-bootstrap";
import "./StyleMobieMoreAboutProject.css";
import styles from "./StyleMobieMoreAboutProject.module.css";
import { useTranslation } from "react-i18next";
import { MoreAboutProject } from "../../../types/MoreAboutProject";
import project1 from '../../../assets/about-projects/test/1517154655_vodopad-v-lesu-video-oboi_jpg.jpg'
import project2 from '../../../assets/about-projects/test/4862.jpg'
import project3 from '../../../assets/about-projects/test/mult-pic905-895x505-90221.jpg'
import project4 from '../../../assets/about-projects/test/photo_2024-03-12_19-21-10.jpg'
import { Card } from "react-bootstrap";
const projects: string[] = [project1, project2, project3, project4]

const MoreAboutProjectsMobile: React.FC = () => {
    const { t } = useTranslation("translation");
    const moreAboutProjects: MoreAboutProject[] = t("moreAboutProject", { returnObjects: true });

    return (
        <div className={styles.mobileHomeCardContainer}>
            {moreAboutProjects.map((card) => (
                <Card key={card.id} className={styles.mobileCardContainer}>
                    <Card.Header className={styles.cardHeader}>
                        <Card.Img variant="top" className={styles.logo} src={projects[card.id]} />
                    </Card.Header>
                    <Card.Body className="pt-2">
                        <Card.Title className="text-dark fs-6 mt-1">{card.title}</Card.Title>
                        <Card.Text className="pb-2 ">{card.titleDetails}</Card.Text>
                        <div className={styles.tagContainer} >
                            {card.technologis.map((tag, index) => (
                                <span key={index} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default MoreAboutProjectsMobile;
