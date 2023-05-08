import React from "react";
import {Format} from "./Format";
import {Druk} from "./Druk";
import {View} from "./View";

export const FormatDrukView = () => {

    return (
        <div className="d-flex">
            <Format/>
            <Druk/>
            <View/>
        </div>
    );
};