import React, {useEffect, useState} from "react";
import axios from "axios";
import './CrmCash.css';
import Form from "react-bootstrap/Form";
import NewChartMy2 from "../../../NewChartMy2";
import Loader from "../../../calc/Loader";
import CardProduct from "../Products/CardProduct";
import SelectedProduct from "./products/SelectedProduct";
import Button from "react-bootstrap/Button";

const CrmCash = () => {
    const [price, setPrice] = useState(1);
    const [things, setThings] = useState([]);
    const [products, setProducts] = useState(null);
    const [selectedThings, setSelectedThings] = useState([]);
    const [summ, setSumm] = useState(0);

    const handleThingClick = (thing) => {
        // setThings(things.filter((t) => t !== thing));
        setSelectedThings([...selectedThings, thing]);
    };

    const handleThingClick2 = (thing) => {
      setSelectedThings(selectedThings.filter((t) => t !== thing));
      // setThings([...things, thing]);
    };

    useEffect(() => {
        let data = {
            name: "Склад",
            inPageCount: 99999,
            currentPage: 1,
        };
        axios.post(`admin/gettable`, data)
            .then(response => {
                console.log(response.data);
                setThings(response.data.rows)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);

    useEffect(() => {
        let dataToSend = {
            method: "getAll"
        }
        axios.post(`admin/api/products`, dataToSend)
            .then(response => {
                console.log(response.data);
                setProducts(response.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [things]);

    useEffect(() => {
        let dataToSend = {
            method: "calculate",
            selectedThings: selectedThings
        }
        axios.post(`api/pricing`, dataToSend)
            .then(response => {
                console.log(response.data);
                setSumm(response.data.summ)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [selectedThings]);

    return (
        <div className="d-flex justify-content-space-between">
            <div className="card">
                <div style={{width: '50.5vw'}}>склад
                    <div style={{width: '24.5vw', height: '30vh', overflow: 'auto', border: '1px solid #ccc'}}
                         className="m-3">
                        <div style={{padding: '10px'}}>
                            {things.map((thing, index) => (
                                <p key={index} onClick={() => handleThingClick(thing)} className="thing">
                                    {thing.name}
                                </p>
                            ))}
                        </div>
                    </div>
                    продукти
                    {products === null ? (
                        <div style={{width: '24.5vw', height: '30vh', overflow: 'auto', border: '1px solid #ccc'}}
                             className="m-3">
                            <div style={{padding: '10px'}}>
                                <Loader/>
                            </div>
                        </div>
                    ) : (
                        <div style={{width: '24.5vw', height: '30vh', overflow: 'auto', border: '1px solid #ccc'}}
                             className="m-3">
                            <div style={{padding: '10px'}}>
                                {products.rows.map((thing, index) => (
                                    <p key={index} onClick={() => handleThingClick(thing)} className="thing">
                                        {thing.name}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {/*{things.map((thing, index) => (*/}
                {/*    <p key={index} onClick={() => handleThingClick(thing)} className="thing">*/}
                {/*        {thing.name}*/}
                {/*    </p>*/}
                {/*))}*/}
            </div>
            <div className="card" style={{width: '40.5vw'}}>
                {selectedThings.map((thing, index) => (
                    <div key={index} className="d-flex thing">
                        {thing.productunits ? (
                            <div>
                                <SelectedProduct key={thing.id} name={"Продукти"} data={products} setData={setProducts}
                                                 item={thing}/>
                                <Button variant="danger" onClick={() => handleThingClick2(thing)}
                                        className="adminFont">Видалити</Button>
                                <Form.Control
                                    type="number"
                                    placeholder={1}
                                    min={1}
                                    // value={productName}
                                    className=""
                                    // onChange={(event) => setProductName(event.target.value)}
                                />
                            </div>
                        ) : (
                            <div>
                                <p className="">{thing.name}</p>
                                <Button variant="danger" onClick={() => handleThingClick2(thing)}
                                        className="adminFont">Видалити</Button>
                                <Form.Control
                                    type="number"
                                    placeholder={1}
                                    min={1}
                                    // value={productName}
                                    className=""
                                    // onChange={(event) => setProductName(event.target.value)}
                                />
                            </div>
                        )}
                    </div>
                ))}
                <div>
                    <Button variant="light" disabled className="adminFont">Сумма</Button>
                    <Button variant="light" disabled className="adminFont">{summ}</Button>
                </div>
            </div>
        </div>
    );
};

export default CrmCash;