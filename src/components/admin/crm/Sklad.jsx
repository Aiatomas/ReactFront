import React from 'react';
import {MDBTable, MDBTableBody, MDBTableHead} from "mdb-react-ui-kit";

const Sklad = ({ data }) => {
    return (
        <div className="">
            {/*<table className="min-w-full leading-normal">*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">*/}
            {/*            Фото*/}
            {/*        </th>*/}
            {/*        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">*/}
            {/*            Артикул*/}
            {/*        </th>*/}
            {/*        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">*/}
            {/*            Назва*/}
            {/*        </th>*/}
            {/*        /!* ... other headers *!/*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {data.map((item, index) => (*/}
            {/*        <tr key={index}>*/}
            {/*            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">*/}
            {/*                /!* Insert image or placeholder *!/*/}
            {/*            </td>*/}
            {/*            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">*/}
            {/*                {item.artikul}*/}
            {/*            </td>*/}
            {/*            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">*/}
            {/*                {item.name}*/}
            {/*            </td>*/}
            {/*            /!* ... other cells *!/*/}
            {/*        </tr>*/}
            {/*    ))}*/}
            {/*    </tbody>*/}
            {/*</table>*/}

            <MDBTable hover>
                <MDBTableHead>
                    <tr className="bg-light">
                        <th>id</th>
                        <th>Фото</th>
                        <th>Артикул</th>
                        <th>Назва</th>
                        <th>Од. виміру</th>
                        <th>Собівартість</th>
                        <th>Ціна</th>
                        <th>В наявності</th>
                        <th>Всього</th>
                        <th>Прайс-лист</th>
                        <th>Створив</th>
                        <th>Постачальник</th>
                        <th></th>
                        <th></th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {/*{data.rows.map((item) => (*/}
                    {/*    <tr key={item.id}>*/}
                    {/*        <td>{item.id}</td>*/}
                    {/*        <td>{item.type}</td>*/}
                    {/*        <td>{item.name}</td>*/}
                    {/*        <td>{item.units}</td>*/}
                    {/*        <td>{item.price}</td>*/}
                    {/*        <td>*/}
                    {/*            <button className="btnm bg-info">edit</button>*/}
                    {/*        </td>*/}
                    {/*        <td>*/}
                    {/*            <button className="btnm bg-danger">delete</button>*/}
                    {/*        </td>*/}
                    {/*    </tr>*/}
                    {/*))}*/}
                </MDBTableBody>
            </MDBTable>
        </div>
    );
};

export default Sklad;