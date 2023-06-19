import React, {useEffect} from "react";
import "./allStyles.css"
import Nav from "./nav/Nav";
import AfterNav from "./calc/AfterNav";
import {fetchPrices} from "../actions/pricesAction";
import {useDispatch} from "react-redux";
import Footer from "./footer/Footer";

function AllWindow() {
    const dispatch = useDispatch();
    console.log("AllWindow");
    useEffect(() => {
        dispatch(fetchPrices())
    }, [])
    return (
        <div>
            <Nav/>
            <AfterNav/>
            <Footer/>
        </div>
    );
}

export default AllWindow;