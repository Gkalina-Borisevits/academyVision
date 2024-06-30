import React from "react";
import { Card } from "react-bootstrap";
import styles from "./StyleAdvantage.module.css";
import "./StyleAdvantage.css";
import { useTranslation } from "react-i18next";
import { AdvantageCard } from "../../types/AdvantageCard";
import global from "../../../src/assets/advantageIcons/global.png";
import adaptiv from "../../../src/assets/advantageIcons/adaptiv.png";
import opacity from "../../../src/assets/advantageIcons/opacity.png";
import tim from "../../../src/assets/advantageIcons/tim.png";
import response from "../../../src/assets/advantageIcons/response.png";
import protection from "../../../src/assets/advantageIcons/protection.png";
import innovativ from "../../../src/assets/advantageIcons/innovativ.png";
import client from "../../../src/assets/advantageIcons/client.png";
const advantageIcons: string[] = [
  global,
  adaptiv,
  opacity,
  tim,
  response,
  protection,
  innovativ,
  client,
];

const AdvantageCards: React.FC = () => {
  const { t } = useTranslation("translation");
  const advantageCards: AdvantageCard[] = t("advantageCards", {
    returnObjects: true,
  });

  return (
    <div className={styles.advantageCardContainer}>
      {advantageCards.map((card) => (
        <Card key={card.id} className={`${styles.cardContainer} mb-2 border-2`}>
          <Card.Header className={styles.advantageHeader}>
            <Card.Img
              variant="left"
              className={styles.logo}
              src={advantageIcons[card.id]}
            />
            <Card.Text className={styles.advantageTextHeader}>
              {card.title}
            </Card.Text>
          </Card.Header>
          <Card.Body>
            <Card.Text className={styles.advantageText}>
              {card.description}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AdvantageCards;
