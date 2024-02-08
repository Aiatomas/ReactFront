import {Modal} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";

const ModalMaterial = ({material, setMaterial}) => {
    const [show, setShow] = useState(false);
    const [mat1, setMat1] = useState("1");

    let mat2 = [
        "Офісний папір / 80-90 г/м2",
        "Офісний папір Premium / 90-100 г/м2",
        "DNS папір / 150-170 г/м2",
        "DNS 200gsm",
        "DNS 300gsm",
        "DNS картон / 300-350 г/м2",
        "Дизайнерський картон / 250-350 г/м2",
        "Дизайнерський папір / 120-170 г/м2",
        "Крейдований папір / 100-170 г/м2",
        "UPM 200gsm",
        "UPM 250gsm",
        "Крейдований картон / 300-350 г/м2",
        "UPM 350gsm",
        "BIO_TOP_3 300gsm",
        "Білий самоклеючий папір",
        "Самоклеючий папір Toxic",
        "Винний самоклеючий папір",
        "Біла самоклеюча плівка",
        "плівці глянцевій Premium",
        "Прозора самоклеюча плівка",
        "Плівка прозора Xerox Transparency",
        "Самоклеючий папір Craft",

    ]

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    let handleClick = (e) => {
        console.log(e);
        setMat1(e.target.getAttribute("toClick"))
    }

    let save = (e) => {
        setMaterial([mat1, ""])
        setShow(false);
    }

    return (
        <>
            <Card onClick={handleShow}>
                <Card.Body>
                    <Card.Title className="adminFont">Тип матеріалу</Card.Title>
                    <Card.Text className="adminFont">
                        {material[0]} {material[1]}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Тип матеріалу</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{width: '24.5vw', height: '30vh', overflow: 'auto', border: '1px solid #ccc'}}>
                        {/* Много элементов */}
                        <div style={{padding: '10px'}}>
                            {/*{Array.from({length: 50}, (_, i) => (*/}
                            {/*    <div*/}
                            {/*        key={i}*/}
                            {/*        toclick={i}*/}
                            {/*        className={i.toString() === mat1 ? 'bg-info' : ''}*/}
                            {/*        onClick={handleClick}*/}
                            {/*    >*/}
                            {/*        Элемент {i}*/}
                            {/*    </div>*/}
                            {/*))}*/}

                            {mat2.map((item, iter) => (
                                <div
                                    key={item}
                                    toclick={item}
                                    className={item.toString() === mat1 ? 'bg-info' : ''}
                                    onClick={handleClick}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрити
                    </Button>
                    <Button variant="success" onClick={save}>
                        Застосувати
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalMaterial;