import React, {useState, useEffect} from "react";
import Loader from "../../../calc/Loader";
import Pagination from "../../pagination/Pagination";
import Image from 'react-bootstrap/Image';
import axios from "axios";
import {
    MDBCard,
    MDBCardBody,
    MDBCol, MDBContainer,
    MDBRow,
    MDBTable, MDBTableBody,
    MDBTableHead
} from "mdb-react-ui-kit";
import {Form} from "react-bootstrap";
import CrmHeader from "../CrmHeader";
import ModalStorageTable from "./ModalStorageTable";
import ModalDeleteInStorage from "./ModalDeleteInStorage";

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
            <MDBContainer fluid >
                <CrmHeader whoPick={name} data={data}/>
                <MDBRow className='justify-content-center'>
                    <MDBCol md='12'>
                        <section>
                            <MDBCard>
                                <MDBCardBody className="adminTable">
                                    <MDBRow>
                                        <MDBCol md='12' className='mb-4' >
                                            <ModalStorageTable namem={name}
                                                       data={data}
                                                       setData={setData}
                                                       inPageCount={inPageCount}
                                                       setInPageCount={setInPageCount}
                                                       currentPage={currentPage}
                                                       setCurrentPage={setCurrentPage}
                                                       pageCount={pageCount}
                                                       setPageCount={setPageCount}
                                            />
                                            <MDBTable hover>
                                                <MDBTableHead>
                                                    <tr className="bg-light">
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
                                                        <th className="adminFontTable">Ціна(101-0)</th>
                                                        <th className="adminFontTable">В наявності</th>
                                                        <th className="adminFontTable">Всього</th>
                                                        <th className="adminFontTable">Прайс-лист</th>
                                                        <th className="adminFontTable">Створив</th>
                                                        <th className="adminFontTable">Постачальник</th>
                                                        <th className="adminFontTable">createdAt</th>
                                                        <th className="adminFontTable">updatedAt</th>
                                                        <th className="adminFontTable"></th>
                                                    </tr>
                                                </MDBTableHead>
                                                <MDBTableBody>
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
                                                            <td className="adminFontTable">{item.name}</td>
                                                            <td className="adminFontTable">{item.units}</td>
                                                            <td className="adminFontTable">{item.cost}</td>
                                                            <td className="adminFontTable">{item.price1}</td>
                                                            <td className="adminFontTable">{item.price2}</td>
                                                            <td className="adminFontTable">{item.price3}</td>
                                                            <td className="adminFontTable">{item.price4}</td>
                                                            <td className="adminFontTable">{item.amount}</td>
                                                            <td className="adminFontTable">{item.amountAll}</td>
                                                            <td className="adminFontTable">{item.PriceList}</td>
                                                            <td className="adminFontTable">{item.creator}</td>
                                                            <td className="adminFontTable">{item.purveyor}</td>
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
                                                </MDBTableBody>
                                            </MDBTable>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                                <Pagination name={name}
                                            data={data}
                                            setData={setData}
                                            inPageCount={inPageCount}
                                            setInPageCount={setInPageCount}
                                            currentPage={currentPage}
                                            setCurrentPage={setCurrentPage}
                                            pageCount={pageCount}
                                            setPageCount={setPageCount}
                                />
                            </MDBCard>
                        </section>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }

    return (
        <h1 className="d-flex justify-content-center align-items-center">
            <Loader/>
        </h1>
    )
}