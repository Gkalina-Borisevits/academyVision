import React from "react";
import { Card } from "react-bootstrap";
import styles from "./ServicesPageCard.module.css"
import { useTranslation } from "react-i18next";

import { NavLink } from 'react-router-dom';
import web from "../../assets/homeIcons/web.png"
import smm from "../../assets/homeIcons/smm.png"
import seo from "../../assets/homeIcons/seo.png"
import type { ServicesPageCard } from "../../types/ServicesPageCard";

const listPage: string[] = [web, smm, seo]



const ServicesPageCard: React.FC = () => {
  const { t } = useTranslation("translation");
  const pricePageCard: ServicesPageCard[] = t("servicesPageCard", { returnObjects: true });

  return (
    <div className={styles.homeCardsHomeCardContainer}>
      {pricePageCard.map((card) => (
        <NavLink key={card.id} className="text-decoration-none" to="/services">
          <Card className={`${styles.homeCardsCardContainer} mb-2 border-2`}>
            <Card.Header className={styles.homeCardsCardHeader}>
              <Card.Img variant="left" className={styles.homeCardsLogo} src={listPage[card.id]} />
              <h4> {card.title}</h4>
            </Card.Header>
            <Card.Body className={styles.homeCardsCardBody}>
              
              <Card.Text>
                
               <p>{card.description}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </NavLink>
      ))}
    </div>
  );
};

export default ServicesPageCard;