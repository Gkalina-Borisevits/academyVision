import React, { useState } from 'react'
import './MoreHomeCards.css'
import MyContainer from '../myContainer/MyContainer.tsx'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import { HomeCard } from "../../types/HomeCard.ts";
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import web from "../../assets/homeIcons/web.png"
import smm from "../../assets/homeIcons/smm.png"
import seo from "../../assets/homeIcons/seo.png"
import coauch from "../../assets/homeIcons/coach.png"
const listPage: string[] = [web, smm, seo, coauch]

const MoreHomeCards: React.FC = () => {
    const { t } = useTranslation("translation");
    const homeCards: HomeCard[] = t("homeCards", { returnObjects: true });

    // const [activeTab, setActiveTab] = useState<string>("0");

    // const handleSelect = (key: string | null) => {
    //     if (key !== null) {
    //         setActiveTab(key);
    //     }
    // };
    const [activeTabs, setActiveTabs] = useState<{ [key: number]: string }>(
        homeCards.reduce((acc, card) => ({ ...acc, [card.id]: "0" }), {})
    );
    const handleSelect = (cardId: number, key: string | null) => {
        if (key !== null) {
            setActiveTabs({ ...activeTabs, [cardId]: key });
        }
    };
    return (
        <div >
            {homeCards.map((card) => (
                <div key={card.id} id={`card-${card.id}`}>
                    {card.id % 2 === 0 ? (
                        <>
                            <MyContainer>
                                <div className='more-home-cards-header'>
                                    <div className='box-header'>
                                        <div className='title-more-card'>
                                            <h2 className='header'>{card.name}</h2>
                                            <img src={listPage[card.id]} alt="" />
                                        </div>
                                        <p className=''>{card.description}</p>
                                    </div>
                                    <Tab.Container id={`tabs-${card.id}`} defaultActiveKey="0" activeKey={activeTabs[card.id]} onSelect={(key) => handleSelect(card.id, key)}>
                                        <Row>
                                            <Col sm={6}>
                                                <Nav variant="tabs" className="flex-column mt-2">
                                                    {card.details.map((card) => (
                                                        <Nav.Item>
                                                            <Nav.Link eventKey={card.id.toString()}>
                                                                <div className="d-flex justify-content-between">
                                                                    <p>
                                                                        {card.title}
                                                                    </p>
                                                                    <p className='fon-num'>
                                                                        {""}<FaArrowRight />
                                                                    </p>
                                                                </div>
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                    ))}
                                                </Nav>
                                            </Col>
                                            <Col sm={6} className={`fon ${card.name === "SMM" ? `bg-smm-${activeTabs[card.id]}`
                                                : card.name === "COACH" ? `bg-coach-${activeTabs[card.id]}`
                                                    : card.name === "WEB" ? `bg-web-${activeTabs[card.id]}`
                                                        : card.name === "SEO" ? `bg-seo-${activeTabs[card.id]}`
                                                            : ''}`}>
                                                <div className="content"></div>
                                                <Tab.Content>
                                                    {card.details.map((card) => (
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
                                </div>

                            </MyContainer>
                        </>
                    ) : (
                        <>
                            <MyContainer>
                                <div className='more-home-cards-header'>
                                    <div className='box-header'>
                                        <div className='title-more-card'>
                                            <h2 className='header'>{card.name}</h2>
                                            <img src={listPage[card.id]} alt="" />
                                        </div>
                                        <p className=''>{card.description}</p>
                                    </div>
                                    <Tab.Container id={`tabs-${card.id}`} defaultActiveKey="0" activeKey={activeTabs[card.id]} onSelect={(key) => handleSelect(card.id, key)}>
                                        <Row>
                                            <Col sm={6} className={`fon ${card.name === "SMM" ? `bg-smm-${activeTabs[card.id]}`
                                                : card.name === "COACH" ? `bg-coach-${activeTabs[card.id]}`
                                                    : card.name === "WEB" ? `bg-web-${activeTabs[card.id]}`
                                                        : card.name === "SEO" ? `bg-seo-${activeTabs[card.id]}`
                                                            : ''}`}>                                            <div className="content"></div>
                                                <Tab.Content>
                                                    {card.details.map((card) => (
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
                                            <Col sm={6}>
                                                <Nav variant="tabs" className="flex-column mt-2">
                                                    {card.details.map((card) => (
                                                        <Nav.Item>
                                                            <Nav.Link eventKey={card.id.toString()}>
                                                                <div className="d-flex justify-content-between">
                                                                    <p className='fon-num'>
                                                                        {""}<FaArrowLeft />
                                                                    </p>
                                                                    <p>
                                                                        {card.title}
                                                                    </p>
                                                                </div>

                                                            </Nav.Link>
                                                        </Nav.Item>
                                                    ))}
                                                </Nav>
                                            </Col>

                                        </Row>
                                    </Tab.Container>
                                </div>

                            </MyContainer>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}
export default MoreHomeCards
