import React from 'react';
import { Accordion } from 'react-bootstrap'; 
import styles from "./StyleStageOfWorkAccordion.module.css";
import "./StyleStageOfWorkAccordion.css";
import { useTranslation } from 'react-i18next';
import { StagesWork } from '../../../types/StagesWork';

const StageOfWorkAccordion: React.FC = () => {
    const { t } = useTranslation("translation");
    const stagesWork: StagesWork[] = t("stagesWork", { returnObjects: true });

    return (

        <div className={styles.homeCardContainerModile}>
            <div className='box-header'>
                    <h1 className='header'>{t("work.stages")}</h1>
                    <h5 className=''>{t("work.solutions")}</h5>
                </div>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                {stagesWork.map((card) => (
                    <Accordion.Item eventKey={card.id.toString()} className={styles.accordionItem} >
                        <Accordion.Header className={styles.accordionHeader}>
                                <p>{card.num}. {card.title}</p>
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

export default StageOfWorkAccordion;