import React, {useState, useEffect} from 'react';
import FileContainer from "../../calc/btn/FileContainer";
import {GET_CURRENT_USER_REQUEST} from "../../../actions/currentUserActions";
import Form from "react-bootstrap/Form";

const Pagination = () => {
    const [pageCount, setPageCount] = useState(20);
    const [currentPage, setCurrentPage] = useState(7);

    const setPageCountF = (value) => {
        setPageCount(value.target.value);
    };

    let pag = [];
    if(pageCount === 1 || pageCount === "1"){
        // pag.push("<")
        if(currentPage === 1){
            pag.push(1)
        } else {
            pag.push(1)
        }
        // pag.push(">")
    }
    else {
        for (let i = currentPage-3; i < currentPage+4; i++){
            // console.log(`i sei4as: ${i}`);
            if(i === currentPage-3){
                if(currentPage === 1){
                    // pag.push("<")
                } else {
                    // pag.push("<")
                }
            }
            if(i === currentPage){
                // console.log(`dobavlena active stranica: ${i}`);
                pag.push(i)

            } else {
                if(i > 0 && i <= pageCount){
                    // console.log(`dobavlena stranica: ${i}`);
                    pag.push(i)
                }
            }
            if(i === currentPage+3){
                if(currentPage >= pageCount){
                    // pag.push(">")
                } else {
                    // pag.push(">")
                }
            }
        }
    }

    const clickFunc = (e) => {
        setCurrentPage(parseInt(e.target.getAttribute("toClick")))
    }

    return <div>
        {pag.map((item) => (
            <button onClick={clickFunc} className={item === currentPage ? 'btnm fileActive' : 'btnm'} toClick={item} key={item}>{item}</button>
        ))}
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
    </div>;
};

export default Pagination;