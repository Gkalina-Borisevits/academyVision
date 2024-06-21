import React from 'react';
import{Card} from 'react-bootstrap'; // Добавлен импорт компонента Card
import styles from "./StyleHomeCards.module.css";
import { useTranslation } from 'react-i18next';
import { HomeCard } from '../../types/HomeCard';


const HomeCards: React.FC = () => {
    const { t } = useTranslation("translation");
    const homeCards:HomeCard[] = t("homeCards", { returnObjects: true });
   
    return (
        <div className={styles.homeCardContainer}>
            {homeCards.map((card) => (
                <Card
                    key={card.id}
                    className={`${styles.cardContainer} mb-2`} // Использование класса cardContainer
                >
                    <Card.Header className={styles.cardHeader}>
                        {/* <img className={styles.logo} src={card?.icon} alt={card.name} /> */}
                        <Card.Img variant="left" className={styles.logo} src={card?.icon} />
                        <h1> {card.name}</h1>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className="text-dark fs-6">{card.discription}</Card.Title>
                        <Card.Text>
                            <ul>
                                {card.details.map((detail, index) => (
                                    <li key={index}>{detail}</li> // Добавьте ключи для элементов списка
                                ))}
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
    
}

export default HomeCards;
