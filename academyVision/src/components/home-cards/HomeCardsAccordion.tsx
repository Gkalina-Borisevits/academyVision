import React from 'react';
import { Accordion } from 'react-bootstrap'; // Добавлен импорт компонента Card
import styles from "./StyleHomeCardsAccordion.module.css";
import "./StyleHomeCards.css";
import { useTranslation } from 'react-i18next';
import { HomeCard } from '../../types/HomeCard';
import MyContainer from '../myContainer/MyContainer';


const HomeCardsAccordion: React.FC = () => {
  const { t } = useTranslation("translation");
  const homeCards: HomeCard[] = t("homeCards", { returnObjects: true });

  return (
    <MyContainer>
    <div className={styles.homeCardContainerModile}>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {homeCards.map((card) => (
          <Accordion.Item eventKey={card.id.toString()} className={styles.accordionItem} >
            <Accordion.Header className={styles.accordionHeader}>
              <img className={styles.logo} src={card.icon} alt="" />
              <h1>{card.name}</h1>
            </Accordion.Header>
            <Accordion.Body className={styles.accordionBody}>
              <p>{card.description}</p>
              <ul>
                {card.details.map((detail, index) => (
                  <li key={index}>{detail}</li> // Добавьте ключи для элементов списка
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
    </MyContainer>
  );

}

export default HomeCardsAccordion;