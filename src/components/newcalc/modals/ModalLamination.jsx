import {Modal} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";

const ModalLamination = ({lamination, setLamination, prices}) => {
    const [show, setShow] = useState(false);
    const [mat1, setMat1] = useState("Не потрібно");
    const [mat3, setMat3] = useState("");
    const [mat4, setMat4] = useState("");

    let mat2 = [
        "Не потрібно",
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

    let handleClick3 = (e) => {
        setMat3(e.target.getAttribute("toClick"))
    }

    let handleClick4 = (e) => {
        setMat4(e.target.getAttribute("toClick"))
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

            <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
                <Modal.Header closeButton>
                    <Modal.Title>Тип ламінації</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex">
                    <div style={{width: '24.5vw', height: '30vh', overflow: 'auto', border: '1px solid #ccc'}}>
                        {/* Много элементов */}
                        <div style={{padding: '10px'}}>
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

                    <div style={{width: '24.5vw', height: '30vh', overflow: 'auto', border: '1px solid #ccc'}}>
                        <div style={{padding: '10px'}}>
                            <div
                                toclick={"з однієї сторони"}
                                className={"з однієї сторони" === mat4 ? 'bg-info' : ''}
                                onClick={handleClick4}
                            >
                                з однієї сторони
                            </div>
                            <div
                                toclick={"З двох сторін"}
                                className={"З двох сторін" === mat4 ? 'bg-info' : ''}
                                onClick={handleClick4}
                            >
                                З двох сторін
                            </div>
                        </div>
                    </div>

                    <div style={{width: '24.5vw', height: '30vh', overflow: 'auto', border: '1px solid #ccc'}}>
                        {/* Много элементов */}
                        <div style={{padding: '10px'}}>
                            {prices[3].variants.map((item, iter) => (
                                <div
                                    key={item}
                                    toclick={item}
                                    className={item.toString() === mat3 ? 'bg-info' : ''}
                                    onClick={handleClick3}
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