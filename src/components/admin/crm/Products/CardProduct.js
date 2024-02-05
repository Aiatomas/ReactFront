import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {Modal} from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';

function CardProduct({name, data, setData, item}) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        console.log(item);
        setShow(true);
    }
    const handleSubmit = (event) => {
        let dataToSend = {
            method: "deleteOne",
            id: item.id
        }
        axios.post(`admin/api/products`, dataToSend)
            .then(response => {
                console.log(response.data);
                setData(response.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    console.log(item);
    return (
        <Card>
            <Card.Body>
                <Card.Title className="adminFont">{item.name}</Card.Title>
                <Card.Text className="adminFont">
                    Складається з:
                    {item.productunits.map((unitItem, iter) => (
                        <div key={unitItem.id} className="d-flex adminFontTable border-1">
                            <InputGroup className="adminFontTable">
                                <InputGroup.Text className="adminFontTable">{iter+1}</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Назва у товарі"
                                    value={unitItem.name}
                                    className="adminFontTable"
                                    disabled
                                />
                                <Form.Control
                                    type="text"
                                    placeholder="Тип"
                                    value={unitItem.type}
                                    className="adminFontTable"
                                    disabled
                                />
                            </InputGroup>
                        </div>
                    ))}
                </Card.Text>
                <Button variant="danger" onClick={handleShow}  className="adminFont">Видалити</Button>
            </Card.Body>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Видалення</Modal.Title>
                </Modal.Header>
                <Modal.Body>Видалити {item.name}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрити
                    </Button>
                    <Button variant="danger" toclick={item.id} onClick={(event) => handleSubmit(event)}>
                        Видалити
                    </Button>
                </Modal.Footer>
            </Modal>
        </Card>
    );
}

export default CardProduct;