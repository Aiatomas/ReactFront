import React, {useState} from "react";
import Pagination from "./pagination/Pagination";
import Form from 'react-bootstrap/Form';
import {TableDevices} from "./table/TableDevices";
import {TableMaterials} from "./table/TableMaterials";
import {TableServices} from "./table/TableServices";
import {TableSessions} from "./table/TableSessions";
import {TableUsers} from "./table/TableUsers";
import {TableFiles} from "./table/TableFiles";
import {TableOrders} from "./table/TableOrders";
import {TableActions} from "./table/TableActions";

export const Admin = () => {
    const [whoPick, setWhoPick] = useState("devices");
    let buttons = [];
    // buttons.push("devices")
    // buttons.push("materials")
    // buttons.push("services")
    buttons.push("sessions")
    buttons.push("users")
    // buttons.push("files")
    // buttons.push("orders")
    // buttons.push("actions")
    const pickFunc = (e) => {
        setWhoPick(e.target.getAttribute("toclick"));
    };

    return (
        <div>
            <div className="d-flex justify-content-center align-content-center align-items-center">
                {buttons.map((item) => (
                    <button onClick={pickFunc} className={item === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toclick={item} key={item}>{item}</button>
                ))}
            </div>
            {/*<Table name={whoPick}/>*/}
            {whoPick === "devices" &&
                <TableDevices name={whoPick}/>
            }
            {whoPick === "materials" &&
                <TableMaterials name={whoPick}/>
            }
            {whoPick === "services" &&
                <TableServices name={whoPick}/>
            }
            {whoPick === "sessions" &&
                <TableSessions name={whoPick}/>
            }
            {whoPick === "users" &&
                <TableUsers name={whoPick}/>
            }
            {whoPick === "files" &&
                <TableFiles name={whoPick}/>
            }
            {whoPick === "orders" &&
                <TableOrders name={whoPick}/>
            }
            {whoPick === "actions" &&
                <TableActions name={whoPick}/>
            }
        </div>
    )
}