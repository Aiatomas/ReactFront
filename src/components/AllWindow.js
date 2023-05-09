import React from "react";
import Nav from "./nav/Nav";
import AfterNav from "./calc/AfterNav";

function AllWindow() {

    return (
        <div>
            <Nav/>
            <AfterNav/>
            <div className="invisible">
                <p>p</p>
                <p>p</p>
            </div>
        </div>
    );
}

export default AllWindow;