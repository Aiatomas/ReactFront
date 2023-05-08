import React from "react";
import Logo from "./logo/Logo";
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';

const Nav = () => {

    return (
        <div className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="mainLogo" href="https://printpeaks.com.ua">
                    <div className="">
                        <Logo/>
                    </div>
                </a>
                    <Link to="/react"><Button variant="outline-warning" className="btnm">1</Button>{' '}</Link>
                    <Link to="/react/files"><Button variant="outline-warning" className="btnm">2</Button>{' '}</Link>
                    <Link to="/react/createOrder"><Button variant="outline-warning" className="btnm">3</Button>{' '}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar2"
                        aria-controls="offcanvasNavbar2">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end menuInPhone" tabIndex="-1" id="offcanvasNavbar2"
                     aria-labelledby="offcanvasNavbar2Label">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Меню</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <Link to="/react/login"><button className="btn">login</button></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;