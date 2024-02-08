import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Accordion, Col, Row} from "react-bootstrap";
import {MDBContainer} from "mdb-react-ui-kit";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {View} from "../calc/onefile/formatdrukview/View";

const Orders = () => {
    const dispatch = useDispatch();
    const prices2 = useSelector(state => state.prices.prices2);

    return (
        <>
            Тут буде список замовлень кліента
        </>
    )
};

export default Orders;