import React from "react";
import { Card } from "react-bootstrap";
import styles from "./StylePrice.module.css";
import { useTranslation } from "react-i18next";
import { Price } from "../../types/Price";
import MyContainer from "../myContainer/MyContainer";
import silver from "../../assets/priceIcons/silver.png";
import gold from "../../assets/priceIcons/gold.png";
import premium from "../../assets/priceIcons/premium.png";
import other from "../../assets/priceIcons/other.png";

const PriceComponents: React.FC = () => {
  const { t } = useTranslation("translation");
  const aboutPrices: Price[] = t("aboutPrice", { returnObjects: true });

  const listPage: string[] = [silver, gold, premium, other];

  const handleCardClick = (id: number) => {
    const element = document.getElementById(`price-item-${id}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); 
    }
};

  return (
    <div className={styles.priceHomeCardContainer}>
      {aboutPrices.map((card, index) => (
         <Card
         key={card.id}
         style={{ animationDelay: `${index * 0.2}s` }} 
         className={`${styles.priceCardContainer} mb-2 border-2`}
         id={`card-item-${card.id}`} 
         onClick={() => handleCardClick(card.id)} 
     >
          <MyContainer>
            <Card.Header className={styles.priceCardHeader}>
              <Card.Img
                variant="left"
                className={styles.homeCardsLogo}
                src={listPage[card.id]}
              />
              <h1>{card.title}</h1>
            </Card.Header>
            <Card.Body className={styles.priceCardBody}>
              <Card.Text>
                <ul>
                  {card.description.map((detail, index) => (
                    <li key={index} className={styles.priceLi}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card.Text>
              <Card.Title className="text-dark fs-6">
                <div className={styles.priceWraper}>
                  <p>{card.priceTitle}</p>
                  <p>{card.price}</p>
                </div>
              </Card.Title>
            </Card.Body>
          </MyContainer>
        </Card>
      ))}
    </div>
  );
};

export default PriceComponents;
