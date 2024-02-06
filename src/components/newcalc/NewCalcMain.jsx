import {useDispatch, useSelector} from "react-redux";
import {MDBContainer} from "mdb-react-ui-kit";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import React, {useState} from "react";
import ModalSize from "./ModalSize";

const NewCalcMain = () => {
    const [show, setShow] = useState(false);
    const [size, setSize] = useState([0, 0]);
    const [material, setMaterial] = useState([null, null]);
    const [color, setColor] = useState([null, null, null]);
    const [lamination, setLamination] = useState([null, null, null]);

    return (
        <>
            <MDBContainer fluid className="">
                <Row xs={1} md={6} className="g-2">
                    <Col>
                        <ModalSize size={size} setSize={setSize}/>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="adminFont">Тип матеріалу</Card.Title>
                                <Card.Text className="adminFont">
                                    {material[0]} {material[1]}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="adminFont">Кольоровість</Card.Title>
                                <Card.Text className="adminFont">
                                    {color[0]} {color[1]} {color[2]}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="adminFont">Тип ламінації</Card.Title>
                                <Card.Text className="adminFont">
                                    {lamination[0]} {lamination[1]} {lamination[2]}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="adminFont">Інші послуги</Card.Title>
                                <Card.Text className="adminFont">

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="adminFont">Макет</Card.Title>
                                <Card.Text className="adminFont">

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*{data.rows.map((item) => (*/}
                {/*"proxy": "http://127.0.0.1:3000",*/}
                {/*    <CardProduct key={item.id} name={name} data={data} setData={setData} item={item}/>*/}
                {/*))}*/}
            </MDBContainer>
        </>
    )
};

export default NewCalcMain;