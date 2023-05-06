import React, {useState} from "react";
import './btn.css';
import {useDispatch, useSelector} from "react-redux";
import {deleteCalc, deleteFile, pickFile} from "../../actions/actions";

const FileContainer = ({name, keyprop, type, id, active, className}) => {
    const allFiles = useSelector((state) => state.files.allFiles);
    const thisFile = useSelector((state) => state.files.thisFile);

    const dispatch = useDispatch();
    const removeThisFileLocal = () => {
        dispatch(deleteCalc(keyprop))
    }
    const removeThisFileServer = () => {
        dispatch(deleteFile(id))
    }
    let classNameC = "btnFile btn"
    const pickThisFile = () => {

    }

    if(type === "clientOnly"){
        return (
            <div  className={className}>
                <div className="name">
                    {name}
                </div>
                <button className="btn" onClick={removeThisFileLocal}>X</button>
            </div>
        );
    } else {
        return (
            <div  className={className}>
                <div className="name">
                    {name}
                </div>
                <button className="btn" onClick={removeThisFileServer}>X</button>
            </div>
        );
    }
};

export default FileContainer;