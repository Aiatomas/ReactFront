import {useDispatch, useSelector} from "react-redux";
import {MDBContainer} from "mdb-react-ui-kit";
import {Col, Modal, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import React, {useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {number} from "../../editor/lib";
import InputGroup from "react-bootstrap/InputGroup";

const ModalSize = ({size, setSize}) => {
    const [show, setShow] = useState(false);
    const [x, setX] = useState(size.x);
    const [y, setY] = useState(size.y);
    const [xVal, setXVal] = useState(false);
    const [yVal, setYVal] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    let deleteThisRowF = (e) => {
        let validX = true;
        let validY = true;
        setXVal(false)
        setYVal(false)
        if(x < 45 || x > 445){
            validX = false
            setXVal(true)
        }
        if(y < 45 || y > 445){
            validY = false
            setYVal(true)
        }
        if(validX && validY){
            setSize({
                x: x,
                y: y
            })
            setShow(false);
        }
    }

    return (
        <>
            <Card onClick={handleShow}>
                <Card.Body>
                    <Card.Title className="adminFont">Розмір виробу</Card.Title>
                    <Card.Text className="adminFont">
                        {size.x}x{size.y} мм
                    </Card.Text>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Розмір</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">x</InputGroup.Text>
                        <Form.Control
                            aria-describedby="modRed"
                            type="number"
                            value={x}
                            min={45}
                            max={445}
                            // className="adminFontTable"
                            onChange={(event) => setX(event.target.value)}
                            isInvalid={xVal}
                        />
                        <Form.Control.Feedback type="invalid">
                            Будь-ласка введіть розмір від 45 до 445.
                        </Form.Control.Feedback>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">y</InputGroup.Text>
                        <Form.Control
                            aria-describedby="modRed"
                            type="number"
                            value={y}
                            min={45}
                            max={445}
                            // className="adminFontTable"
                            onChange={(event) => setY(event.target.value)}
                            isInvalid={yVal}
                        />
                        <Form.Control.Feedback type="invalid">
                            Будь-ласка введіть розмір від 45 до 445.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрити
                    </Button>
                    <Button variant="success" onClick={deleteThisRowF}>
                        Застосувати
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalSize;