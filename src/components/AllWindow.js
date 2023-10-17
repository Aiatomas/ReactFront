import React, {useEffect} from "react";
import "./allStyles.css"
import Nav from "./nav/Nav";
import AfterNav from "./calc/AfterNav";
import {fetchPrices, fetchPrices2} from "../actions/pricesAction";
import {useDispatch} from "react-redux";
import Footer from "./footer/Footer";
import PhotoLayoutEditor from "./editor";

function AllWindow() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPrices())
    }, [])
    return (
        <div>
            <Nav/>
            <AfterNav/>
            <Footer/>
            {/*<PhotoLayoutEditor />*/}
        </div>
    );
}

export default AllWindow;