import React, {useState} from "react";
import Pagination from "./pagination/Pagination";
import Form from 'react-bootstrap/Form';

export const Admin = () => {
    const [pageCount, setPageCount] = useState(20);
    const [currentPage, setCurrentPage] = useState(7);
    const setPageCountF = (value) => {
        setPageCount(value.target.value);
    };
    return (
        <>
            <Pagination pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <Form.Select onChange={setPageCountF} value={pageCount}>
                <option>Open this select menu</option>
                <option value="1">1</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="250">250</option>
                <option value="500">500</option>
            </Form.Select>
        </>
    )
}