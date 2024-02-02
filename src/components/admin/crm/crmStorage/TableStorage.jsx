import React, {useState, useEffect} from "react";
import Loader from "../../../calc/Loader";
import PaginationMy from "../../pagination/PaginationMy";
import Image from 'react-bootstrap/Image';
import axios from "axios";
import {Form, Table} from "react-bootstrap";
import CrmHeader from "../CrmHeader";
import ModalStorageTable from "./ModalStorageTable";
import ModalDeleteInStorage from "./ModalDeleteInStorage";
import ModalStorageRed from "./ModalStorageRed";

export const TableStorage = ({name}) => {
    const [data, setData] = useState(null);
    const [inPageCount, setInPageCount] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(null);

    useEffect(() => {
        let data = {
            name: name,
            inPageCount: inPageCount,
            currentPage: currentPage,
        }
        axios.post(`admin/gettable`, data)
            .then(response => {
                console.log(response.data);
                setData(response.data)
                setPageCount(Math.ceil(response.data.count / inPageCount))
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);

    if (data) {
        return (
            <div>
                <CrmHeader whoPick={name} data={data}/>
                <ModalStorageTable
                    namem={name}
                    data={data}
                    setData={setData}
                    inPageCount={inPageCount}
                    setInPageCount={setInPageCount}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageCount={pageCount}
                    setPageCount={setPageCount}
                />
                <Table bordered hover variant="" size="sm">
                    <thead>
                    <tr className="">
                        <th className="adminFontTable">
                            <Form.Check // prettier-ignore
                                type={"checkbox"}
                                id={`all`}
                                label={``}
                            />
                        </th>
                        <th className="adminFontTable">id</th>
                        <th className="adminFontTable">Фото</th>
                        <th className="adminFontTable">type</th>
                        <th className="adminFontTable">Артикул</th>
                        <th className="adminFontTable">Назва</th>
                        <th className="adminFontTable">Од. виміру</th>
                        <th className="adminFontTable">Собівартість</th>
                        <th className="adminFontTable">Ціна(1-10)</th>
                        <th className="adminFontTable">Ціна(11-50)</th>
                        <th className="adminFontTable">Ціна(51-100)</th>
                        <th className="adminFontTable">Ціна(101-0)(main)</th>
                        <th className="adminFontTable">Ціна(101-0)(main)</th>
                        <th className="adminFontTable">В наявності</th>
                        <th className="adminFontTable">Всього</th>
                        <th className="adminFontTable">Коєф ціни(від main)</th>
                        <th className="adminFontTable">Коєф число</th>
                        <th className="adminFontTable">Створив</th>
                        <th className="adminFontTable">Постачальник</th>
                        <th className="adminFontTable">createdAt</th>
                        <th className="adminFontTable">updatedAt</th>
                        <th className="adminFontTable"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.rows.map((item) => (
                        <tr key={item.id}>
                            <td className="adminFontTable">
                                <Form.Check // prettier-ignore
                                    // className="adminFontTable"
                                    type={"checkbox"}
                                    id={item.id}
                                    label={``}
                                />
                            </td>
                            <td className="adminFontTable">{item.id}</td>
                            <td className="adminFontTable">
                                <Image src="" thumbnail/>
                            </td>
                            <td className="adminFontTable">{item.type}</td>
                            <td className="adminFontTable">{item.article}</td>
                            {/*<td className="adminFontTable">{item.name}</td>*/}
                            <ModalStorageRed dataTypeInTable={"string"} tableName={name}
                                data={data}
                                setData={setData}
                                inPageCount={inPageCount}
                                setInPageCount={setInPageCount}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                pageCount={pageCount}
                                setPageCount={setPageCount} itemData={item.name} item={item} tablPosition="name"/>
                            <ModalStorageRed dataTypeInTable={"string"} tableName={name}
                                data={data}
                                setData={setData}
                                inPageCount={inPageCount}
                                setInPageCount={setInPageCount}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                pageCount={pageCount}
                                setPageCount={setPageCount} itemData={item.units} item={item} tablPosition="units"/>
                            <ModalStorageRed dataTypeInTable={"number"} tableName={name} data={data}
                                             setData={setData}
                                             inPageCount={inPageCount}
                                             setInPageCount={setInPageCount}
                                             currentPage={currentPage}
                                             setCurrentPage={setCurrentPage}
                                             pageCount={pageCount}
                                             setPageCount={setPageCount} itemData={item.cost} item={item} tablPosition="cost"/>
                            <ModalStorageRed dataTypeInTable={"number"} tableName={name} data={data}
                                             setData={setData}
                                             inPageCount={inPageCount}
                                             setInPageCount={setInPageCount}
                                             currentPage={currentPage}
                                             setCurrentPage={setCurrentPage}
                                             pageCount={pageCount}
                                             setPageCount={setPageCount} itemData={item.price1} item={item} tablPosition="price1"/>
                            <ModalStorageRed dataTypeInTable={"number"} tableName={name} data={data}
                                             setData={setData}
                                             inPageCount={inPageCount}
                                             setInPageCount={setInPageCount}
                                             currentPage={currentPage}
                                             setCurrentPage={setCurrentPage}
                                             pageCount={pageCount}
                                             setPageCount={setPageCount} itemData={item.price2} item={item} tablPosition="price2"/>
                            <ModalStorageRed dataTypeInTable={"number"} tableName={name} data={data}
                                             setData={setData}
                                             inPageCount={inPageCount}
                                             setInPageCount={setInPageCount}
                                             currentPage={currentPage}
                                             setCurrentPage={setCurrentPage}
                                             pageCount={pageCount}
                                             setPageCount={setPageCount} itemData={item.price3} item={item} tablPosition="price3"/>
                            <ModalStorageRed dataTypeInTable={"number"} tableName={name} data={data}
                                             setData={setData}
                                             inPageCount={inPageCount}
                                             setInPageCount={setInPageCount}
                                             currentPage={currentPage}
                                             setCurrentPage={setCurrentPage}
                                             pageCount={pageCount}
                                             setPageCount={setPageCount} itemData={item.price4} item={item} tablPosition="price4"/>
                            <ModalStorageRed dataTypeInTable={"number"} tableName={name} data={data}
                                             setData={setData}
                                             inPageCount={inPageCount}
                                             setInPageCount={setInPageCount}
                                             currentPage={currentPage}
                                             setCurrentPage={setCurrentPage}
                                             pageCount={pageCount}
                                             setPageCount={setPageCount} itemData={item.amount} item={item} tablPosition="amount"/>
                            <ModalStorageRed dataTypeInTable={"number"} tableName={name} data={data}
                                             setData={setData}
                                             inPageCount={inPageCount}
                                             setInPageCount={setInPageCount}
                                             currentPage={currentPage}
                                             setCurrentPage={setCurrentPage}
                                             pageCount={pageCount}
                                             setPageCount={setPageCount} itemData={item.amountAll} item={item} tablPosition="amountAll"/>
                            <ModalStorageRed dataTypeInTable={"string"} tableName={name} data={data}
                                             setData={setData}
                                             inPageCount={inPageCount}
                                             setInPageCount={setInPageCount}
                                             currentPage={currentPage}
                                             setCurrentPage={setCurrentPage}
                                             pageCount={pageCount}
                                             setPageCount={setPageCount} itemData={item.PriceList} item={item} tablPosition="PriceList"/>
                            <td className="adminFontTable">{item.creator}</td>
                            <ModalStorageRed dataTypeInTable={"string"} tableName={name} data={data}
                                             setData={setData}
                                             inPageCount={inPageCount}
                                             setInPageCount={setInPageCount}
                                             currentPage={currentPage}
                                             setCurrentPage={setCurrentPage}
                                             pageCount={pageCount}
                                             setPageCount={setPageCount} itemData={item.purveyor} item={item} tablPosition="purveyor"/>
                            <td className="adminFontTable">{item.createdAt}</td>
                            <td className="adminFontTable">{item.updatedAt}</td>
                            {/*<td className="adminFont">*/}
                            {/*    /!*<button className="btnm bg-info">edit</button>*!/*/}
                            {/*</td>*/}
                            <td>
                                <ModalDeleteInStorage namem={name}
                                                      data={data}
                                                      setData={setData}
                                                      inPageCount={inPageCount}
                                                      setInPageCount={setInPageCount}
                                                      currentPage={currentPage}
                                                      setCurrentPage={setCurrentPage}
                                                      pageCount={pageCount}
                                                      setPageCount={setPageCount}
                                                      item={item}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <PaginationMy
                    name={name}
                    data={data}
                    setData={setData}
                    inPageCount={inPageCount}
                    setInPageCount={setInPageCount}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageCount={pageCount}
                    setPageCount={setPageCount}
                />
            </div>
        )
    }

    return (
        <h1 className="d-flex justify-content-center align-items-center">
            <Loader/>
        </h1>
    )
}