import React from 'react';
import {MDBTable, MDBTableBody, MDBTableHead} from "mdb-react-ui-kit";
import {Modal} from "react-bootstrap";
import Modal2222 from "../Modal2222";


const styles = {
    tableContainer: {
        padding: '20px',
        // Добавьте дополнительные стили
    },
    image: {
        width: '50px', // Регулируйте размер как необходимо
        // Добавьте дополнительные стили для изображения
    },
    // Добавьте дополнительные стили
};
const Sklad = ({ data }) => {
    return (
        <div className="">
            <div style={styles.tableContainer}>
                <table className="">
                    <thead>
                    <tr>
                        <th className="adminFont">id</th>
                        <th className="adminFont">Фото</th>
                        <th className="adminFont">Артикул</th>
                        <th className="adminFont">Назва</th>
                        <th className="adminFont">Од. виміру</th>
                        <th className="adminFont">Собівартість</th>
                        <th className="adminFont">Ціна</th>
                        <th className="adminFont">В наявності</th>
                        <th className="adminFont">Всього</th>
                        <th className="adminFont">Прайс-лист</th>
                        <th className="adminFont">Створив</th>
                        <th className="adminFont">Постачальник</th>
                        <th className="adminFont"></th>
                        <th className="adminFont"></th>
                        <Modal2222/>
                    </tr>
                    </thead>
                    <tbody>
                    {/* Здесь будет ваш код для строк данных */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sklad;