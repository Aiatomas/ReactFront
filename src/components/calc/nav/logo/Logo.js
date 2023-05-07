import React from "react";
import logo from './logo.svg';
import './Logo.css';

const Logo = () => {
    return (
        <a className="mainLogo" href="https://printpeaks.com.ua">
            <img src={logo} alt="PrintPeaks" className="logoImg"/>
        </a>
    );
};

export default Logo;