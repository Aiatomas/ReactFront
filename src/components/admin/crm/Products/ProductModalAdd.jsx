import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import Card from "react-bootstrap/Card";

function ModalStorageTable({namem, data, setData}) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const [fields, setFields] = useState([{ value: '' }]);

    // Додати нове поле до стану форми
    const addField = () => {
        setFields([...fields, { value: '' }]);
    };
    const removeField = (index) => {
        const updatedFields = [...fields];
        updatedFields.splice(index, 1);
        setFields(updatedFields);
    };

    // Оновити значення поля в стані форми
    const handleChange = (index, event) => {
        const updatedFields = [...fields];
        updatedFields[index].value = event.target.value;
        setFields(updatedFields);
    };

    // Відправити дані форми
    const handleSubmit = (event) => {
        event.preventDefault();
        // Обробка введених даних
        console.log(fields);
    };

    let saveAll = (event) => {
        let data = {
            tableName: namem
        }
        console.log(data);
        axios.post(`admin/addtotable`, data)
            .then(response => {
                console.log(response.data);
                setData(response.data)
                handleClose()
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <>
            <Card onClick={handleShow} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>+</Card.Title>
                </Card.Body>
            </Card>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Новий щось</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form onSubmit={handleSubmit}>
                        {fields.map((field, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    value={field.value}
                                    onChange={(event) => handleChange(index, event)}
                                />
                                <button type="button" onClick={() => removeField(index)}>
                                    Видалити
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={addField}>
                        Додати поле
                        </button>
                        <button type="submit">Зберегти</button>
                    </form>


                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default ModalStorageTable;