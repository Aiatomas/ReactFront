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
    const [isCustom, setIsCustom] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    let setCustomValues = (e) => {
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

    const handleSelectOption = e => {
        const selectedFormat = formats.find(format => format.name === e.target.value);
        if(selectedFormat){
            setX(selectedFormat.x);
            setY(selectedFormat.y);
            setIsCustom(false)
        } else {
            setIsCustom(true)
        }
    }

    let formats = [
        // {name:"300х500 мм", x: 300, y: 500},
        // {name:"310x310 мм", x: 310, y: 310},
        // {name:"300х630 мм", x: 300, y: 630},
        // {name:"314х324 мм", x: 314, y: 324},
        {name:"А6 (105 х 148 мм)", x: 105, y: 148},
        {name:"A5 (148 х 210 мм)", x: 148, y: 210},
        {name:"A4 (210 x 297 мм)", x: 210, y: 297},
        {name:"А3 (297 х 420 мм)", x: 297, y: 420},
        // {name:"300х430 мм", x: 300, y: 430},
        // {name:"314х648 мм", x: 314, y: 648},
        {name:"90х50 мм", x: 90, y: 50},
        {name:"85x55 мм", x: 85, y: 55},
        {name:"90х55 мм", x: 90, y: 55},
        {name:"100х100 мм", x: 100, y: 100},
        {name:"100х150 мм", x: 100, y: 150},
        {name:"86х54 мм", x: 86, y: 54},
        {name:"200х100 мм", x: 200, y: 100},
        {name:"87х54 мм", x: 87, y: 54},
        {name:"200х200 мм", x: 200, y: 200},
        {name:"88х50 мм", x: 88, y: 50},
        {name:"85х54 мм", x: 85, y: 54},
        // {name:"300х300 мм", x: 300, y: 300},
        // {name:"314х474 мм", x: 314, y: 474},
        // {name:"314х685 мм", x: 314, y: 685},
    ]

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
                    <Form.Select
                        aria-label="Default select example"
                        onChange={handleSelectOption}
                        className="mb-3"
                    >
                        <option disabled selected>Оберіть значення</option>
                        <option>Задати свій розмір</option>
                        {formats.map((item, iter) => (
                            <option
                                key={item.name}
                            >
                                {item.name}
                            </option>
                        ))}
                    </Form.Select>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">x</InputGroup.Text>
                        {isCustom === true ? (
                            <Form.Control
                                aria-describedby="modRed"
                                type="number"
                                value={x}
                                min={45}
                                max={445}
                                onChange={(event) => setX(event.target.value)}
                                isInvalid={xVal}
                            />
                        ) : (
                            <Form.Control
                                aria-describedby="modRed"
                                type="number"
                                value={x}
                                min={45}
                                max={445}
                                disabled
                                onChange={(event) => setX(event.target.value)}
                                isInvalid={xVal}
                            />
                        )}
                        <Form.Control.Feedback type="invalid">
                            Будь-ласка введіть розмір від 45 до 445.
                        </Form.Control.Feedback>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">y</InputGroup.Text>
                        {isCustom === true ? (
                            <Form.Control
                                aria-describedby="modRed"
                                type="number"
                                value={y}
                                min={45}
                                max={445}
                                onChange={(event) => setY(event.target.value)}
                                isInvalid={yVal}
                            />
                        ) : (
                            <Form.Control
                                aria-describedby="modRed"
                                type="number"
                                value={y}
                                min={45}
                                max={445}
                                disabled
                                onChange={(event) => setY(event.target.value)}
                                isInvalid={yVal}
                            />
                        )}
                        <Form.Control.Feedback type="invalid">
                            Будь-ласка введіть розмір від 45 до 445.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрити
                    </Button>
                    <Button variant="success" onClick={setCustomValues}>
                        Застосувати
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalSize;