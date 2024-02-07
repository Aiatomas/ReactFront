import {Modal} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";

const ModalColor = ({color, setColor}) => {
    const [show, setShow] = useState(false);
    const [col1, setCol1] = useState("");


    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    let handleClick = (e) => {
        console.log(e);
        setCol1(e.target.getAttribute("toClick"))
    }

    let save = (e) => {
        setColor([col1, "", ""])
        setShow(false);
    }

    return (
        <>
            <Card onClick={handleShow}>
                <Card.Body>
                    <Card.Title className="adminFont">Кольоровість друку</Card.Title>
                    <Card.Text className="adminFont">
                        {color[0]} {color[1]} {color[2]}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Кольоровість друку</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{width: '24.5vw', height: '30vh', overflow: 'auto', border: '1px solid #ccc'}}>
                        {/* Много элементов */}
                        <div style={{padding: '10px'}}>
                            <div
                                toclick="Чорно-білий"
                                className={"Чорно-білий" === col1 ? 'bg-info' : ''}
                                onClick={handleClick}
                            >
                                Чорно-білий
                            </div>
                            <div
                                toclick="CMYK"
                                className={"CMYK" === col1 ? 'bg-info' : ''}
                                onClick={handleClick}
                            >
                                CMYK
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрити
                    </Button>
                    <Button variant="success" onClick={save}>
                    Застосувати
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalColor;