import React, {useState} from "react";
import Pagination from "./pagination/Pagination";
import Form from 'react-bootstrap/Form';
import {Table} from "./table/Table";

export const Admin = () => {
    const [whoPick, setWhoPick] = useState("devices");
    let buttons = [];
    buttons.push("devices")
    buttons.push("materials")
    buttons.push("services")
    const pickFunc = (e) => {
        setWhoPick(e.target.getAttribute("toClick"));
    };

    return (
        <div>
            <div className="d-flex justify-content-center align-content-center align-items-center">
                {buttons.map((item) => (
                    <button onClick={pickFunc} className={item === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toClick={item} key={item}>{item}</button>
                ))}
            </div>
            {/*<Table name={whoPick}/>*/}
            {whoPick === "devices" &&
                <Table name={whoPick}/>
            }
            {whoPick === "materials" &&
                <Table name={whoPick}/>
            }
            {whoPick === "services" &&
                <Table name={whoPick}/>
            }
        </div>
    )
}