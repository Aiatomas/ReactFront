import {Modal} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";

const ModalLamination = ({lamination, setLamination}) => {
    const [show, setShow] = useState(false);
    const [mat1, setMat1] = useState("1");

    let mat2 = [
        "з глянцевим ламінуванням",
        "з матовим ламінуванням",
        "з ламінуванням Soft Touch",
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
        setLamination([mat1, "", ""])
        setShow(false);
    }

    return (
        <>
            <Card onClick={handleShow}>
                <Card.Body>
                    <Card.Title className="adminFont">Тип ламінації</Card.Title>
                    <Card.Text className="adminFont">
                        {lamination[0]} {lamination[1]} {lamination[2]}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Тип ламінації</Modal.Title>
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

export default ModalLamination;