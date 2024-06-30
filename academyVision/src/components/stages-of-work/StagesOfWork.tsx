import React, { useState } from 'react'
import './StyleStageOfWork.css'
import MyContainer from '../myContainer/MyContainer.tsx'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import { StagesWork } from "../../types/StagesWork.ts";
import { FaArrowRight } from 'react-icons/fa';

const StagesOfWork: React.FC = () => {
    const { t } = useTranslation("translation");
    const stagesWork: StagesWork[] = t("stagesWork", { returnObjects: true });

    const [activeTab, setActiveTab] = useState<string>("0");

    const handleSelect = (key: string | null) => {
        if (key !== null) {
            setActiveTab(key);
        }
    };

    return (
        <>
            <MyContainer>
                <div className='box-header'>
                    <h2 className='header'>{t("work.stages")}</h2>
                    <p className=''>{t("work.solutions")}</p>
                </div>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="0" activeKey={activeTab} onSelect={handleSelect}>
                    <Row>
                        <Col sm={5}>
                            <Nav variant="tabs" className="flex-column mt-2">
                                {stagesWork.map((card) => (
                                    <Nav.Item>
                                        <Nav.Link eventKey={card.id.toString()}>
                                            <div className="d-flex justify-content-between header-stage">
                                                <p>
                                                    {card.title}
                                                </p>
                                                <p className='fon-num'>
                                                    {card.num} {""}<FaArrowRight />
                                                </p>
                                            </div>
                                        </Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </Col>
                        <Col sm={7} className={`fon bg-${activeTab}`}>
                            <div className="content"></div>
                            <Tab.Content>
                                {stagesWork.map((card) => (
                                    <Tab.Pane eventKey={card.id.toString()} key={card.id}>
                                        <div className="tab-text">
                                            <p>
                                                {card.description}
                                            </p>
                                        </div>
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                            <div />
                        </Col>
                    </Row>
                </Tab.Container>
            </MyContainer>
        </>

    )
}

export default StagesOfWork
