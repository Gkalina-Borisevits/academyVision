import React from 'react';
import { Accordion } from 'react-bootstrap'; // Добавлен импорт компонента Card
import styles from "./StyleHomeCardsAccordion.module.css";
import "./StyleHomeCards.css";
import { useTranslation } from 'react-i18next';
import { HomeCard } from '../../../types/HomeCard';
import { NavLink } from 'react-router-dom';
import web from "../../../assets/homeIcons/web.png"
import smm from "../../../assets/homeIcons/smm.png"
import seo from "../../../assets/homeIcons/seo.png"
import coauch from "../../../assets/homeIcons/coach.png"
const listPage: string[] = [web, smm, seo, coauch]



const HomeCardsAccordion: React.FC = () => {
  const { t } = useTranslation("translation");
  const homeCards: HomeCard[] = t("homeCards", { returnObjects: true });

  return (

    <div className={styles.homeCardContainerModile}>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {homeCards.map((card) => (
          <Accordion.Item eventKey={card.id.toString()} className={styles.accordionItem} >
            <Accordion.Header className={styles.accordionHeader}>
              <img className={styles.logo} src={listPage[card.id]} alt="" />
              <h1>{card.name}</h1>
            </Accordion.Header>
            <Accordion.Body className={styles.accordionBody}>
              <p>{card.description}</p>
              <ul>
                {card.details.map((detail, index) => (
                  <li key={index}>{detail.title}</li> // Добавьте ключи для элементов списка
                ))}
              </ul>
            </Accordion.Body>
            <NavLink className="text-decoration-none" to="/services">
              <Accordion.Body className="d-flex justify-content-end fs-2" style={{ marginRight: "40px" }}>
              {t("projects.details")}
              </Accordion.Body>
            </NavLink>

          </Accordion.Item>

        ))}

      </Accordion>
    </div>
  );

}

export default HomeCardsAccordion;