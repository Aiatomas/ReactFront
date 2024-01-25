import React, { useCallback, useState } from 'react';
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";

const ModalStorageRed = ({itemData}) => {
    const [showModal, setShowModal] = useState(false);
    const [modalStyle, setModalStyle] = useState({});

    const handleOpenModal = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setModalStyle({
            position: 'absolute',
            top: `${event.pageY}px`,
            left: `${event.pageX}px`
        });
        setShowModal(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setShowModal(false);
    }, []);

    const stopPropagation = useCallback((event) => {
        if (!showModal) {
            event.stopPropagation();
        }
    }, [showModal]);

    return (
        <div onClick={handleCloseModal}>
            <div className="adminFontTable" onContextMenu={handleOpenModal}>
                {itemData}
            </div>
            {showModal && (
                <div
                    // className="modal"
                    style={modalStyle}
                >
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>Modal body text goes here.</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary">Close</Button>
                            <Button variant="primary">Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            )}
        </div>
    );
};

export default ModalStorageRed