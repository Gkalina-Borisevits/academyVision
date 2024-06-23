import React from 'react';
import { Accordion } from 'react-bootstrap';
import styles from "./StyleAboutAccordion.module.css";
import "./StyleAboutAccordion.css";
import { useTranslation } from 'react-i18next';
import { AdoutCard } from '../../../types/AboutCard';


const AboutCardsAccordion: React.FC = () => {
  const { t } = useTranslation("translation");
  const aboutCards: AdoutCard[] = t("adoutCards", { returnObjects: true });

  return (
    <div className={styles.homeCardContainerModile}>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {aboutCards.map((card) => (
          <Accordion.Item eventKey={card.id.toString()} className={styles.accordionItem} >
            <Accordion.Header className={styles.accordionHeader}>
              <img className={styles.logo} src={card.icon} alt="" />
              <h1>{card.name}</h1>
            </Accordion.Header>
            <Accordion.Body className={styles.accordionBody}>
              <p>{card.description}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );

}

export default AboutCardsAccordion;