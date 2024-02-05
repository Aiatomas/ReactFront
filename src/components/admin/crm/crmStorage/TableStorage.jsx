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
import MetaAddNewItemTable from "./MetaAddNewItemTable";

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
                <MetaAddNewItemTable
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
                        {/*<th className="adminFontTable">*/}
                        {/*    <Form.Check // prettier-ignore*/}
                        {/*        type={"checkbox"}*/}
                        {/*        id={`all`}*/}
                        {/*        label={``}*/}
                        {/*    />*/}
                        {/*</th>*/}
                        {/*<th className="adminFontTable">id</th>*/}
                        {/*<th className="adminFontTable">Фото</th>*/}
                        {/*<th className="adminFontTable">type</th>*/}
                        {/*<th className="adminFontTable">Артикул</th>*/}
                        {/*<th className="adminFontTable">Назва</th>*/}
                        {/*<th className="adminFontTable">Од. виміру</th>*/}
                        {/*<th className="adminFontTable">Собівартість</th>*/}
                        {/*<th className="adminFontTable">Ціна(1-10)</th>*/}
                        {/*<th className="adminFontTable">Ціна(11-50)</th>*/}
                        {/*<th className="adminFontTable">Ціна(51-100)</th>*/}
                        {/*<th className="adminFontTable">Ціна(101-0)(main)</th>*/}
                        {/*<th className="adminFontTable">Ціна(101-0)(main)</th>*/}
                        {/*<th className="adminFontTable">В наявності</th>*/}
                        {/*<th className="adminFontTable">Всього</th>*/}
                        {/*<th className="adminFontTable">Коєф ціни(від main)</th>*/}
                        {/*<th className="adminFontTable">Коєф число</th>*/}
                        {/*<th className="adminFontTable">Створив</th>*/}
                        {/*<th className="adminFontTable">Постачальник</th>*/}
                        {/*<th className="adminFontTable">createdAt</th>*/}
                        {/*<th className="adminFontTable">updatedAt</th>*/}
                        {/*<th className="adminFontTable"></th>*/}
                        {data.metadata.map((item) => (
                            <th className="adminFontTable">{item}</th>

                        ))}
                        <th className="adminFontTable"></th>

                    </tr>
                    </thead>
                    <tbody>
                    {data.rows.map((item, iter) => (
                        <tr key={item.id}>
                                {data.metadata.map((metaItem, iter2) => (
                                    // <th key={metaItem+iter+iter2} className="adminFontTable">{item[metaItem]}</th>
                                    <ModalStorageRed key={metaItem+iter+iter2} dataTypeInTable={"string"} tableName={name}
                                                     data={data}
                                                     setData={setData}
                                                     inPageCount={inPageCount}
                                                     setInPageCount={setInPageCount}
                                                     currentPage={currentPage}
                                                     setCurrentPage={setCurrentPage}
                                                     pageCount={pageCount}
                                                     setPageCount={setPageCount} itemData={item[metaItem]} item={item} tablPosition={metaItem}
                                    />
                                ))}
                                <ModalDeleteInStorage
                                    dataTypeInTable={"string"} tableName={name}
                                    data={data}
                                    setData={setData}
                                    inPageCount={inPageCount}
                                    setInPageCount={setInPageCount}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                    pageCount={pageCount}
                                    setPageCount={setPageCount} itemData={item} item={item} tablPosition={item}
                                />
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