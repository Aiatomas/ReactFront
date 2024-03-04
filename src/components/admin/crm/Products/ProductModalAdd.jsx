import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import {Button, Col, Modal} from "react-bootstrap";
import axios from "axios";
import SearchForm from "../SearchForm";
import CardProduct from "./CardProduct";

function ProductModalAdd({namem, data, setData, data1}) {
    const [show, setShow] = useState(false);
    const [forms, setForms] = useState([]);
    const [productName, setProductName] = useState("");
    const [load, setLoad] = useState(false);
    console.log(data1);
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);

    // Додати нову форму з двома текстовими полями та одним полем типу "checkbox"
    const addForm = () => {
        setForms([...forms, { unitName: '', unitQuantity: '', idInStorageUnit: '' }]);
    };

    // Оновити значення текстових полів
    const handleTextChange = (formIndex, fieldName, event) => {
        const updatedForms = [...forms];
        updatedForms[formIndex][fieldName] = event.target.value;
        // Update "idInStorageUnit" based on the "id" from the event.target
        if(fieldName === 'unitName'){
            updatedForms[formIndex]['idInStorageUnit'] = event.target.options[event.target.selectedIndex].getAttribute("tome");
        }

        setForms(updatedForms);
    };

    // Delete form
    const deleteForm = (formIndex) => {
        const updatedForms = [...forms];
        updatedForms.splice(formIndex, 1);
        setForms(updatedForms);
    };

    // Оновити значення поля типу "checkbox"
    const handleCheckboxChange = (formIndex, event) => {
        const updatedForms = [...forms];
        updatedForms[formIndex].checkbox = event.target.checked;
        setForms(updatedForms);
    };

    // Відправити дані форми
    const handleSubmit = (event) => {
        event.preventDefault();
        let dataToSend = {
            method: "addNew",
            productName: productName,
            productUnits: forms
        }
        console.log(dataToSend);

        setLoad(true)
        axios.post(`admin/api/products`, dataToSend)
            .then(response => {
                console.log(response.data);
                setData(response.data)
                setLoad(false)
                handleClose()
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    return (
        <div>
            <Card onClick={handleShow} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="adminFont">+</Card.Title>
                </Card.Body>
            </Card>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Новий товар</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <Form.Control
                            type="text"
                            placeholder="Назва товару"
                            value={productName}
                            className=""
                            onChange={(event) => setProductName(event.target.value)}
                        />
                        <div>
                            Зіставні елементи:
                        </div>
                        <Form onSubmit={handleSubmit}>
                            {forms.map((form, formIndex) => (
                                <div key={formIndex} className="adminFont border-1">
                                    {formIndex + 1}
                                    <Form.Group>
                                        <Form.Label className="adminFont">Кількість</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="0"
                                            min={1}
                                            value={form.unitQuantity}
                                            className="adminFont"
                                            onChange={(event) => handleTextChange(formIndex, 'unitQuantity', event)}
                                        />
                                        {/*<SearchForm*/}
                                        {/*    props={["1", "2", "3", "11", "112"]}*/}
                                        {/*    value={form.unitName}*/}
                                        {/*    onChangeFunc={handleTextChange}*/}
                                        {/*    handledField={'unitName'}*/}
                                        {/*    formIndex={formIndex}*/}
                                        {/*/>*/}
                                        <Form.Text className="adminFont text-muted">
                                            Введіть Кількість
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="adminFont">Тип</Form.Label>
                                        {/*<Form.Control*/}
                                        {/*    type="text"*/}
                                        {/*    placeholder="Тип"*/}
                                        {/*    value={form.text2}*/}
                                        {/*    className="adminFont"*/}
                                        {/*    onChange={(event) => handleTextChange(formIndex, 'text2', event)}*/}
                                        <Form.Select
                                            value={form.unitName}
                                            className="adminFont"
                                            onChange={(event) => handleTextChange(formIndex, 'unitName', event)}
                                        >
                                            {/*<option className="adminFont">Тип</option>*/}
                                            {/*<option className="adminFont" value="Бумага">Бумага</option>*/}
                                            {/*<option className="adminFont" value="Друк">Друк</option>*/}
                                            {/*<option className="adminFont" value="Перепліт">Перепліт</option>*/}
                                            {/*<option className="adminFont" value="Ламінація">Ламінація</option>*/}
                                            {data1.rows.map((item, idx) => (
                                                <option className="adminFont" tome={item.id} key={item.id}>{item.name}</option>
                                            ))}
                                        </Form.Select>
                                        <Form.Text className="adminFont text-muted">
                                            Тип матеріала/роботи що буде витрачено/зроблено при виготовленні
                                        </Form.Text>
                                    </Form.Group>
                                    {/*<Form.Group>*/}
                                    {/*    <Form.Label className="adminFont">Email address</Form.Label>*/}
                                    {/*    <Form.Check*/}
                                    {/*        type="checkbox"*/}
                                    {/*        checked={form.checkbox}*/}
                                    {/*        className="adminFont"*/}
                                    {/*        onChange={(event) => handleCheckboxChange(formIndex, event)}*/}
                                    {/*    />*/}
                                    {/*    <Form.Text className="adminFont text-muted">*/}
                                    {/*        We'll never share your email with anyone else.*/}
                                    {/*    </Form.Text>*/}
                                    {/*</Form.Group>*/}
                                    <div>
                                        <Button type="button" className="adminFont" variant="outline-danger"
                                                onClick={() => deleteForm(formIndex)}>Видалити</Button>
                                    </div>
                                </div>
                            ))}
                        </Form>
                        <Button type="button" className="adminFont" variant="outline-success" onClick={addForm}>
                            Додати елемент
                        </Button>
                    </div>
                    <div>
                        <Button type="submit" className="adminFont" variant="success" onClick={(event) => handleSubmit(event)}>Відправити</Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default ProductModalAdd;