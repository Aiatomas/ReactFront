import React, {useState, useEffect} from 'react';
import FileContainer from "../../calc/btn/FileContainer";
import {GET_CURRENT_USER_REQUEST} from "../../../actions/currentUserActions";
import Form from "react-bootstrap/Form";

const Pagination = ({data, inPageCount, setInPageCount, currentPage, setCurrentPage}) => {
    const [pageCount, setPageCount] = useState(1);

    const setPageCountF = (value) => {
        setInPageCount(value.target.value);
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
        <div>Кількість айтемів у сторінці:
            <Form.Select onChange={setPageCountF} value={inPageCount}>
                <option value="1">1</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="250">250</option>
                <option value="500">500</option>
            </Form.Select>
        </div>
        {pag.map((item) => (
            <button onClick={clickFunc} className={item === currentPage ? 'btn btnm fileActive' : 'btn btnm'} toClick={item} key={item}>{item}</button>
        ))}
    </div>;
};

export default Pagination;