import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from "./AboutProjects.module.css";
import "./AboutProjects.css";
import { useTranslation } from 'react-i18next';
import { AdvantageCard } from '../../types/AdvantageCard';
import boss from "../../assets/pageFoto/BigBoss.jpg"
import MyContainer from '../myContainer/MyContainer';


const AboutProjects: React.FC = () => {
    const { t } = useTranslation("translation");
    const advantageCards: AdvantageCard[] = t("advantageCards", { returnObjects: true });

    return (
        < >
            {/* {advantageCards.map((card) => (
                <Card
                    key={card.id}
                    className={`${styles.cardContainer} mb-2 border-2`}
                >
                    <Card.Header className={styles.advantageHeader}>
                        <Card.Img variant="left" className={styles.logo} src={card?.icon} />
                        <Card.Text className={styles.advantageTextHeader}>{card.title}</Card.Text>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text className={styles.advantageText}>{card.description}</Card.Text>
                    </Card.Body>
                </Card>
            ))} */}
            {/* <Container >
                <Row style={{ width: '100vh' }}>
                    <Col xs={3}>
                        <div className="card__article">
                            <img src={boss} alt="image" className="card__img" />
                            <div className="card__data">
                                <a href="#" className="card__button">Read More</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={9}>
                        <div className="card__article">
                            <img src={boss} alt="image" className="card__img" />
                            <div className="card__data">
                                <a href="#" className="card__button">Read More</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container> */}
            <MyContainer > {/* Для того чтобы Container занимал всю ширину */}
                <div className="container-work">
                    <div className="block block-40">
                        <img src={boss} alt="image" className="card__img" />  
                    </div>
                    <div className="block block-60">
                        <img src={boss} alt="image" className="card__img" />
                    </div>
                </div>
                <div className="container-work">
                    <div className="block block-60">
                        <img src={boss} alt="image" className="card__img" />
                    </div>
                    <div className="block block-40">
                        <img src={boss} alt="image" className="card__img" />
                    </div>
                </div>
            </MyContainer>


        </>
    );

}

export default AboutProjects;