import React, {useState, useEffect} from "react";
import Loader from "../../calc/Loader";
import Pagination from "../pagination/Pagination";
import Image from 'react-bootstrap/Image';
import axios from "axios";
import {
    MDBCard,
    MDBCardBody, MDBCardFooter,
    MDBCardHeader,
    MDBCol, MDBContainer,
    MDBRow,
    MDBTable, MDBTableBody,
    MDBTableHead
} from "mdb-react-ui-kit";
import {Form} from "react-bootstrap";
import Modal2222 from "../Modal2222";

export const TableStorage = ({name}) => {
    const [data, setData] = useState(null);
    const [addNew, setAddNew] = useState(false);
    let setAddNewF = () => {
        setAddNew(true)
    }
    const [inPageCount, setInPageCount] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(null);

    //save-adit-----------------------------------------------------------
    const [namee, setNamee] = useState();
    const [type, setType] = useState();
    const [units, setUnits] = useState();
    const [price, setPrice] = useState();
    let setNameeF = (event) => {
        setNamee(event.target.value)
    }
    let setTypeF = (event) => {
        setType(event.target.value)
    }
    let setUnitsF = (event) => {
        setUnits(event.target.value)
    }
    let setPriceF = (event) => {
        setPrice(event.target.value)
    }
    let saveAll = (event) => {
        let data = {
            tableName: name,
            name: namee,
            type: type,
            units: units,
            price: price,
            inPageCount: inPageCount,
            currentPage: currentPage,
        }
        axios.post(`admin/addtotable`, data)
            .then(response => {
                // console.log(response.data);
                setData(response.data)
                setPageCount(Math.ceil(response.data.count / inPageCount))
                setNamee("")
                setType("")
                setUnits("")
                setPrice("")
                setAddNew(false)
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    let closeAll = () => {
        setAddNew(false)
        setNamee("")
        setType("")
        setUnits("")
        setPrice("")
    }
    //--------------------------------------------------------------------


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
            <MDBContainer fluid>
                <MDBRow className='justify-content-center'>
                    <MDBCol md='12'>
                        <section>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol md='12' className='mb-4'>
                                            <Modal2222 namem={name}
                                                       data={data}
                                                       setData={setData}
                                                       inPageCount={inPageCount}
                                                       setInPageCount={setInPageCount}
                                                       currentPage={currentPage}
                                                       setCurrentPage={setCurrentPage}
                                                       pageCount={pageCount}
                                                       setPageCount={setPageCount}
                                            />
                                            <MDBTable hover className="">
                                                <MDBTableHead>
                                                    <tr className="bg-light">
                                                        <th className="adminFontTable">
                                                            <Form.Check // prettier-ignore
                                                                type={type}
                                                                id={`all`}
                                                                label={``}
                                                            />
                                                        </th>
                                                        <th className="adminFontTable">id</th>
                                                        <th className="adminFontTable">Фото</th>
                                                        <th className="adminFontTable">Артикул</th>
                                                        <th className="adminFontTable">Назва</th>
                                                        <th className="adminFontTable">Од. виміру</th>
                                                        <th className="adminFontTable">Собівартість</th>
                                                        <th className="adminFontTable">Ціна</th>
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
                                                                    type={type}
                                                                    id={item.id}
                                                                    label={``}
                                                                />
                                                            </td>
                                                            <td className="adminFontTable">{item.id}</td>
                                                            <td className="adminFontTable">
                                                                <Image src="" thumbnail/>
                                                            </td>
                                                            <td className="adminFontTable">{item.article}</td>
                                                            <td className="adminFontTable">{item.name}</td>
                                                            <td className="adminFontTable">{item.units}</td>
                                                            <td className="adminFontTable">{item.cost}</td>
                                                            <td className="adminFontTable">{item.price}</td>
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
                                                                <button
                                                                    className="btnm bg-danger adminFontTable">delete
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </MDBTableBody>
                                            </MDBTable>

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

                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </section>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }

    return (
        <h1 className="d-flex justify-content-center align-items-center">
            {/*{name}*/}
            <Loader/>
        </h1>
    )
}