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
import {Button, Collapse} from "react-bootstrap";
import {CollapseAi} from "./CollapseAi";
import Desktop from "./crm/Desktop/Desktop";
import Sklad from "./crm/Sklad";
import './adminStylesCrm.css';
import SidebarAi from "./SidebarAi";
import CrmHeader from "./crm/CrmHeader";

export const Admin = () => {
    const [whoPick, setWhoPick] = useState("devices");
    let buttons = [];
    // buttons.push("devices")
    // buttons.push("materials")
    // buttons.push("services")

    buttons.push("Робочий стіл")
    buttons.push("Чати")
    buttons.push("Доставка")
    buttons.push("Завдання")
    buttons.push("Угоди")
    buttons.push("Каса")
    buttons.push("Записи")
    buttons.push("Прайс-лист")
    buttons.push("Склад")
    buttons.push("Виробництво")
    buttons.push("Фінанси")
    buttons.push("Документи")
    buttons.push("Статистика")
    buttons.push("Налаштування")

    buttons.push("sessions")
    buttons.push("users")
    // buttons.push("files")
    // buttons.push("orders")
    // buttons.push("actions")
    const pickFunc = (e) => {
        setWhoPick(e.target.getAttribute("toclick"));
    };

    return (
        <div className="d-flex adminFont">
            <div className="d-flex flex-column text adminFont">
                {/*{buttons.map((item) => (*/}
                {/*    <button onClick={pickFunc} className={item === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toclick={item} key={item}>{item}</button>*/}
                {/*))}*/}
                <button onClick={pickFunc} className={"Робочий стіл" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Робочий стіл"}>{"Робочий стіл"}</button>
                <CollapseAi whoPick={whoPick} setWhoPick={setWhoPick}/>
                <button onClick={pickFunc} className={"Чати" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Чати"}>{"Чати"}</button>
                <button onClick={pickFunc} className={"Доставка" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Доставка"}>{"Доставка"}</button>
                <button onClick={pickFunc} className={"Завдання" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Завдання"}>{"Завдання"}</button>
                <button onClick={pickFunc} className={"Угоди" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Угоди"}>{"Угоди"}</button>
                <button onClick={pickFunc} className={"Каса" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Каса"}>{"Каса"}</button>
                <button onClick={pickFunc} className={"Записи" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Записи"}>{"Записи"}</button>
                <button onClick={pickFunc} className={"Прайс-лист" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Прайс-лист"}>{"Прайс-лист"}</button>
                <button onClick={pickFunc} className={"Склад" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Склад"}>{"Склад"}</button>
                <button onClick={pickFunc} className={"Виробництво" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Виробництво"}>{"Виробництво"}</button>
                <button onClick={pickFunc} className={"Фінанси" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Фінанси"}>{"Фінанси"}</button>
                <button onClick={pickFunc} className={"Документи" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Документи"}>{"Документи"}</button>
                <button onClick={pickFunc} className={"Статистика" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Статистика"}>{"Статистика"}</button>
                <button onClick={pickFunc} className={"Налаштування" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Налаштування"}>{"Налаштування"}</button>
                <button onClick={pickFunc} className={"sessions" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"sessions"}>{"sessions"}</button>
            </div>

            <div className="d-flex flex-column flex-grow-1 adminBackGround">
                <CrmHeader whoPick={whoPick}/>

                {/*<SidebarAi/>*/}

                {/*<Table name={whoPick}/>*/}
                {whoPick === "Робочий стіл" &&
                    <Desktop/>
                }
                {whoPick === "Склад" &&
                    <Sklad/>
                }


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

        </div>
    )
}