import React, {useState, useEffect} from 'react';
import Form from "react-bootstrap/Form";
import axios from "axios";
import {Pagination} from "react-bootstrap";

const PaginationMy = ({name, data, setData, inPageCount, setInPageCount, currentPage, setCurrentPage, pageCount, setPageCount, typeSelect, url = "admin/gettable"}) => {
    const [pag, setPag] = useState([]);
    const setPageCountF = (value) => {
        setInPageCount(parseInt(value.target.value));

        let dataa = {
            name: name,
            inPageCount: parseInt(value.target.value),
            currentPage: parseInt(currentPage),
            search: typeSelect
        }
        axios.post(url, dataa)
            .then(response => {
                setData(response.data)
                let pageCountt = Math.ceil(response.data.count / parseInt(value.target.value))
                setPageCount(pageCountt)
                let toPag = [];
                for (let i = currentPage-3; i < currentPage+4; i++){
                    if(i === currentPage-3){
                        if(currentPage === 1){

                        } else {

                        }
                    }
                    if(i === currentPage){
                        toPag.push(i)

                    } else {
                        if(i > 0 && i <= pageCountt){
                            toPag.push(i)
                        }
                    }
                    if(i === currentPage+3){
                        if(currentPage >= pageCountt){

                        } else {

                        }
                    }
                }
                setPag(toPag)
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    useEffect(() => {
        let toPag = [];
        if(pageCount === 1 || pageCount === "1"){
            // pag.push("<")
            if(currentPage === 1){
                toPag.push(1)
            } else {
                toPag.push(1)
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
                    toPag.push(i)

                } else {
                    if(i > 0 && i <= pageCount){
                        // console.log(`dobavlena stranica: ${i}`);
                        toPag.push(i)
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
        setPag(toPag)
    }, []);

    const clickFunc = (e) => {
        setCurrentPage(parseInt(e.target.getAttribute("toclick")))

        let dataa = {
            name: name,
            inPageCount: inPageCount,
            currentPage: parseInt(e.target.getAttribute("toclick")),
            search: typeSelect
        }
        axios.post(url, dataa)
            .then(response => {
                setData(response.data)
                let pageCountt = Math.ceil(response.data.count / inPageCount)
                setPageCount(pageCountt)
                let toPag = [];
                for (let i = parseInt(e.target.getAttribute("toclick"))-3; i < parseInt(e.target.getAttribute("toclick"))+4; i++){
                    if(i === parseInt(e.target.getAttribute("toclick"))-3){
                        if(parseInt(e.target.getAttribute("toclick")) === 1){

                        } else {

                        }
                    }
                    if(i === parseInt(e.target.getAttribute("toclick"))){
                        toPag.push(i)

                    } else {
                        if(i > 0 && i <= pageCountt){
                            toPag.push(i)
                        }
                    }
                    if(i === parseInt(e.target.getAttribute("toclick"))+3){
                        if(parseInt(e.target.getAttribute("toclick")) >= pageCountt){

                        } else {

                        }
                    }
                }
                setPag(toPag)
            })
            .catch(error => {
                console.log(error.message);
            })
    }



    return (
        <div className="d-flex adminPagination">
            <div className="adminFontTable">
                <Form.Select className="adminFontTable" name="pagination" onChange={setPageCountF} value={inPageCount}>
                    <option className="adminFontTable" value="1">1</option>
                    <option className="adminFontTable" value="20">20</option>
                    <option className="adminFontTable" value="30">30</option>
                    <option className="adminFontTable" value="50">50</option>
                    <option className="adminFontTable" value="100">100</option>
                    <option className="adminFontTable" value="250">250</option>
                    <option className="adminFontTable" value="500">500</option>
                </Form.Select>
            </div>
            <Pagination size="sm">
                {pag.map((item) => (
                    <Pagination.Item className="adminFontTable pagButton" onClick={clickFunc} toclick={item} key={item} active={item === currentPage}>
                        {item}
                    </Pagination.Item>
                ))}
            </Pagination>
            {/*{pag.map((item) => (*/}
            {/*    <button onClick={clickFunc} className={item === currentPage ? 'btn btnm adminFontTable pagButton fileActive' : 'btn btnm adminFontTable pagButton'} toclick={item} key={item}>{item}</button>*/}
            {/*))}*/}
        </div>
    );
};

export default PaginationMy;