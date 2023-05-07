import React from "react";
import "./Files.css"
import FilesContainer from "./FilesContainer";
import OneFileInterface from "../onefile/OneFileInterface";

const Files = () => {
    return (
        <div>
            <FilesContainer/>
            <OneFileInterface/>
        </div>
    );
};

export default Files;