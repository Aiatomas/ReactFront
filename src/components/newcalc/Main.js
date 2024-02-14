import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Accordion, Col, Row} from "react-bootstrap";
import {MDBContainer} from "mdb-react-ui-kit";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {View} from "../calc/onefile/formatdrukview/View";

const Main = () => {
    const dispatch = useDispatch();
    const prices2 = useSelector(state => state.prices.prices2);

    return (
        <>
            <div className="d-flex">
                <MDBContainer fluid className="">
                    <Row xs={1} md={3} className="g-2">
                        <Col>
                            <Link to="/Orders/Sheet" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Друк аркушів</Card.Title>
                                        <Card.Text>
                                            Тимчасово логіка роботи кожного - Друк с порізкою, потім додамо продуктів
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/Orders/Sheetcut" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Друк з порізкою</Card.Title>
                                        <Card.Text>
                                            Візитки, флаєри, листівки та інша продукція з прямокутною порізкою. Доступні всі післядрукарські послуги крім плотерної порізки і зшивання.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/Orders/Sticker" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Наклейки</Card.Title>
                                        <Card.Text>
                                            Тимчасово логіка роботи кожного - Друк с порізкою, потім додамо продуктів
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/Orders/Curvedcut" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Фігурні вироби</Card.Title>
                                        <Card.Text>
                                            Тимчасово логіка роботи кожного - Друк с порізкою, потім додамо продуктів
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/Orders/Magnet" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Магніти</Card.Title>
                                        <Card.Text>
                                            Тимчасово логіка роботи кожного - Друк с порізкою, потім додамо продуктів
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/Orders/Vizitki" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Візитівки</Card.Title>
                                        <Card.Text>
                                            Тимчасово логіка роботи кожного - Друк с порізкою, потім додамо продуктів
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/Orders/Poster" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Плакати</Card.Title>
                                        <Card.Text>
                                            Тимчасово логіка роботи кожного - Друк с порізкою, потім додамо продуктів
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/Orders/Listovki" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Листівки</Card.Title>
                                        <Card.Text>
                                            Тимчасово логіка роботи кожного - Друк с порізкою, потім додамо продуктів
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/Orders/Flyer" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Флаєри</Card.Title>
                                        <Card.Text>
                                            Тимчасово логіка роботи кожного - Друк с порізкою, потім додамо продуктів
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/Orders/Envelope" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Конверти</Card.Title>
                                        <Card.Text>
                                            Тимчасово логіка роботи кожного - Друк с порізкою, потім додамо продуктів
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </MDBContainer>

                {/*<View/>*/}
            </div>
        </>
    )
};

export default Main;