import CardProduct from "./CardProduct";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Loader from "../../../calc/Loader";
import CrmHeader from "../CrmHeader";
import {MDBContainer} from "mdb-react-ui-kit";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function Products({name}) {
    const [data, setData] = useState(null);


    useEffect(() => {
        let data = {
            method: "getAll"
        }
        axios.post(`admin/api/products`, data)
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
                <MDBContainer fluid >
                    <CardProduct name={name} data={data} setData={setData()}/>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>+</Card.Title>
                        </Card.Body>
                    </Card>
                </MDBContainer>
            </>
        )
    }
    return (
        <h1 className="d-flex justify-content-center align-items-center">
            <Loader/>
        </h1>
    );
}

export default Products;