import CardProduct from "./CardProduct";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Loader from "../../../calc/Loader";
import CrmHeader from "../CrmHeader";
import {MDBContainer} from "mdb-react-ui-kit";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProductModalAdd from "./ProductModalAdd";


function Products({name}) {
    const [data, setData] = useState(null);


    useEffect(() => {
        let dataToSend = {
            method: "getAll"
        }
        axios.post(`admin/api/products`, dataToSend)
            .then(response => {
                console.log(response.data);
                setData(response.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);

    if(data){
        return (
            <>
                <CrmHeader whoPick={name} data={data}/>
                <MDBContainer fluid className="">
                    <CardProduct name={name} data={data} setData={setData}/>
                    <CardProduct name={name} data={data} setData={setData}/>
                    <CardProduct name={name} data={data} setData={setData}/>
                    <CardProduct name={name} data={data} setData={setData}/>
                    <ProductModalAdd
                        namem={name}
                        data={data}
                        setData={setData}
                    />
                    {data.rows.map((item) => (
                        <CardProduct key={item.id} name={name} data={data} setData={setData} item={item}/>
                    ))}
                </MDBContainer>
            </>
        )
    }
    return (
        <h1 className="">
            <CrmHeader whoPick={name} data={{count: "(Завантаження)"}}/>
            <Loader/>
        </h1>
    );
}

export default Products;