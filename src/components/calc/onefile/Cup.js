import React from "react";
import {Materials} from "./materialsanddop/Materials";
import CupDraggable from "../../cup/CupDraggable";
import ThreeScene from "../../../modules/three/ThreeScene";

export const Cup = () => {
    return (
        <div style={{display: 'flex', cursor: 'move'}}>
            <Materials/>
            {/*<CupDraggable/>*/}
            <ThreeScene />
        </div>
    )
}