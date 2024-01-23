import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import {Modal} from "react-bootstrap";

function ModalDeleteInStorage({namem, data, setData, inPageCount, setInPageCount, currentPage, setCurrentPage, pageCount, setPageCount,  item}) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        console.log(item);
        setShow(true);
    }

    let deleteThisRowF = (e) => {
        let data = {
            tableName: namem,
            id: parseInt(e.target.getAttribute("toclick")),
            inPageCount: inPageCount,
            currentPage: currentPage,
        }
        console.log(data);
        axios.post(`admin/deleteintable`, data)
            .then(response => {
                setData(response.data)
                setPageCount(Math.ceil(response.data.count / inPageCount))
                setShow(false);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <>
            <Button variant="outline-danger" className="adminFontTable" onClick={handleShow}>
                Видалити
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Видалення</Modal.Title>
                </Modal.Header>
                <Modal.Body>Видалити {item.type} {item.name}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрити
                    </Button>
                    <Button variant="danger" toclick={item.id} onClick={deleteThisRowF}>
                        Видалити
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteInStorage;