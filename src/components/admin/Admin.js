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
        <div className="d-flex">
            <div className="d-flex flex-column">
                {/*{buttons.map((item) => (*/}
                {/*    <button onClick={pickFunc} className={item === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toclick={item} key={item}>{item}</button>*/}
                {/*))}*/}
                <button onClick={pickFunc} className={"Робочий стіл" === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toclick={"Робочий стіл"}>{"Робочий стіл"}</button>
                <button onClick={pickFunc} className={"Чати" === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toclick={"Чати"}>{"Чати"}</button>
                <button onClick={pickFunc} className={"Доставка" === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toclick={"Доставка"}>{"Доставка"}</button>
                <button onClick={pickFunc} className={"Завдання" === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toclick={"Завдання"}>{"Завдання"}</button>
                <button onClick={pickFunc} className={"Угоди" === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toclick={"Угоди"}>{"Угоди"}</button>
                <button onClick={pickFunc} className={"Каса" === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toclick={"Каса"}>{"Каса"}</button>
                <button onClick={pickFunc} className={"Записи" === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toclick={"Записи"}>{"Записи"}</button>
                <button onClick={pickFunc} className={"Прайс-лист" === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toclick={"Прайс-лист"}>{"Прайс-лист"}</button>
                <button onClick={pickFunc} className={"Склад" === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toclick={"Склад"}>{"Склад"}</button>
                <button onClick={pickFunc} className={"Виробництво" === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toclick={"Виробництво"}>{"Виробництво"}</button>
                <button onClick={pickFunc} className={"Фінанси" === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toclick={"Фінанси"}>{"Фінанси"}</button>
                <button onClick={pickFunc} className={"Документи" === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toclick={"Документи"}>{"Документи"}</button>
                <button onClick={pickFunc} className={"Статистика" === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toclick={"Статистика"}>{"Статистика"}</button>
                <button onClick={pickFunc} className={"Налаштування" === whoPick ? 'btn btnm fileActive' : 'btn btnm'} toclick={"Налаштування"}>{"Налаштування"}</button>
                <CollapseAi/>
            </div>
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
    )
}