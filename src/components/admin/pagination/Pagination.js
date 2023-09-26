import React, {useState, useEffect} from 'react';
import FileContainer from "../../calc/btn/FileContainer";
import {GET_CURRENT_USER_REQUEST} from "../../../actions/currentUserActions";

const Pagination = ({pageCount, currentPage, setCurrentPage}) => {
    // const [currentPage, setCurrentPage] = useState(currentPage);

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
    </div>;
};

export default Pagination;