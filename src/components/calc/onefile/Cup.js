import React from "react";
import {Materials} from "./materialsanddop/Materials";
import CupDraggable from "../../cup/CupDraggable";

export const Cup = () => {
    return (
        <div>
            <Materials/>
            <CupDraggable/>
        </div>
    )
}