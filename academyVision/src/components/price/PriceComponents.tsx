import React from "react";
import { Card } from "react-bootstrap";
import "./StylePrice.css";
import styles from "./StylePrice.module.css";
import { useTranslation } from "react-i18next";
import { Price } from "../../types/Price";
import MyContainer from "../myContainer/MyContainer";
import silver from "../../assets/priceIcons/silver.png"
import gold from "../../assets/priceIcons/gold.png"
import premium from "../../assets/priceIcons/premium.png"
import other from "../../assets/priceIcons/other.png"


const PriceComponents: React.FC = () => {
    const { t } = useTranslation("translation");
    const aboutPrices: Price[] = t("aboutPrice", { returnObjects: true });

    const listPage: string[] = [silver, gold, premium, other]

    return (
        <div className={styles.priceHomeCardContainer}>
            {aboutPrices.map((card) => (
                <Card className={`${styles.priceCardContainer} mb-2 border-2`}>
                    <MyContainer>
                    <Card.Header className={styles.priceCardHeader}>
                    <Card.Img variant="left" className={styles.homeCardsLogo} src={listPage[card.id]} />
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
                    </MyContainer>
                </Card>
            ))}
        </div>
    );
};

export default PriceComponents;