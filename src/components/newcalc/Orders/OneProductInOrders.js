import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import InputGroup from 'react-bootstrap/InputGroup';

function OneProductInOrders({item}) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        console.log(item);
        setShow(true);
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title className="adminFont">
                    {/*<div>Назва {item.unitName}</div>*/}
                </Card.Title>
                <Card.Text className="adminFont">
                    <p>
                        {item.fullOrderProduct.newField1 === "1" ? (
                            <div className="d-flex">
                                <Form.Group className="d-flex">
                                    <Button disabled variant="outline-dark" className="adminFont">x</Button>
                                    <Form.Control
                                        type="number"
                                        placeholder="x"
                                        value={item.fullOrderProduct.newField2}
                                        className="adminFontTable"
                                        disabled
                                        // onChange={(event) => handleProductInCashChange(index, 'newField2', event)}
                                    />
                                </Form.Group>
                                <Form.Group className="d-flex">
                                    <Button disabled variant="outline-dark" className="adminFont">y</Button>
                                    <Form.Control
                                        type="number"
                                        placeholder="y"
                                        value={item.fullOrderProduct.newField3}
                                        className="adminFontTable"
                                        disabled
                                        // onChange={(event) => handleProductInCashChange(index, 'newField3', event)}
                                    />
                                </Form.Group>
                            </div>
                        ) : (
                            <div className="d-flex">
                                <Form.Group className="d-flex">
                                    <Button disabled variant="outline-dark" className="adminFont">x:</Button>
                                    <Button
                                        variant="outline-dark"
                                        className="adminFontTable"
                                        disabled
                                    >{item.fullOrderProduct.newField2}</Button>
                                </Form.Group>
                                <Form.Group className="d-flex">
                                    <Button disabled variant="outline-dark" className="adminFont">y:</Button>
                                    <Button
                                        variant="outline-dark"
                                        className="adminFontTable"
                                        disabled
                                    >{item.fullOrderProduct.newField3}</Button>
                                </Form.Group>
                            </div>
                        )}
                    </p>
                    {item.fullOrderProduct.productunits.map((unitItem, iter) => (
                        <div key={unitItem.id} className="d-flex adminFontTable border-1">
                            <InputGroup className="adminFontTable">
                                <InputGroup.Text className="adminFontTable">{iter + 1}</InputGroup.Text>
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
                                    value={unitItem.quantity}
                                    className="adminFontTable"
                                    disabled
                                />
                            </InputGroup>
                        </div>
                    ))}
                </Card.Text>
            </Card.Body>

        </Card>
    );
}

export default OneProductInOrders;