import React from "react";
import Logo from "./logo/Logo";
import {Link} from "react-router-dom";

const Nav = () => {

    return (
        <div className="navbar navbar-expand-lg">
            <Logo/>
            <div>
                <Link to="/react"><button className="btn">(1)</button></Link>
                <Link to="/react/files"><button className="btn">(2)</button></Link>
                <Link to="/react/createOrder"><button className="btn">(3)</button></Link>
                <Link to="/react/login"><button className="btn">login</button></Link>
            </div>
        </div>
    );
};

export default Nav;