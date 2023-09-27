import React, {useState, useEffect} from "react";
import Loader from "../../calc/Loader";
import Pagination from "../pagination/Pagination";
import axios from "axios";
import {
    MDBBadge,
    MDBBtn,
    MDBCard,
    MDBCardBody, MDBCardFooter,
    MDBCardHeader,
    MDBCol, MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTable, MDBTableBody,
    MDBTableHead
} from "mdb-react-ui-kit";

export const Table = ({name}) => {
    const [data, setData] = useState(null);
    const [addNew, setAddNew] = useState(false);
    const [inPageCount, setInPageCount] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        axios.get(`admin/${name}`)
            .then(response => {
                console.log(response.data);
                setData(response.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);

    if(data){
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
                                                <strong>{name} 0</strong>
                                            </p>
                                            <Pagination data={data}
                                                        inPageCount={inPageCount}
                                                        setInPageCount={setInPageCount}
                                                        currentPage={currentPage}
                                                        setCurrentPage={setCurrentPage}
                                            />
                                        </MDBCol>
                                        <MDBCol size='6' className='text-end'>
                                            <button className='btn btnm'>
                                                add new
                                            </button>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol md='8' className='mb-4'>
                                            <MDBTable hover>
                                                <MDBTableHead>
                                                    <tr>
                                                        <th>id</th>
                                                        <th>type</th>
                                                        <th>name</th>
                                                        <th>units</th>
                                                        <th>price</th>
                                                    </tr>
                                                </MDBTableHead>
                                                <MDBTableBody>
                                                    {data.map((item) => (
                                                        <tr>
                                                            <td>{item.id}</td>
                                                            <td>{item.type}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.units}</td>
                                                            <td>{item.price}</td>
                                                            <td><button className="btnm">edit</button></td>
                                                        </tr>
                                                        ))}
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
        <h1 className="d-flex justify-content-center align-items-center">
            {/*{name}*/}
            <Loader />
        </h1>
    )
}