import React from 'react';
import { Accordion } from 'react-bootstrap'; // Добавлен импорт компонента Card
import styles from "./AccordionServicesCard.module.css";

import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import web from "../../../assets/homeIcons/web.png"
import smm from "../../../assets/homeIcons/smm.png"
import seo from "../../../assets/homeIcons/seo.png"
import { ServicesPageCard } from '../../../types/ServicesPageCard';

const listPage: string[] = [web, smm, seo]



const AccordionServicesCard: React.FC = () => {
  const { t } = useTranslation("translation");
  const homeCards: ServicesPageCard[] = t("servicesPageCard", { returnObjects: true });

  return (

    <div className={styles.homeCardContainerMobile}>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {homeCards.map((card) => (
          <Accordion.Item eventKey={card.id.toString()} className={styles.accordionItem} >
            <Accordion.Header className={styles.accordionHeader}>
              <img className={styles.logo} src={listPage[card.id]} alt="" />
              <h4>{card.title}</h4>
            </Accordion.Header>
            <Accordion.Body className={styles.accordionBody}>
              <p>{card.description}</p>
            </Accordion.Body>
            <NavLink className="text-decoration-none" to="/services">
              <Accordion.Body className="d-flex justify-content-end fs-2" style={{ marginRight: "40px" }}>
              
              </Accordion.Body>
            </NavLink>

          </Accordion.Item>

        ))}

      </Accordion>
    </div>
  );

}

export default AccordionServicesCard;