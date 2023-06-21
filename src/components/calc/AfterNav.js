import React from "react";
import {Route, Routes} from "react-router-dom";
import MainWindow from "./main/MainWindow";
import Files from "./files/Files";
import CreateOrder from "./createorder/CreateOrder";
import {useSelector} from "react-redux";
import Loader from "./Loader";
import {Login} from "../login/Login";
import {CurrentUser} from "../usersettings/CurrentUser";
import {Admin} from "../admin/Admin";

const AfterNav = () => {
    const pricesIsLoading = useSelector(state => state.prices.pricesIsLoading);
    const pricesError = useSelector(state => state.prices.pricesError);

    if (pricesIsLoading) {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Loader/>} />
                    <Route path="/files" element={<Loader/>} />
                    <Route path="/createOrder" element={<Loader/>} />
                    <Route path="/login" element={<Loader/>} />
                    <Route path="/admin" element={<Loader/>} />
                    <Route path="/currentUser" element={<Loader/>} />
                </Routes>
            </div>
        )
    }
    if (pricesError) {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<div>{pricesError}</div>} />
                    <Route path="/files" element={<div>{pricesError}</div>} />
                    <Route path="/createOrder" element={<div>{pricesError}</div>} />
                    <Route path="/login" element={<div>{pricesError}</div>} />
                    <Route path="/admin" element={<div>{pricesError}</div>} />
                    <Route path="/currentUser" element={<div>{pricesError}</div>} />
                </Routes>
            </div>
        )
    }
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainWindow/>} />
                <Route path="/files" element={<Files/>} />
                <Route path="/createOrder" element={<CreateOrder/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/admin" element={<Admin/>} />
                <Route path="/currentUser" element={<CurrentUser/>} />
            </Routes>
        </div>
    );
};

export default AfterNav;