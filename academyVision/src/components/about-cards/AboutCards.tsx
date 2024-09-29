import React from 'react';
import {Card} from 'react-bootstrap'; // Добавлен импорт компонента Card
import styles from "./StyleAboutCards.module.css";
import { useTranslation } from 'react-i18next';
import { AboutCard } from '../../types/AboutCard';

import creative from '../../assets/aboutIcons/creative.webp'
import innovation from '../../assets/aboutIcons/innovation.webp'
import reliable from '../../assets/aboutIcons/reliable.webp'
import united from '../../assets/aboutIcons/united.webp'
const aboutIcons: string[] = [innovation,creative,reliable,united];

const AboutCards: React.FC = () => {
    const { t } = useTranslation("translation");
    const aboutCards: AboutCard[] = t("aboutCards", { returnObjects: true });

    return (
        <div className={styles.homeCardContainer}>
            {aboutCards.map((card, index) => (
                <Card
                style={{
                    height: '22rem',
                    animationDelay: `${index * 0.2}s`, 
                  }}
                    key={card.id}
                    className={`${styles.cardContainer} mb-2 border-2`}
                >
                    <Card.Header className={styles.cardHeader}>
                        <Card.Img variant="left" className={styles.logo} src={aboutIcons[card.id]} />
                        {/* <h1> {card.name}</h1> */}
                        <Card.Text className={styles.headerText}> {card.name}</Card.Text>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text className={styles.aboutText}>{card.description}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default AboutCards;