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

    // const handleProductInCashChange = (formIndex, fieldName, event, isCheckbox) => {
    //     const updatedForms = [...data];
    //     if(isCheckbox){
    //         updatedForms[formIndex][fieldName] = !updatedForms[formIndex][fieldName]
    //     } else {
    //         updatedForms[formIndex][fieldName] = event.target.value;
    //     }
    //     // Update "idInStorageUnit" based on the "id" from the event.target
    //     // if(fieldName === 'unitName'){
    //     //     updatedForms[formIndex]['idInStorageUnit'] = event.target.options[event.target.selectedIndex].getAttribute("tome");
    //     // }
    //
    //     setData(updatedForms);
    // };

    // const handleSubmit = (event) => {
    //     let dataToSend = {
    //         method: "deleteOne",
    //         id: item.id
    //     }
    //     axios.post(`admin/api/products`, dataToSend)
    //         .then(response => {
    //             console.log(response.data);
    //             setData(response.data)
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //         })
    // };
    console.log(item);
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
                                    <Button variant="outline-dark" className="adminFont">x</Button>
                                    <Form.Control
                                        type="number"
                                        placeholder="x"
                                        value={item.fullOrderProduct.newField2}
                                        className="adminFontTable"
                                        // onChange={(event) => handleProductInCashChange(index, 'newField2', event)}
                                    />
                                </Form.Group>
                                <Form.Group className="d-flex">
                                    <Button variant="outline-dark" className="adminFont">y</Button>
                                    <Form.Control
                                        type="number"
                                        placeholder="y"
                                        value={item.fullOrderProduct.newField3}
                                        className="adminFontTable"
                                        // onChange={(event) => handleProductInCashChange(index, 'newField3', event)}
                                    />
                                </Form.Group>
                            </div>
                        ) : (
                            <div className="d-flex">
                                <Form.Group className="d-flex">
                                    <Button variant="outline-dark" disabled className="adminFont">x:</Button>
                                    <Button
                                        variant="outline-dark"
                                        className="adminFontTable"
                                        disabled
                                    >{item.fullOrderProduct.newField2}</Button>
                                </Form.Group>
                                <Form.Group className="d-flex">
                                    <Button variant="outline-dark" disabled className="adminFont">y:</Button>
                                    <Button
                                        variant="outline-dark"
                                        className="adminFontTable"
                                        disabled
                                    >{item.fullOrderProduct.newField3}</Button>
                                </Form.Group>
                            </div>
                        )}
                        {/*<div>Ціна {item.priceForThis} за шт., за все: {item.priceForThis * item.amountListForOne}</div>*/}

                        {/*<div>влізе на лист а3: {item.amountCanPushToOneList}шт.</div>*/}
                        {/*<div>Буде витрачено листів а3: {item.amountListForOne}шт.</div>*/}

                        {/*x={item.newField2}*/}
                        {/*y={item.newField3}*/}
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
                                {/*<Form.Control*/}
                                {/*    type="text"*/}
                                {/*    placeholder="x"*/}
                                {/*    value={unitItem.newField2}*/}
                                {/*    className="adminFontTable"*/}
                                {/*    disabled*/}
                                {/*/>*/}
                                {/*<Form.Control*/}
                                {/*    type="text"*/}
                                {/*    placeholder="y"*/}
                                {/*    value={unitItem.newField3}*/}
                                {/*    className="adminFontTable"*/}
                                {/*    disabled*/}
                                {/*/>*/}
                            </InputGroup>
                            {/*<p>*/}
                            {/*    <div className="adminFontTable">Ціна за це: {unitItem.priceForThis}</div>*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*    <div className="adminFontTable">за одиницю цієї хні: {unitItem.priceForThis / unitItem.quantity}</div>*/}
                            {/*</p>*/}
                        </div>
                    ))}
                </Card.Text>
                {/*<Button variant="danger" onClick={handleShow}  className="adminFont">Видалити</Button>*/}
            </Card.Body>


            {/*<Modal show={show} onHide={handleClose}>*/}
            {/*    <Modal.Header closeButton>*/}
            {/*        <Modal.Title>Видалення</Modal.Title>*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body>Видалити {item.name}?</Modal.Body>*/}
            {/*    <Modal.Footer>*/}
            {/*        <Button variant="secondary" onClick={handleClose}>*/}
            {/*            Закрити*/}
            {/*        </Button>*/}
            {/*        <Button variant="danger" toclick={item.id} onClick={(event) => handleSubmit(event)}>*/}
            {/*            Видалити*/}
            {/*        </Button>*/}
            {/*    </Modal.Footer>*/}
            {/*</Modal>*/}
        </Card>
    );
}

export default OneProductInOrders;