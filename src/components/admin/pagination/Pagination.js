import React, {useState, useEffect} from 'react';
import FileContainer from "../../calc/btn/FileContainer";
import {GET_CURRENT_USER_REQUEST} from "../../../actions/currentUserActions";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Loader from "../../calc/Loader";

const Pagination = ({name, data, setData, inPageCount, setInPageCount, currentPage, setCurrentPage, pageCount, setPageCount}) => {
    const [pag, setPag] = useState([]);
    const setPageCountF = (value) => {
        setInPageCount(parseInt(value.target.value));

        let dataa = {
            name: name,
            inPageCount: parseInt(value.target.value),
            currentPage: currentPage,
        }
        axios.post(`admin/gettable`, dataa)
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
        setCurrentPage(parseInt(e.target.getAttribute("toClick")))

        let dataa = {
            name: name,
            inPageCount: inPageCount,
            currentPage: parseInt(e.target.getAttribute("toClick")),
        }
        axios.post(`admin/gettable`, dataa)
            .then(response => {
                setData(response.data)
                let pageCountt = Math.ceil(response.data.count / inPageCount)
                setPageCount(pageCountt)
                let toPag = [];
                for (let i = parseInt(e.target.getAttribute("toClick"))-3; i < parseInt(e.target.getAttribute("toClick"))+4; i++){
                    if(i === parseInt(e.target.getAttribute("toClick"))-3){
                        if(parseInt(e.target.getAttribute("toClick")) === 1){

                        } else {

                        }
                    }
                    if(i === parseInt(e.target.getAttribute("toClick"))){
                        toPag.push(i)

                    } else {
                        if(i > 0 && i <= pageCountt){
                            toPag.push(i)
                        }
                    }
                    if(i === parseInt(e.target.getAttribute("toClick"))+3){
                        if(parseInt(e.target.getAttribute("toClick")) >= pageCountt){

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
        <div>
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
        </div>
    );
};

export default Pagination;