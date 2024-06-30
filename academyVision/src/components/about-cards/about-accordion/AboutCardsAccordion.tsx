import React from 'react';
import { Accordion } from 'react-bootstrap';
import styles from "./StyleAboutAccordion.module.css";
import "./StyleAboutAccordion.css";
import { useTranslation } from 'react-i18next';
import { AboutCard } from '../../../types/AboutCard';
import creative from '../../../assets/aboutIcons/creative.png'
import innovation from '../../../assets/aboutIcons/innovation.png'
import reliable from '../../../assets/aboutIcons/reliable.png'
import united from '../../../assets/aboutIcons/united.png'
const aboutIcons: string[] = [innovation, creative, reliable, united];


const AboutCardsAccordion: React.FC = () => {
  const { t } = useTranslation("translation");
  const aboutCards: AboutCard[] = t("aboutCards", { returnObjects: true });

  return (
    <div className={styles.homeCardContainerMobile}>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {aboutCards.map((card) => (
          <Accordion.Item eventKey={card.id.toString()} className={styles.accordionItem} >
            <Accordion.Header className={styles.accordionHeader}>
              <img className={styles.logo} src={aboutIcons[card.id]} alt="" />
              <h1 className={styles.accordionH1}>{card.name}</h1>
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