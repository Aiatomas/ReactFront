import { useState } from 'react';
import { Button, ListGroup, Collapse } from 'react-bootstrap';

export const CollapseAi = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Button onClick={handleToggle}>{isOpen ? '<' : '>'} Контрагенти</Button>
            <Collapse in={isOpen}>
                <div className="">
                    <ListGroup>
                        <ListGroup.Item>Ліди</ListGroup.Item>
                        <ListGroup.Item>Клієнти</ListGroup.Item>
                        <ListGroup.Item>Підрядники</ListGroup.Item>
                        <ListGroup.Item>Постачальники</ListGroup.Item>
                    </ListGroup>
                </div>
            </Collapse>
        </>
    );
};

//Kv14061992