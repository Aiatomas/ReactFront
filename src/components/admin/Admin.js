import React, {useState} from "react";
import {TableDevices} from "./table/TableDevices";
import {TableMaterials} from "./table/TableMaterials";
import {TableServices} from "./table/TableServices";
import {TableSessions} from "./table/TableSessions";
import {TableUsers} from "./table/TableUsers";
import {TableFiles} from "./table/TableFiles";
import {TableOrders} from "./table/TableOrders";
import {TableActions} from "./table/TableActions";
import {CollapseAi} from "./CollapseAi";
import Desktop from "./crm/Desktop/Desktop";
import './adminStylesCrm.css';
import CrmHeader from "./crm/CrmHeader";
import {TableStorage} from "./crm/crmStorage/TableStorage";
import CrmCash from "./crm/CrmCash/CrmCash";
import {CrmSettings} from "./crm/Settings/CrmSettings";
import Products from "./crm/Products/Products";
import CoefTest from "./crm/CoefTest";

export const Admin = () => {
    const [whoPick, setWhoPick] = useState("Робочий стіл");
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
                {/*<button onClick={pickFunc} className={"Чати" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Чати"}>{"Чати"}</button>*/}
                {/*<button onClick={pickFunc} className={"Доставка" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Доставка"}>{"Доставка"}</button>*/}
                <button onClick={pickFunc} className={"Завдання" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Завдання"}>{"Завдання"}</button>
                <button onClick={pickFunc} className={"Угоди" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Угоди"}>{"Угоди"}</button>
                <button onClick={pickFunc} className={"Каса" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Каса"}>{"Каса"}</button>
                {/*<button onClick={pickFunc} className={"Записи" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Записи"}>{"Записи"}</button>*/}
                {/*<button onClick={pickFunc} className={"Прайс-лист" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Прайс-лист"}>{"Прайс-лист"}</button>*/}
                <button onClick={pickFunc} className={"Склад" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Склад"}>{"Склад"}</button>
                {/*<button onClick={pickFunc} className={"Виробництво" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Виробництво"}>{"Виробництво"}</button>*/}
                {/*<button onClick={pickFunc} className={"Фінанси" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Фінанси"}>{"Фінанси"}</button>*/}
                {/*<button onClick={pickFunc} className={"Документи" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Документи"}>{"Документи"}</button>*/}
                <button onClick={pickFunc} className={"Статистика" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Статистика"}>{"Статистика"}</button>
                <button onClick={pickFunc} className={"Налаштування" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Налаштування"}>{"Налаштування"}</button>
                <button onClick={pickFunc} className={"sessions" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"sessions"}>{"sessions"}</button>
                <button onClick={pickFunc} className={"Продукти" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"Продукти"}>{"Продукти"}</button>
                <button onClick={pickFunc} className={"КоєфТест" === whoPick ? 'btn btnm adminFont fileActive' : 'btn btnm adminFont'} toclick={"КоєфТест"}>{"КоєфТест"}</button>
            </div>

            <div className="d-flex flex-column flex-grow-1 adminBackGround">

                {/*<SidebarAi/>*/}

                {/*<Table name={whoPick}/>*/}
                {whoPick === "Робочий стіл" &&
                    <Desktop/>
                }
                {whoPick === "Склад" &&
                    <TableStorage name={whoPick}/>
                }
                {whoPick === "Каса" &&
                    <CrmCash name={whoPick}/>
                }
                {whoPick === "Налаштування" &&
                    <CrmSettings name={whoPick}/>
                }
                {whoPick === "Продукти" &&
                    <Products name={whoPick}/>
                }
                {whoPick === "КоєфТест" &&
                    <CoefTest name={whoPick}/>
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