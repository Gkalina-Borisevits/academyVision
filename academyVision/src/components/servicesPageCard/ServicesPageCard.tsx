import React from "react";
import { Card } from "react-bootstrap";
import styles from "./ServicesPageCard.module.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import design from "../../assets/servicesCard/design.webp";
import geld from "../../assets/servicesCard/geld.webp";
import team from "../../assets/servicesCard/team.webp";
import type { ServicesPageCard } from "../../types/ServicesPageCard";

const listPage: string[] = [design, geld, team];

const ServicesPageCard: React.FC = () => {
  const { t } = useTranslation("translation");
  const pricePageCard: ServicesPageCard[] = t("servicesPageCard", {
    returnObjects: true,
  });

  return (
    <div className={styles.homeCardsHomeCardContainer}>
      {pricePageCard.map((card, index) => (
        <NavLink key={card.id} className="text-decoration-none" to="/services">
          <Card style={{
                    animationDelay: `${index * 0.2}s`, 
                  }}
                  className={`${styles.homeCardsCardContainer} mb-2 border-2`}>
            <Card.Header className={styles.homeCardsCardHeader}>
              <Card.Img
                variant="left"
                className={styles.homeCardsLogo}
                src={listPage[card.id]}
                loading="lazy"
              />
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
