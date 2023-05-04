import React, {useState} from "react";
import './btn.css';
import {useDispatch, useSelector} from "react-redux";
import {deleteCalc, deleteFile, pickFile} from "../../actions/actions";

const FileContainer = ({name, keyprop, type, id, active}) => {
    const allFiles = useSelector((state) => state.files.allFiles);
    const thisFile = useSelector((state) => state.files.thisFile);

    // const [classC, setClassC] = useState("btnFile btn");
    const dispatch = useDispatch();
    const removeThisFileLocal = () => {
        dispatch(deleteCalc(keyprop))
    }
    const removeThisFileServer = () => {
        dispatch(deleteFile(id))
    }
    let classNameC = "btnFile btn"
    const pickThisFile = () => {
        // setClassC("btnFile btn fileActive")
        // classNameC = "btnFile btn fileActive"
    }

    if(type === "clientOnly"){
        return (
            <div onClick={pickThisFile} className={classNameC}>
                <button className="">
                    {name} local {keyprop}
                </button>
                <button className="btn" onClick={removeThisFileLocal}>X</button>
            </div>
        );
    } else {
        return (
            <div onClick={pickThisFile} className={classNameC}>
                <button className="btn">
                    {name} server {keyprop}
                </button>
                <button className="btn" onClick={removeThisFileServer}>X</button>
            </div>
        );
    }
};

export default FileContainer;