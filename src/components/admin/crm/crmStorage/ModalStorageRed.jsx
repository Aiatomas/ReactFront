import React, {useCallback, useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import redIcon from '../../../redIcon.svg';
import Loader from "../../../calc/Loader";

const ModalStorageRed = ({dataTypeInTable, tableName, itemData, item, tablPosition, data, setData, inPageCount, setInPageCount, currentPage, setCurrentPage, pageCount, setPageCount}) => {
    const [showModal, setShowModal] = useState(false);
    const [modalStyle, setModalStyle] = useState({});
    const [modalInput, setModalInput] = useState(itemData);
    const [load, setLoad] = useState(false);

    const handleOpenModal = useCallback((event) => {
        event.preventDefault();
        setModalStyle({
            position: 'absolute',
            top: `${event.pageY}px`,
            left: `${event.pageX}px`
        });
        setShowModal(true);
    }, []);

    const stopPropagation = useCallback((event) => {
        event.stopPropagation();
    }, []);

    const handleCloseModal = useCallback(() => {
        setShowModal(false);
    }, []);

    useEffect(() => {
        setModalInput(itemData)
    }, [data]);

    let saveThis = (event) => {
        let data = {
            tableName: tableName,
            id: item.id,
            tablePosition: tablPosition,
            input: modalInput,
            inPageCount: inPageCount,
            currentPage: currentPage,
        }
        if(modalInput === ""){
            data.input = 0
        }
        console.log(data);
        setLoad(true)
        axios.post(`admin/redintable`, data)
            .then(response => {
                console.log(response.data);
                setData(response.data)
                setPageCount(Math.ceil(response.data.count / inPageCount))
                setLoad(false)
                setShowModal(false)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    useEffect(() => {
        // Функція-обробник
        const handleClickOutside = (event) => {
            // Перевіряємо, що ми не клацнули по модалці або активатору модалки
            if (showModal && event.target.closest(".redStorageItem") === null) {
                setShowModal(false);
            }
        };

        // Додати обробник подій при відновленні компонента
        if(showModal){
            document.addEventListener("click", handleClickOutside);
        }

        // Видалити обробник подій при знищенні компонента
        return () => document.removeEventListener("click", handleClickOutside);
    }, [showModal]);

    return (
        <td className="adminFontTable redStorageItem" onClick={handleOpenModal}>
            {/*<div className="adminFontTable redStorageItem" onClick={handleOpenModal}>*/}
            {/*    /!*{!itemData && (*!/*/}
            {/*    /!*    <p className="adminFontTable redStorageItem">""</p>*!/*/}
            {/*    /!*    )}*!/*/}
            {/*    {itemData}*/}
            {/*    <img src={redIcon} alt="red" className="redIcon"/>*/}
            {/*</div>*/}
            {itemData}
            <img src={redIcon} alt="red" className="redIcon"/>
            {showModal && (
                <div
                    // className="modal"
                    style={modalStyle}
                    onClick={stopPropagation}
                >
                    <Modal.Dialog>
                        {/*<Modal.Header closeButton>*/}
                        {/*    <Modal.Title>Modal title</Modal.Title>*/}
                        {/*</Modal.Header>*/}

                        <Modal.Body>
                            <Form.Control
                                placeholder={tablPosition}
                                aria-label={tablPosition}
                                aria-describedby="modRed"
                                type={dataTypeInTable}
                                value={modalInput}
                                className="adminFontTable"
                                onChange={(event) => setModalInput(event.target.value)}
                            />
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="outline-secondary" className="adminFontTable" onClick={handleCloseModal}>Закрити</Button>
                            {load && (
                                <Button disabled variant="outline-success" className="adminFontTable">Збереження змін</Button>
                            )}
                            {!load && (
                                <Button variant="outline-success" className="adminFontTable" onClick={saveThis}>Зберегти зміни</Button>
                            )}
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            )}
        </td>
    );
};

export default ModalStorageRed