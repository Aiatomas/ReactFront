import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";

function ModalStorageTable({namem, data, setData, inPageCount, setInPageCount, currentPage, setCurrentPage, pageCount, setPageCount}) {
    const [show, setShow] = useState(false);

    const [article, setArticle] = useState("");
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [units, setUnits] = useState("");
    const [cost, setCost] = useState(0);
    const [price1, setPrice1] = useState(0);
    const [price2, setPrice2] = useState(0);
    const [price3, setPrice3] = useState(0);
    const [price4, setPrice4] = useState(0);
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
        setPrice1(0)
        setPrice2(0)
        setPrice3(0)
        setPrice4(0)
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
            price1: price1,
            price2: price2,
            price3: price3,
            price4: price4,
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
                setPrice1(0)
                setPrice2(0)
                setPrice3(0)
                setPrice4(0)
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
            <Button className="adminButtonAdd" variant="danger" onClick={handleShow}>
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
                            placeholder="type"
                            aria-label="type"
                            aria-describedby="basic-addon1"
                            value={type}
                            onChange={(event) => setType(event.target.value)}
                        />
                        <InputGroup.Text id="basic-addon1">type</InputGroup.Text>
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
                            placeholder="Ціна(1-10)"
                            aria-label="Ціна(1-10)"
                            aria-describedby="basic-addon1"
                            type="number"
                            value={price1}
                            onChange={(event) => setPrice1(event.target.value)}
                        />
                        <InputGroup.Text id="basic-addon1">Ціна(1-10)</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Ціна(11-50)"
                            aria-label="Ціна(11-50)"
                            aria-describedby="basic-addon1"
                            type="number"
                            value={price2}
                            onChange={(event) => setPrice2(event.target.value)}
                        />
                        <InputGroup.Text id="basic-addon1">Ціна(11-50)</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Ціна(51-100)"
                            aria-label="Ціна(51-100)"
                            aria-describedby="basic-addon1"
                            type="number"
                            value={price3}
                            onChange={(event) => setPrice3(event.target.value)}
                        />
                        <InputGroup.Text id="basic-addon1">Ціна(51-100)</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Ціна(101-0)"
                            aria-label="Ціна(101-0)"
                            aria-describedby="basic-addon1"
                            type="number"
                            value={price4}
                            onChange={(event) => setPrice4(event.target.value)}
                        />
                        <InputGroup.Text id="basic-addon1">Ціна(101-0)</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="В наявності"
                            aria-label="В наявності"
                            aria-describedby="basic-addon1"
                            type="number"
                            value={amount}
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

export default ModalStorageTable;