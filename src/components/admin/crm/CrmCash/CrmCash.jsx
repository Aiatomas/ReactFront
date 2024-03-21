import React, {useEffect, useState} from "react";
import axios from "axios";
import './CrmCash.css';
import Form from "react-bootstrap/Form";
import NewChartMy2 from "../../../NewChartMy2";
import Loader from "../../../calc/Loader";
import CardProduct from "../Products/CardProduct";
import SelectedProduct from "./products/SelectedProduct";
import Button from "react-bootstrap/Button";
import OverlayGetResponseForAnswer from "../../../OverlayGetResponseForAnswer";
import {Link} from "react-router-dom";
import {Col, Modal, Row} from "react-bootstrap";
import ProductModalAdd from "../Products/ProductModalAdd";
import {MDBContainer} from "mdb-react-ui-kit";
import OneProductInOrders from "../../../newcalc/Orders/OneProductInOrders";

const CrmCash = () => {
    const [price, setPrice] = useState(1);
    const [things, setThings] = useState([]);
    const [products, setProducts] = useState(null);
    const [selectedThings, setSelectedThings] = useState([]);
    const [selectedThings2, setSelectedThings2] = useState([]);
    const [summ, setSumm] = useState(0);
    const [isLoad, setIsLoad] = useState(false);
    const [thisOrder, setThisOrder] = useState({
        id: 0
    });
    const [typeSelect, setTypeSelect] = useState("");
    const [newData, setNewData] = useState("");
    const [orders, setOrders] = useState(null);
    const [uniqueTypes, setUniqueTypes] = useState([]);

    const handleThingClick = (thing) => {
        // setThings(things.filter((t) => t !== thing));
        setSelectedThings([...selectedThings, {...thing, amount: 1}]);
    };

    const handleThingClickDelete2 = (thing) => {
        setSelectedThings(selectedThings2.filter((t) => t !== thing));
        // setThings([...things, thing]);
    };

    const handleAmountChange = (selectedThingIndex, fieldName, event) => {
        const updatedSelectedThings = [...selectedThings];
        updatedSelectedThings[selectedThingIndex][fieldName] = event.target.value;
        setSelectedThings(updatedSelectedThings);
    };

    // console.log(things);

    // useEffect(() => {
    //     let dataToSend = {
    //         data: selectedThings,
    //         id: id
    //     }
    //     axios.post(`/api/order/create`, dataToSend)
    //         .then(response => {
    //             // console.log(response.data);
    //             setThisOrder(response.data)
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //         })
    // }, [thisOrder])

    const handleSaveOrder = (event, valueName) => {
        let dataToSend = {
            data: selectedThings,
            id: false,
            tablePosition: valueName,
            value: event.target.value
        }
        axios.post(`/api/order/create`, dataToSend)
            .then(response => {
                console.log(response.data);
                setThisOrder(response.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    useEffect(() => {
        let data = {
            name: "Склад",
            inPageCount: 99999,
            currentPage: 1,
            search: typeSelect
        };
        axios.post(`admin/gettable`, data)
            .then(response => {
                // console.log(response.data);

                let uniqueItems = {}
                response.data.rows.forEach(item => {
                    if (!uniqueItems[item.type]) {
                        uniqueItems[item.type] = {...item};
                    }
                })
                // console.log(uniqueItems);
                let uniqueTypess = Object.values(uniqueItems);
                setThings(response.data)
                if(uniqueTypes.length === 0){
                    setUniqueTypes(uniqueTypess)
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [typeSelect]);
    // console.log(uniqueTypes);

    useEffect(() => {
        let dataToSend = {
            method: "getAll"
        }
        axios.post(`admin/api/products`, dataToSend)
            .then(response => {
                // console.log(response.data);
                setProducts(response.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);

    useEffect(() => {
        setIsLoad(true)
        if (selectedThings) {
            axios.get(`getUserInfo`)
                .then(response => {
                    // console.log(`this is response.data pure`);
                    // console.log(response.data);
                    setSumm(response.data.calcResponse[0].price)
                    setIsLoad(false)
                    setSelectedThings2(response.data.newDataWithPrices2)
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
    }, [selectedThings]);

    useEffect(() => {
        setIsLoad(true)
        if (selectedThings) {
            let dataToSend = {
                method: "calculate",
                data: selectedThings
            }
            axios.post(`api/pricing`, dataToSend)
                .then(response => {
                    // console.log(`this is response.data pure`);
                    console.log(response.data);
                    setSumm(response.data.calcResponse[0].price)
                    setIsLoad(false)
                    setSelectedThings2(response.data.newDataWithPrices2)
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
    }, [selectedThings]);

    useEffect(() => {
        let data = {
            name: "Orders",
            inPageCount: 99999,
            currentPage: 1,
        }
        axios.post(`/api/order/get`, data)
            .then(response => {
                console.log(response.data);
                setOrders(response.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);

    const handleSelectOneOrder = (event, id) => {
        setIsLoad(true)
        let data = {
            name: "OneOrder",
            id: id
        }
        axios.post(`/api/order/get`, data)
            .then(response => {
                console.log(response.data);
                setThisOrder(response.data)
                setSelectedThings(response.data)
                setIsLoad(false)
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    // console.log(selectedThings2);
    return (
        <div className="d-flex justify-content-space-between flex-column">

            <div className="d-flex flex-column">
                <Form.Control
                    placeholder={"searchForm"}
                    aria-label={"searchForm"}
                    aria-describedby="searchForm"
                    type={"String"}
                    value={typeSelect}
                    className="adminFontTable"
                    onChange={(event) => setTypeSelect(event.target.value)}
                />
                {/*{orders && (*/}
                {/*    <div>*/}
                {/*        {orders.rows.map((metaItem, iter2) => (*/}
                {/*            <div>*/}
                {/*                {thisOrder && (*/}
                {/*                    <div key={metaItem + iter2}*/}
                {/*                         className={metaItem.id === thisOrder.id ? 'adminFontTable btn btn-outline-warning' : 'adminFontTable btn btn-light'}*/}
                {/*                         onClick={(event) => handleSelectOneOrder(event, metaItem.id)}>*/}
                {/*                        {metaItem.id}*/}
                {/*                    </div>*/}
                {/*                )}*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*)}*/}

            </div>
            <div className="d-flex justify-content-space-between">
                <div className="card">
                    <div style={{width: '50.5vw'}}>
                        {products === null ? (
                            <div style={{width: '47.5vw', height: '47vh', overflow: 'auto', border: '1px solid #ccc'}}
                                 className="m-3">
                                <div className="text-center">продукти</div>
                                <div style={{padding: '10px'}}>
                                    <Loader/>
                                </div>
                            </div>
                        ) : (
                            <div style={{width: '47.5vw', height: '47vh', overflow: 'auto', border: '1px solid #ccc'}}
                                 className="m-3">
                                <div className="text-center">продукти</div>
                                <MDBContainer fluid className="">
                                    <Row xs={1} md={4} className="g-4">
                                        {products.rows.map((thing, index) => (
                                            <Col key={index} onClick={() => handleThingClick(thing)}
                                                 className="thing adminFont btn btn-light">
                                                {thing.name}
                                            </Col>
                                        ))}
                                    </Row>
                                </MDBContainer>
                            </div>
                        )}
                        <div style={{width: '47.5vw', height: '20vh', overflow: 'auto', border: '1px solid #ccc'}}
                             className="m-3">
                            <div className="text-center">склад</div>
                            <div style={{padding: '10px'}}>
                                {things.length !== 0 ? (
                                    // <div>
                                    //     {things.rows.map((thing, index) => (
                                    //         <div key={index} onClick={() => handleThingClick(thing)} className="thing adminFont">
                                    //             {thing.name}
                                    //         </div>
                                    //     ))}
                                    // </div>
                                    <MDBContainer fluid className="">
                                        <Row xs={1} md={4} className="">
                                            {things.rows.map((thing, index) => (
                                                <Col key={index} onClick={() => handleThingClick(thing)} className="thing adminFont btn btn-light text-center">
                                                    {thing.name}
                                                </Col>
                                            ))}
                                        </Row>
                                    </MDBContainer>
                                ) : (
                                    <div>NETU</div>
                                )}
                            </div>
                        </div>
                        <div>
                            {uniqueTypes.map((thing, index) => (
                                <Button type="button" key={index} onClick={(event) => setTypeSelect(thing.type)}
                                        className="thing adminFont btn btn-light">
                                    {thing.type}
                                </Button>
                            ))}
                        </div>
                    </div>
                    {/*{things.map((thing, index) => (*/}
                    {/*    <p key={index} onClick={() => handleThingClick(thing)} className="thing">*/}
                    {/*        {thing.name}*/}
                    {/*    </p>*/}
                    {/*))}*/}
                </div>
                <div className="card d-flex flex-column" style={{width: '40.5vw'}}>
                    {selectedThings2.length !== 0 ? (
                        <div>
                            {selectedThings2.map((thing, index) => (
                                <div key={index} className="d-flex">
                                    {thing.productunits ? (
                                        <div className="d-flex flex-column m-1 p-1" style={{width: '37.7vw'}}>
                                            {/*<SelectedProduct key={thing.id} name={"Продукти"} data={selectedThings}*/}
                                            {/*                 setData={setSelectedThings}*/}
                                            {/*                 item={thing} index={index} isLoad={isLoad}*/}
                                            {/*/>*/}
                                            <div className="d-flex">
                                                <div className="adminFontTable p-1 m-1 bg-light">id: {thing.id}.</div>
                                                <div
                                                    className="adminFontTable p-1 m-1 bg-light">Назва: {thing.name}.
                                                </div>
                                                <div
                                                    className="adminFontTable p-1 m-1 bg-light">Кількість {thing.amount} шт.
                                                </div>
                                                <div
                                                    className="adminFontTable p-1 m-1 bg-warning">Коштує(за
                                                    одиницю): {thing.priceForThis}грн.
                                                </div>
                                                <div
                                                    className="adminFontTable p-1 m-1 bg-warning">Коштує
                                                    ({thing.amount}шт): {thing.priceForThis*thing.amount}грн.
                                                </div>
                                            </div>
                                            <OneProductInOrders item={thing} cash={true}/>
                                            <Form.Control
                                                type="number"
                                                placeholder={1}
                                                min={1}
                                                value={thing.amount}
                                                className=""
                                                onChange={(event) => handleAmountChange(index, 'amount', event)}
                                            />
                                            <Button variant="danger" onClick={() => handleThingClickDelete2(thing)}
                                                    className="adminFont">Видалити</Button>
                                        </div>
                                    ) : (
                                        <div className="d-flex flex-column m-1 border-light p-1" style={{width: '37.7vw'}}>
                                            {/*<p className="adminFont">{thing.name}</p>*/}
                                            {/*<p className="adminFont">Ціна: {thing.priceForThis}</p>*/}
                                            {/*<p>*/}
                                            {/*    за одиницю цієї хні: {thing.priceForThis / thing.amount}*/}
                                            {/*</p>*/}
                                            {/*<OneProductInOrders item={thing} cash={true}/>*/}
                                            <div className="d-flex">
                                                <div className="adminFontTable p-1 m-1 bg-light">id: {thing.id}.</div>
                                                <div
                                                    className="adminFontTable p-1 m-1 bg-light">Назва: {thing.name}.
                                                </div>
                                                <div
                                                    className="adminFontTable p-1 m-1 bg-light">Кількість {thing.amount} шт.
                                                </div>
                                                <div
                                                    className="adminFontTable p-1 m-1 bg-warning">Коштує(за
                                                    одиницю): {thing.priceForOneThis}грн.
                                                </div>
                                                <div
                                                    className="adminFontTable p-1 m-1 bg-warning">Коштує ({thing.amount}шт): {thing.priceForThis}грн.
                                                </div>
                                            </div>
                                            <Form.Control
                                                type="number"
                                                placeholder={1}
                                                min={1}
                                                value={thing.amount}
                                                className=""
                                                onChange={(event) => handleAmountChange(index, 'amount', event)}
                                            />
                                            <Button variant="danger" onClick={() => handleThingClickDelete2(thing)}
                                                    className="adminFont">Видалити</Button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <h5 className="text-center text-black-50">Тут ще нічого..</h5>
                        </div>
                    )}
                    <div>
                        <Button variant="light" disabled className="adminFont">Сумма</Button>
                        <Button variant="light" disabled className="adminFont">{summ}</Button>
                    </div>
                    <div style={{marginTop: 'auto'}}>
                        <div>
                            <div className="d-flex">
                                <div className="d-flex flex-column">
                                    <p className="adminFont">Предоплата</p>

                                    {thisOrder ? (
                                        <Form.Control type="number"
                                                      variant="outline-warning"
                                                      value={thisOrder.prepayment}
                                                      className="adminFont btn btn-outline-warning"
                                                      onChange={handleSaveOrder}
                                                      // onChange={handleSaveOrder}
                                        />
                                    ) : (
                                        <Form.Control variant="outline-warning" onChange={handleSaveOrder} value={0} className="adminFont btn btn-outline-warning"/>
                                    )}

                                    {/*<Form.Control variant="outline-warning" value={thisOrder.prepayment} className="adminFont btn btn-outline-warning"/>*/}
                                </div>
                                <div className="d-flex flex-column">
                                    <p className="adminFont">Знижка</p>
                                    <Button variant="outline-warning" disabled className="adminFont">0</Button>
                                </div>
                                <div className="d-flex flex-column">
                                    <p className="adminFont">Всього</p>
                                    <Button variant="outline-warning" disabled className="adminFont">0</Button>
                                </div>

                                <div className="d-flex flex-column">
                                    <p className="adminFont text-center">Оплата</p>
                                    <div className="d-flex">
                                        <Button variant="outline-primary" className="adminFont">Готівка</Button>
                                        <Button variant="outline-primary" className="adminFont">Безготівка</Button>
                                    </div>
                                </div>
                                {isLoad ? (
                                    <Button variant="light" disabled className="adminFont"><Loader/></Button>
                                ) : (
                                    <div>
                                        <Button variant="light" disabled className="adminFont">{summ}</Button>
                                    </div>
                                )}
                                {thisOrder ? (
                                    <div>
                                        {/*<Button variant="light" disabled className="adminFont">Ви успішно зберегли*/}
                                        {/*    замовлення та*/}
                                        {/*    отримали відповідь БД про унікальний номер йому було призначено.</Button>*/}
                                        <Button variant="light" disabled className="adminFont">Номер
                                            замовлення: {thisOrder.id}</Button>
                                    </div>
                                ) : (
                                    <div>
                                        {/*<Button variant="light" disabled className="adminFont">Нажимаючи "Зберегти" ви*/}
                                        {/*    активуете*/}
                                        {/*    збереження заказу до БД та отримання відповіді БД який унікальний номер йому*/}
                                        {/*    було*/}
                                        {/*    призначено. Його буде видно після збереження.</Button>*/}
                                        <Button variant="light" className="adminFont"
                                                onClick={handleSaveOrder}>Зберегти</Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrmCash;