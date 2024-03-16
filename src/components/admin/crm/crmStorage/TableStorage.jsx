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
import Button from "react-bootstrap/Button";
import searchForm from "../SearchForm";

export const TableStorage = ({name}) => {
    const [data, setData] = useState(null);
    const [inPageCount, setInPageCount] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(null);
    const [typeSelect, setTypeSelect] = useState("");

    useEffect(() => {
        let data = {
            name: name,
            inPageCount: inPageCount,
            currentPage: currentPage,
            search: typeSelect
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
    }, [typeSelect]);

    if (data) {
        return (
            <div>
                <CrmHeader whoPick={name} data={data}/>
                {/*<div>*/}
                {/*    <Button variant="light" onClick={() => setTypeSelect(!isVisible)} className="adminFont">1</Button>*/}
                {/*    <Button variant="light" onClick={() => setTypeSelect(!isVisible)} className="adminFont">2</Button>*/}
                {/*    <Button variant="light" onClick={() => setTypeSelect(!isVisible)} className="adminFont">3</Button>*/}
                {/*    <Button variant="light" onClick={() => setTypeSelect(!isVisible)} className="adminFont">4</Button>*/}
                {/*</div>*/}
                <div>
                    <Form.Control
                        placeholder={"searchForm"}
                        aria-label={"searchForm"}
                        aria-describedby="searchForm"
                        type={"String"}
                        value={typeSelect}
                        className="adminFontTable"
                        onChange={(event) => setTypeSelect(event.target.value)}
                    />
                </div>
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
                        {data.metadata.map((item) => (
                            <th className="adminFontTable" key={item}>{item}</th>

                        ))}
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