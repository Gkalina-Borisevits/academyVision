import React from "react";
import {Card} from "react-bootstrap";
import styles from "./StyleHomeCards.module.css";
import {useTranslation} from "react-i18next";
import {HomeCard} from "../../types/HomeCard";
import {NavLink} from 'react-router-dom';
import web from "../../assets/homeIcons/web.png"
import smm from "../../assets/homeIcons/smm.png"
import seo from "../../assets/homeIcons/seo.png"
import coauch from "../../assets/homeIcons/coach.png"

const listPage: string[] = [web, smm, seo, coauch]


const HomeCards: React.FC = () => {
    const {t} = useTranslation("translation");
    const homeCards: HomeCard[] = t("homeCards", {returnObjects: true});

    return (
        <div className={styles.homeCardsHomeCardContainer}>
            {homeCards.map((card) => (
                <NavLink key={card.id} className="text-decoration-none" to="/services">
                    <Card style={{height: '22rem'}} className={`${styles.homeCardsCardContainer} mb-2 border-2`}>
                        <Card.Header className={styles.homeCardsCardHeader}>
                            <Card.Img variant="left" className={styles.homeCardsLogo} src={listPage[card.id]}/>
                            <h1> {card.name}</h1>
                        </Card.Header>
                        <Card.Body style={{flex: "1 1 50%", display: 'flex', flexDirection: 'column'}}  className={styles.homeCardsCardBody}>
                            <Card.Title style={{flex: "1 1 40%", fontSize:"20px"}} className="text-dark">
                                {card.description}
                            </Card.Title>
                            <Card.Text style={{flex: "1 1 60%"}}>
                                <ul>
                                    {card.details.map((detail, index) => (
                                        <li key={index} className={styles.homeCardsLi}>{detail.title}</li>
                                    ))}
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </NavLink>
            ))}
        </div>
    );
};

export default HomeCards;
