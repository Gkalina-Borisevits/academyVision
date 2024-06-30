import React from 'react'
import './MoreHomeCardsMobile.css'
import styles from './MoreHomeCardsMobile.module.css'
import { Accordion } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import { HomeCard } from "../../../types/HomeCard.ts";
import web from "../../../assets/homeIcons/web.png"
import smm from "../../../assets/homeIcons/smm.png"
import seo from "../../../assets/homeIcons/seo.png"
import coauch from "../../../assets/homeIcons/coach.png"
const listPage: string[] = [web, smm, seo, coauch]

const MoreHomeCardsMobile: React.FC = () => {
    const { t } = useTranslation("translation");
    const homeCards: HomeCard[] = t("homeCards", { returnObjects: true });


    return (
        <div className={styles.homeCardContainerModile}>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                {homeCards.map((card) => (
                    <Accordion.Item eventKey={card.id.toString()} className={styles.accordionItem} >
                        <Accordion.Header className={styles.accordionHeader}>
                            <img className={styles.moreCardLogo} src={listPage[card.id]} alt="" />
                            <h1>{card.name}</h1>
                        </Accordion.Header>
                        <Accordion.Body className={styles.moreCardAccordionBody}>
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                {card.details.map((card) => (
                                    <Accordion.Item eventKey={card.id.toString()} className={styles.accordionItem} >
                                        <Accordion.Header className={styles.accordionHeader}>
                                            <h1>{card.title}</h1>
                                        </Accordion.Header>
                                        <Accordion.Body className={styles.moreCardAccordionBody}>
                                            <p>{card.description}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    )
}
export default MoreHomeCardsMobile
