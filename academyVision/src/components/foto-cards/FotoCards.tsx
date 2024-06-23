import React from 'react';
import { Card, CardTitle } from 'react-bootstrap'; // Добавлен импорт компонента Card
import styles from "./StyleFotoCards.module.css";
import "./StyleFotoCards.css"
import { useTranslation } from 'react-i18next';
import { FotoCard } from '../../types/FotoCard';


const FotoCards: React.FC = () => {
    const { t } = useTranslation("translation");
    const fotoCards: FotoCard[] = t("fotoCards", { returnObjects: true });
    return (
        <div className={styles.homeCardContainer}>
            {fotoCards.map((card) => (
                <Card key={card.id} className={styles.cardContainer}>
                    <Card.Header className={styles.cardHeader}>
                        <div className={styles.flipContainer}>
                            <div className={styles.flipCardInner}>
                                <div className={styles.flipCardFront}>
                                    <Card.Img variant="top" className={styles.logo} src={card.foto} />
                                </div>
                                <div className={styles.flipCardBack}
                                    style={{
                                        backgroundImage: `url('${card.foto}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center',
                                        backgroundRepeat: 'no-repeat',
                                        width: '100%',
                                        height: '100%',  
                                        position: 'relative'
                                    }}>
                                    <div style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'rgba(47, 183, 252, 0.75)',  // Полупрозрачный черный фон
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <div className={styles.cardBackContent}>
                                            <p style={{ color: 'white', textAlign: 'center', padding: '20px' }}>{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body  className="pt-2">
                        <Card.Title className="text-dark fs-6 mt-1">{card.name}</Card.Title>
                        <Card.Text className="pb-2 ">{card.profile}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );

}

export default FotoCards;