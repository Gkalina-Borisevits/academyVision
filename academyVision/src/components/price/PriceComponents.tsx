import React from "react";
import { Card } from "react-bootstrap";
import "./StylePrice.css";
import styles from "./StylePrice.module.css";
import { useTranslation } from "react-i18next";
import { Price } from "../../types/Price";
import { NavLink } from 'react-router-dom';


const PriceComponents: React.FC = () => {
    const { t } = useTranslation("translation");
    const aboutPrices: Price[] = t("aboutPrice", { returnObjects: true });

    return (
        <div className={styles.priceHomeCardContainer}>
            {aboutPrices.map((card) => (
                <Card className={`${styles.priceCardContainer} mb-2 border-2`}>
                    <Card.Header className={styles.priceCardHeader}>
                        <Card.Img variant="left" className={styles.priceLogo} src={card?.icon} />
                        <h1> {card.title}</h1>
                    </Card.Header>
                    <Card.Body className={styles.priceCardBody}>
                        {/* <Card.Title className="text-dark fs-6">
                                {card.description}
                            </Card.Title> */}
                        <Card.Text>
                            <ul>
                                {card.description.map((detail, index) => (
                                    <li key={index} className={styles.priceLi}>{detail}</li>
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
                </Card>
            ))}
        </div>
    );
};

export default PriceComponents;