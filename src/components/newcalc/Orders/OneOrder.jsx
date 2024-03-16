import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import CrmHeader from "../../admin/crm/CrmHeader";
import {Table} from "react-bootstrap";
import {useParams} from "react-router-dom";
import Loader from "../../calc/Loader";
import Desktop from "../../admin/crm/Desktop/Desktop";
import SelectedProduct from "../../admin/crm/CrmCash/products/SelectedProduct";
import OneProductInOrders from "./OneProductInOrders";

const Orders = () => {
    const [data, setData] = useState(null);
    const [pageCount, setPageCount] = useState(null);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        let data = {
            name: "OneOrder",
            id:id
        }
        axios.post(`/api/order/get`, data)
            .then(response => {
                console.log(response.data);
                setData(response.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);

    if (data) {
        return (
            <div className="d-flex">
                <div className="w-50 border-1 border-light border">
                    <div className="m-1 p-1 btnm">id: {data.id}</div>
                    <div className="m-1 p-1 btnm">Хто робив: {data.executorId}</div>
                    <div className="m-1 p-1 btnm">На якого юзера: {data.userid}</div>
                    <div className="m-1 p-1 btnm">Ціна: {data.price}</div>
                    <div className="m-1 p-1 btnm">createdAt: {data.createdAt}</div>
                    <div className="m-1 p-1 btnm">updatedAt: {data.updatedAt}</div>
                </div>
                <div className="w-50 border-1 border-light border">
                    <div>
                        Складається з:
                    </div>
                    {data.orderunits.map((orderUnit, iter3) => (
                        <div className="d-flex m-1 border-1 border-danger border" key={iter3}>
                            <div className="p-1 m-1 border-1 border-dark border">id: {orderUnit.id}.</div>
                            <div className="p-1 m-1 border-1 border-dark border">Назва: {orderUnit.unitName}.</div>
                            {orderUnit.fullOrderProduct &&
                                <div>
                                    <OneProductInOrders item={orderUnit}/>
                                </div>
                            }
                            <div className="p-1 m-1 border-1 border-dark border">Кількість {orderUnit.quantity} шт.</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <h1 className="d-flex justify-content-center align-items-center">
            <Loader/>
        </h1>
    )
};

export default Orders;