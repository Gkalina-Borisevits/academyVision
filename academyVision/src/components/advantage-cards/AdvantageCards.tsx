import React from 'react';
import { Card } from 'react-bootstrap';
import styles from "./StyleAdvantage.module.css";
import "./StyleAdvantage.css";
import { useTranslation } from 'react-i18next';
import { AdvantageCard } from '../../types/AdvantageCard';


const AdvantageCards: React.FC = () => {
    const { t } = useTranslation("translation");
    const advantageCards: AdvantageCard[] = t("advantageCards", { returnObjects: true });

    return (
        <div className={styles.advantageCardContainer}>
            {advantageCards.map((card) => (
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
            ))}
        </div>
    );

}

export default AdvantageCards;