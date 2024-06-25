import React from "react";
import { Card } from "react-bootstrap"; // Добавлен импорт компонента Card
import styles from "./StyleHomeCards.module.css";
import { useTranslation } from "react-i18next";
import { HomeCard } from "../../types/HomeCard";
import { NavLink } from 'react-router-dom';


const HomeCards: React.FC = () => {
  const { t } = useTranslation("translation");
  const homeCards: HomeCard[] = t("homeCards", { returnObjects: true });

  return (
    <div className={styles.homeCardContainer}>
      {homeCards.map((card) => (
        <NavLink key={card.id} className="text-decoration-none" to="/services">
          <Card className={`${styles.cardContainer} mb-2 border-2`}>
            <Card.Header className={styles.cardHeader}>
              <Card.Img variant="left" className={styles.logo} src={card?.icon} />
              <h1> {card.name}</h1>
            </Card.Header>
            <Card.Body>
              <Card.Title className="text-dark fs-6">
                {card.description}
              </Card.Title>
              <Card.Text>
                <ul>
                  {card.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
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
