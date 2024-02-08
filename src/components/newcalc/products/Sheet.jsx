import {MDBContainer} from "mdb-react-ui-kit";
import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import React, {useState} from "react";
import ModalSize from "../modals/ModalSize";
import ModalMaterial from "../modals/ModalMaterial";
import ModalColor from "../modals/ModalColor";
import ModalLamination from "../modals/ModalLamination";
import {View2} from "../View2";

const Sheet = () => {
    const [show, setShow] = useState(false);
    const [size, setSize] = useState({
        x: 45,
        y: 45
    });
    const [material, setMaterial] = useState({
        type: "",
        material: ""
    });
    const [color, setColor] = useState({
        sides: "без друку",
        one: "",
        two: "",
    });
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

export default Sheet;