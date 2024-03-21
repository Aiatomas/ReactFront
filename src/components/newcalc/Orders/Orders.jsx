import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import CrmHeader from "../../admin/crm/CrmHeader";
import MetaAddNewItemTable from "../../admin/crm/crmStorage/MetaAddNewItemTable";
import {Table} from "react-bootstrap";
import ModalStorageRed from "../../admin/crm/crmStorage/ModalStorageRed";
import ModalDeleteInStorage from "../../admin/crm/crmStorage/ModalDeleteInStorage";
import PaginationMy from "../../admin/pagination/PaginationMy";
import Loader from "../../calc/Loader";
import {Link} from "react-router-dom";

const Orders = () => {
    const [data, setData] = useState(null);
    const [inPageCount, setInPageCount] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(null);
    const [typeSelect, setTypeSelect] = useState("");

    useEffect(() => {
        let data = {
            name: "Orders",
            inPageCount: inPageCount,
            currentPage: currentPage,
            search: typeSelect
        }
        axios.post(`/api/order/get`, data)
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
                <CrmHeader whoPick={"Orders"} data={data} typeSelect={typeSelect} setTypeSelect={setTypeSelect}/>
                {/*<MetaAddNewItemTable*/}
                {/*    namem={"Orders"}*/}
                {/*    data={data}*/}
                {/*    setData={setData}*/}
                {/*    inPageCount={inPageCount}*/}
                {/*    setInPageCount={setInPageCount}*/}
                {/*    currentPage={currentPage}*/}
                {/*    setCurrentPage={setCurrentPage}*/}
                {/*    pageCount={pageCount}*/}
                {/*    setPageCount={setPageCount}*/}
                {/*/>*/}
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
                        {data.metadataProduct.map((item) => (
                            <th key={item} className="adminFontTable">{item}</th>
                        ))}
                        <th className="adminFontTable"></th>
                        {/*<th className="adminFontTable"></th>*/}

                    </tr>
                    </thead>
                    <tbody>
                    {data.rows.map((item, iter) => (
                        <tr key={item.id}>
                                {data.metadataProduct.map((metaItem, iter2) => (
                                    <th key={metaItem + iter + iter2} className="adminFontTable">
                                        {item[metaItem]}
                                    </th>
                                    // <ModalStorageRed key={metaItem+iter+iter2} dataTypeInTable={"string"} tableName={"Orders"}
                                    //                  data={data}
                                    //                  setData={setData}
                                    //                  inPageCount={inPageCount}
                                    //                  setInPageCount={setInPageCount}
                                    //                  currentPage={currentPage}
                                    //                  setCurrentPage={setCurrentPage}
                                    //                  pageCount={pageCount}
                                    //                  setPageCount={setPageCount} itemData={item[metaItem]} item={item} tablPosition={metaItem}
                                    // />
                                ))}
                                <th className="adminFontTable">
                                    <Link to={`/Cash/${item.id}`}>
                                        <div className="adminFontTable btn btnm">
                                            Детальніше
                                        </div>
                                        {/*{item.orderunits.map((orderUnit, iter3) => (*/}
                                        {/*    <div className="d-flex m-1" key={orderUnit + iter + iter3}>*/}
                                        {/*        <div className="adminFontTable p-1 border-1 border-dark border">{orderUnit.unitName}.</div>*/}
                                        {/*        <div className="adminFontTable p-1 border-1 border-dark border">{orderUnit.quantity} шт.</div>*/}
                                        {/*    </div>*/}
                                        {/*))}*/}
                                    </Link>
                                </th>
                            {/*<ModalDeleteInStorage*/}
                            {/*    dataTypeInTable={"string"} tableName={"Orders"}*/}
                            {/*    data={data}*/}
                            {/*    setData={setData}*/}
                            {/*    inPageCount={inPageCount}*/}
                            {/*    setInPageCount={setInPageCount}*/}
                            {/*    currentPage={currentPage}*/}
                            {/*    setCurrentPage={setCurrentPage}*/}
                            {/*    pageCount={pageCount}*/}
                            {/*    setPageCount={setPageCount} itemData={item} item={item} tablPosition={item}*/}
                            {/*/>*/}
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <PaginationMy
                    name={"Orders"}
                    data={data}
                    setData={setData}
                    inPageCount={inPageCount}
                    setInPageCount={setInPageCount}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageCount={pageCount}
                    setPageCount={setPageCount}
                    typeSelect={typeSelect}
                    url={"/api/order/get"}
                />
            </div>
        )
    }

    return (
        <h1 className="d-flex justify-content-center align-items-center">
            <Loader/>
        </h1>
    )
};

export default Orders;