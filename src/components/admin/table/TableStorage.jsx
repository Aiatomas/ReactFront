import React, {useState, useEffect} from "react";
import Loader from "../../calc/Loader";
import Pagination from "../pagination/Pagination";
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
        if (addNew) {
            return (
                <MDBContainer fluid>
                    <MDBRow className='justify-content-center'>
                        <MDBCol md='12'>
                            <section>
                                <MDBCard>
                                    <MDBCardHeader className='py-3'>
                                        <MDBRow>
                                            <MDBCol size='6'>
                                                <p className='text-uppercase small mb-2'>
                                                    <strong>{name} {data.count}</strong>
                                                </p>
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
                                            <MDBCol size='6' className='text-end'>
                                                <button onClick={closeAll} className='btn btnm'>
                                                    close
                                                </button>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCardHeader>
                                    <MDBCardBody>
                                        <MDBRow>
                                            <MDBCol md='12' className='mb-3'>
                                                <MDBTable hover>
                                                    <MDBTableHead>
                                                        <tr className="text-bg-light">
                                                            <th>id</th>
                                                            <th>session</th>
                                                            <th>userid</th>
                                                            <th>userAgent</th>
                                                            <th>ip</th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </MDBTableHead>
                                                    <MDBTableBody>
                                                        <tr>
                                                            <td></td>
                                                            <td><Form.Control value={namee} className="" type="text" onChange={setNameeF} placeholder="name" /></td>
                                                            <td><Form.Control value={type} className="" type="text" onChange={setTypeF} placeholder="type" /></td>
                                                            <td><Form.Control value={units} className="" type="text" onChange={setUnitsF} placeholder="units" /></td>
                                                            <td><Form.Control value={price} className="" type="text" onChange={setPriceF} placeholder="price" /></td>
                                                            <td>
                                                                <button onClick={saveAll} className="btn btnm btn-success">save</button>
                                                            </td>
                                                            <td>
                                                                <button onClick={closeAll} className="btn btnm btn-danger">close</button>
                                                            </td>
                                                        </tr>
                                                    </MDBTableBody>
                                                </MDBTable>
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
            <MDBContainer fluid>
                <MDBRow className='justify-content-center'>
                    <MDBCol md='12'>
                        <section>
                            <MDBCard>
                                {/*<MDBCardHeader className='py-3'>*/}
                                {/*    <MDBRow>*/}
                                {/*        <MDBCol size='6'>*/}
                                {/*            <p className='text-uppercase small mb-2'>*/}
                                {/*                <strong>{name} {data.count}</strong>*/}
                                {/*            </p>*/}
                                {/*            <Pagination name={name}*/}
                                {/*                        data={data}*/}
                                {/*                        setData={setData}*/}
                                {/*                        inPageCount={inPageCount}*/}
                                {/*                        setInPageCount={setInPageCount}*/}
                                {/*                        currentPage={currentPage}*/}
                                {/*                        setCurrentPage={setCurrentPage}*/}
                                {/*                        pageCount={pageCount}*/}
                                {/*                        setPageCount={setPageCount}*/}
                                {/*            />*/}
                                {/*        </MDBCol>*/}
                                {/*        <MDBCol size='6' className='text-end'>*/}
                                {/*            /!*<button onClick={setAddNewF} className='btn btnm'>*!/*/}
                                {/*            /!*    add new*!/*/}
                                {/*            /!*</button>*!/*/}
                                {/*        </MDBCol>*/}
                                {/*    </MDBRow>*/}
                                {/*</MDBCardHeader>*/}
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol md='12' className='mb-4'>
                                            <MDBTable hover className="">
                                                <MDBTableHead>
                                                    <tr className="bg-light">
                                                        <th className="adminFont"></th>
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
                                                        <th className="adminFont">createdAt</th>
                                                        <th className="adminFont">updatedAt</th>
                                                        <th className="adminFont"></th>
                                                    </tr>
                                                </MDBTableHead>
                                                <MDBTableBody>
                                                    {data.rows.map((item) => (
                                                        <tr key={item.id}>
                                                            <td className="adminFont">[]</td>
                                                            <td className="adminFont">{item.id}</td>
                                                            <td className="adminFont">{item.article}</td>
                                                            <td className="adminFont">{item.type}</td>
                                                            <td className="adminFont">{item.name}</td>
                                                            <td className="adminFont">{item.units}</td>
                                                            <td className="adminFont">{item.cost}</td>
                                                            <td className="adminFont">{item.price}</td>
                                                            <td className="adminFont">{item.amount}</td>
                                                            <td className="adminFont">{item.amountAll}</td>
                                                            <td className="adminFont">{item.PriceList}</td>
                                                            <td className="adminFont">{item.creator}</td>
                                                            <td className="adminFont">{item.purveyor}</td>
                                                            <td className="adminFont">{item.creator}</td>
                                                            <td className="adminFont">{item.createdAt}</td>
                                                            <td className="adminFont">{item.updatedAt}</td>
                                                            {/*<td className="adminFont">*/}
                                                            {/*    /!*<button className="btnm bg-info">edit</button>*!/*/}
                                                            {/*</td>*/}
                                                            <td>
                                                                <button className="btnm bg-danger">delete</button>
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