import {useDispatch, useSelector} from "react-redux";
import {MDBContainer} from "mdb-react-ui-kit";
import {Col, Modal, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import React, {useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {number} from "../editor/lib";
import InputGroup from "react-bootstrap/InputGroup";

const NewCalcMain = ({size, setSize}) => {
    const [show, setShow] = useState(false);
    const [x, setX] = useState(size[0]);
    const [y, setY] = useState(size[1]);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    let deleteThisRowF = (e) => {
        setSize([x, y])
        setShow(false);
    }

    return (
        <>
            <Card onClick={handleShow}>
                <Card.Body>
                    <Card.Title className="adminFont">Розмір виробу</Card.Title>
                    <Card.Text className="adminFont">
                        {size[0]}x{size[1]} мм
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
                            // className="adminFontTable"
                            onChange={(event) => setX(event.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">y</InputGroup.Text>
                        <Form.Control
                            aria-describedby="modRed"
                            type="number"
                            value={y}
                            // className="adminFontTable"
                            onChange={(event) => setY(event.target.value)}
                        />
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

export default NewCalcMain;