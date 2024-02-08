import {MDBContainer} from "mdb-react-ui-kit";
import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import React, {useState} from "react";
import ModalSize from "./ModalSize";
import ModalMaterial from "./ModalMaterial";
import ModalColor from "./ModalColor";
import ModalLamination from "./ModalLamination";
import {View2} from "./View2";

const NewCalcMain = () => {
    const [show, setShow] = useState(false);
    const [size, setSize] = useState([45, 45]);
    const [material, setMaterial] = useState([null, null]);
    const [color, setColor] = useState([null, null, null]);
    const [lamination, setLamination] = useState([null, null, null]);

    return (
        <div className="d-flex" >
            <MDBContainer fluid>
                <Row xs={1} md={5} className="g-2">
                    <Col>
                        <ModalSize size={size} setSize={setSize}/>
                    </Col>
                    <Col>
                        <ModalMaterial material={material} setMaterial={setMaterial}/>
                    </Col>
                    <Col>
                        <ModalColor color={color} setColor={setColor}/>
                    </Col>
                    <Col>
                        <ModalLamination lamination={lamination} setLamination={setLamination}/>
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
            <div style={{width: '50vw'}}>
                {/*<View2*/}
                {/*    size={size}*/}
                {/*    material={material}*/}
                {/*    color={color}*/}
                {/*    lamination={lamination}*/}
                {/*/>*/}
                View
            </div>
        </div>
    )
};

export default NewCalcMain;