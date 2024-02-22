import {MDBContainer, MDBNavbarItem} from "mdb-react-ui-kit";
import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import React, {useEffect, useState} from "react";
import ModalSize from "../modals/ModalSize";
import ModalMaterial from "../modals/ModalMaterial";
import ModalColor from "../modals/ModalColor";
import ModalLamination from "../modals/ModalLamination";
import {View2} from "../View2";
import {useSelector} from "react-redux";
import {DownloadImgAction} from "../../../actions/fileAction";
import axios from "axios";
import {Link} from "react-router-dom";
import Loader from "../../calc/Loader";
import ChartComponent from "../../admin/crm/ChartComponent";
import NewChartMy from "../../NewChartMy";
import NewChartMy2 from "../../NewChartMy2";

const Sheet = () => {
    const [show, setShow] = useState(false);
    const [size, setSize] = useState({
        x: 297,
        y: 420
    });
    const [material, setMaterial] = useState({
        type: "",
        material: ""
    });
    const [color, setColor] = useState({
        sides: "без друку",
        one: "",
        two: "",
    });
    const [lamination, setLamination] = useState([null, null, null]);
    const [prices, setPrices] = useState(null);
    const [pricesThis, setPricesThis] = useState(null);

    useEffect(() => {
        axios.get(`/getpricesNew`)
            .then(response => {
                console.log(response.data);
                setPrices(response.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);

    useEffect(() => {
        let dataToSend = {
            size: size,
            material: material,
            color: color,
            lamination: lamination
        }
        axios.post(`/api/pricing`, dataToSend)
            .then(response => {
                console.log(response.data);
                setPricesThis(response.data)
            })
            .catch(error => {
                console.log(error.message);
            })

        // const selectedPaper = prices[1].variants.find(material => {
        //     // console.log(material[0]);  // Output the object processed in the find method
        //     return material[0] === material.material
        // });
        // console.log(selectedPaper);
        // console.log(material.material);
    }, [size, material, color, lamination]);

    if(prices){
        return (
            <div className="d-flex" >
                <MDBContainer fluid style={{width: '50vw'}}>
                    <Row xs={1} md={5} className="g-2">
                        <Col>
                            <ModalSize size={size} setSize={setSize} prices={prices}/>
                        </Col>
                        <Col>
                            <ModalMaterial material={material} setMaterial={setMaterial} prices={prices}/>
                        </Col>
                        <Col>
                            <ModalColor color={color} setColor={setColor} prices={prices}/>
                        </Col>
                        <Col>
                            <ModalLamination lamination={lamination} setLamination={setLamination} prices={prices}/>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="adminFont">Інші послуги</Card.Title>
                                    <Card.Text className="adminFont">

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="adminFont">Макет</Card.Title>
                                    <Card.Text className="adminFont">

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="adminFont">ТЕМА ДОЛЖЕН ПОЯСНИТь</Card.Title>
                                    <Card.Text className="adminFont">
                                        Тема сядет и создаст каждій продукт где уникально расставит уже готовіе модули)
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    {/*{data.rows.map((item) => (*/}
                    {/*"proxy": "http://127.0.0.1:3000",*/}
                    {/*    <CardProduct key={item.id} name={name} data={data} setData={setData} item={item}/>*/}
                    {/*))}*/}
                </MDBContainer>
                {pricesThis === null ? (
                    <div style={{width: '50vw'}}>

                    </div>
                ) : (
                    <div style={{width: '50vw'}}>
                        {/*<ChartComponent aapl={pricesThis}/>*/}
                        <NewChartMy2 data={pricesThis}/>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div>
            <Loader/>
        </div>
    )
};

export default Sheet;