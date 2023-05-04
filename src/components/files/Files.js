import React, {useEffect, useState} from "react";
import MainBtn from "../btn/MainBtn";
import {useDispatch, useSelector} from "react-redux";
import FileContainer from "../btn/FileContainer";
import "./Files.css"

const Files = () => {
    const files = useSelector((state) => state.files.allFiles);
    const thisFile = useSelector((state) => state.files.thisFile);
    const dispatch = useDispatch();
    // const [allFiles, setAllFiles] = useState(files);

    return (
        <div>
            <div>Files ()</div>
            <div className="containerForFiles">
                <div className="FilesContainerRelative slider-container position-relative">
                    <div className="FilesContainer slider-track position-absolute d-flex">
                        {/*<button className="btn btn-sm formatC addMoreFiles mousePointer">+</button>*/}
                        {files.map((item, index) => (
                            <FileContainer key={index} keyprop={index} type={item.type} id={item.id} active={item.active} name={item.name}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Files;