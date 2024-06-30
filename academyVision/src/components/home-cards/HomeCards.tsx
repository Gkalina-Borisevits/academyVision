import React from "react";
import { Card } from "react-bootstrap";
import "./StyleHome.css";
import styles from "./StyleHomeCards.module.css";
import { useTranslation } from "react-i18next";
import { HomeCard } from "../../types/HomeCard";
import { NavLink } from 'react-router-dom';
import web from "../../assets/homeIcons/web.png"
import smm from "../../assets/homeIcons/smm.png"
import seo from "../../assets/homeIcons/seo.png"
import coauch from "../../assets/homeIcons/coach.png"
const listPage: string[] = [web, smm, seo, coauch]



const HomeCards: React.FC = () => {
  const { t } = useTranslation("translation");
  const homeCards: HomeCard[] = t("homeCards", { returnObjects: true });

  return (
    <div className={styles.homeCardsHomeCardContainer}>
      {homeCards.map((card) => (
        <NavLink key={card.id} className="text-decoration-none" to="/services">
          <Card className={`${styles.homeCardsCardContainer} mb-2 border-2`}>
            <Card.Header className={styles.homeCardsCardHeader}>
              <Card.Img variant="left" className={styles.homeCardsLogo} src={listPage[card.id]} />
              <h1> {card.name}</h1>
            </Card.Header>
            <Card.Body className={styles.homeCardsCardBody}>
              <Card.Title className="text-dark fs-6">
                {card.description}
              </Card.Title>
              <Card.Text>
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
