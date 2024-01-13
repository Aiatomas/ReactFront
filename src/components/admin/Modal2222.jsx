import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";

function Modal2222({namem, data, setData, inPageCount, setInPageCount, currentPage, setCurrentPage, pageCount, setPageCount}) {
    const [show, setShow] = useState(false);

    const [article, setArticle] = useState("");
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [units, setUnits] = useState("");
    const [cost, setCost] = useState(0);
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const [amountAll, setAmountAll] = useState(0);
    const [priceList, setPriceList] = useState("");
    const [purveyor, setPurveyor] = useState("");

    const handleClose = () => {
        setShow(false);
        setArticle("")
        setType("")
        setName("")
        setUnits("")
        setCost(0)
        setPrice(0)
        setAmount(0)
        setAmountAll(0)
        setPriceList(0)
        setPurveyor("")
    }
    const handleShow = () => setShow(true);

    let saveAll = (event) => {
        let data = {
            tableName: namem,
            article: article,
            type: type,
            name: name,
            units: units,
            cost: cost,
            price: price,
            amount: amount,
            amountAll: amountAll,
            priceList: priceList,
            purveyor: purveyor,
            inPageCount: inPageCount,
            currentPage: currentPage,
        }
        console.log(data);
        axios.post(`admin/addtotable`, data)
            .then(response => {
                console.log(response.data);
                setData(response.data)
                setPageCount(Math.ceil(response.data.count / inPageCount))

                setArticle("")
                setType("")
                setName("")
                setUnits("")
                setCost(0)
                setPrice(0)
                setAmount(0)
                setAmountAll(0)
                setPurveyor("")
                handleClose()
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <>
            <Button className="" style={{ borderRadius: '2vw' }} variant="outline-danger" onClick={handleShow}>
                +
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Новий щось</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Артикул"
                            aria-label="Артикул"
                            aria-describedby="basic-addon1"
                            value={article}
                            onChange={(event) => setArticle(event.target.value)}
                        />
                        <InputGroup.Text id="basic-addon1">Артикул</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Назва"
                            aria-label="Назва"
                            aria-describedby="basic-addon1"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <InputGroup.Text id="basic-addon1">Назва</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Од. виміру"
                            aria-label="Од. виміру"
                            aria-describedby="basic-addon1"
                            value={units}
                            onChange={(event) => setUnits(event.target.value)}
                        />
                        <InputGroup.Text id="basic-addon1">Од. виміру</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Собівартість"
                            aria-label="Собівартість"
                            aria-describedby="basic-addon1"
                            type="number"
                            value={cost}
                            onChange={(event) => setCost(event.target.value)}
                        />
                        <InputGroup.Text id="basic-addon1">Собівартість</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Ціна"
                            aria-label="Ціна"
                            aria-describedby="basic-addon1"
                            type="number"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                        <InputGroup.Text id="basic-addon1">Ціна</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="В наявності"
                            aria-label="В наявності"
                            aria-describedby="basic-addon1"
                            type="number"
                            value={amountAll}
                            onChange={(event) => setAmount(event.target.value)}
                        />
                        <InputGroup.Text id="basic-addon1">В наявності</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Всього"
                            aria-label="Всього"
                            aria-describedby="basic-addon1"
                            type="number"
                            value={amountAll}
                            onChange={(event) => setAmountAll(event.target.value)}
                        />
                        <InputGroup.Text id="basic-addon1">Всього</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Прайс-лист"
                            aria-label="Прайс-лист"
                            aria-describedby="basic-addon1"
                            value={priceList}
                            onChange={(event) => setPriceList(event.target.value)}
                        />
                        <InputGroup.Text id="basic-addon1">Прайс-лист</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Постачальник"
                            aria-label="Постачальник"
                            aria-describedby="basic-addon1"
                            value={purveyor}
                            onChange={(event) => setPurveyor(event.target.value)}
                        />
                        <InputGroup.Text id="basic-addon1">Постачальник</InputGroup.Text>
                    </InputGroup>


                    <Button onClick={saveAll} variant="primary" type="submit">
                        Додати
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Modal2222;