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
                            <Link to="/products/Sheet" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Друк аркушів</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/products/Sheetcut" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Друк з порізкою</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/products/Sticker" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Наклейки</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/products/Curvedcut" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Фігурні вироби</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/products/Magnet" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Магніти</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/products/Vizitki" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Візитівки</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/products/Poster" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Плакати</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/products/Listovki" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Листівки</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/products/Flyer" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Флаєри</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/products/Envelope" className="colorBlack">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Конверти</Card.Title>
                                        <Card.Text>

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