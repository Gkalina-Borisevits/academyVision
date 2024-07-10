import React from "react";
// import { Card } from "react-bootstrap";
import "./StyleMobileMoreAboutProject.css";
import styles from "./StyleMobileMoreAboutProject.module.css";
import { useTranslation } from "react-i18next";
import { MoreAboutProject } from "../../../types/MoreAboutProject";
import project1 from '../../../assets/projects/furniture.png'
import project2 from '../../../assets/projects/creme.png'
import project3 from '../../../assets/projects/hotel.png'
import project4 from '../../../assets/projects/perfume.png'
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
                        <Card.Title className="text-dark fs-6 mt-1"><h3>{card.title}</h3></Card.Title>
                        <Card.Text className="pb-2 "><p>{card.titleDetails}</p></Card.Text>
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
