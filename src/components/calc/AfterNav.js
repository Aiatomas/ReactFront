import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import MainWindow from "./main/MainWindow";
import Files from "./files/Files";
import CreateOrder from "./createorder/CreateOrder";
import {useDispatch, useSelector} from "react-redux";
import {fetchPrices} from "../../actions/pricesAction";
import Loader from "./Loader";

const AfterNav = () => {
    const dispatch = useDispatch();
    const pricesIsLoading = useSelector(state => state.prices.pricesIsLoading);
    const pricesError = useSelector(state => state.prices.pricesError);
    useEffect(() => {
        dispatch(fetchPrices())
    }, [])

    if (pricesIsLoading) {
        return (
            <div>
                <Routes>
                    <Route path="/react" element={<Loader/>} />
                    <Route path="/react/files" element={<Loader/>} />
                    <Route path="/react/createOrder" element={<Loader/>} />
                    <Route path="/react/login" element={<Loader/>} />
                </Routes>
            </div>
        )
    }
    if (pricesError) {
        return (
            <div>
                <Routes>
                    <Route path="/react" element={<div>{pricesError}</div>} />
                    <Route path="/react/files" element={<div>{pricesError}</div>} />
                    <Route path="/react/createOrder" element={<div>{pricesError}</div>} />
                    <Route path="/react/login" element={<div>{pricesError}</div>} />
                </Routes>
            </div>
        )
    }
    return (
        <div>
            <Routes>
                <Route path="/react" element={<MainWindow/>} />
                <Route path="/react/files" element={<Files/>} />
                <Route path="/react/createOrder" element={<CreateOrder/>} />
                <Route path="/react/login" element={<div>Login</div>} />
            </Routes>
        </div>
    );
};

export default AfterNav;