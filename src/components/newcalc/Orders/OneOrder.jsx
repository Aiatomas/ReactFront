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

const OneOrder = () => {
    const [data, setData] = useState(null);
    const [pageCount, setPageCount] = useState(null);
    const { id } = useParams();
    // console.log(id);

    useEffect(() => {
        let data = {
            name: "OneOrder",
            id:id
        }
        axios.post(`/api/order/get`, data)
            .then(response => {
                // console.log(response.data);
                setData(response.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);

    if (data) {
        return (
            <div className="d-flex">
                <div className="w-50 border-1 border-light border d-flex flex-column p-3">
                    <div className="text-center">
                        Дані:
                    </div>
                    <div className="m-1 p-1 btn btn-light">id: {data.id}</div>
                    <div className="m-1 p-1 btn btn-light">Хто робив: {data.executorId}</div>
                    <div className="m-1 p-1 btn btn-light">На якого юзера: {data.userid}</div>
                    <div className="m-1 p-1 btn btn-light">Ціна: {data.price}</div>
                    <div className="m-1 p-1 btn btn-light">createdAt: {data.createdAt}</div>
                    <div className="m-1 p-1 btn btn-light">updatedAt: {data.updatedAt}</div>
                </div>
                <div className="w-50 border-1 border-light border p-3">
                    <div className="text-center">
                        Складається з:
                    </div>
                    {data.orderunits.map((orderUnit, iter3) => (
                        <div className="btn btn-light d-flex m-1 border-light" key={iter3}>
                            <div className="adminFontTable p-1 m-1 bg-light">id: {orderUnit.id}.</div>
                            <div className="adminFontTable p-1 m-1 bg-light">Назва: {orderUnit.unitName}.</div>
                            {orderUnit.fullOrderProduct &&
                                <div className="adminFontTable">
                                    <OneProductInOrders item={orderUnit}/>
                                </div>
                            }
                            <div className="adminFontTable p-1 m-1 bg-light">Кількість {orderUnit.quantity} шт.</div>
                            <div className="adminFontTable p-1 m-1 bg-warning">Коштує: {orderUnit.newField2}грн.</div>
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

export default OneOrder;