import React, {useEffect, useState} from "react";
import MainBtn from "../btn/MainBtn";
import {useDispatch, useSelector} from "react-redux";
import FileContainer from "../btn/FileContainer";
import "./Files.css"
import {pickFile} from "../../actions/actions";
import {fetchAllFiles} from "../../actions/allFiles";

const Files = () => {
    const files = useSelector((state) => state.files.allFiles);
    const isLoading = useSelector(state => state.files.isLoading);
    const error = useSelector(state => state.files.error);
    // const thisFile = useSelector((state) => state.files.thisFile);
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        dispatch(fetchAllFiles())
    }, [])

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    console.log(files);
    const handleItemClick = (item, index) => {
        setSelectedItem(item);
        dispatch(pickFile(index));
    }

    return (
        <div>
            <div>Files ()</div>
            <div className="containerForFiles">
                <div className="FilesContainerRelative slider-container position-relative">
                    <div className="FilesContainer slider-track position-absolute d-flex">
                        {/*<button className="btn btn-sm formatC addMoreFiles mousePointer">+</button>*/}
                        {files.map((item, index) => (
                            <FileContainer
                                className={"btnFile btn"}
                                onClick={() => handleItemClick(item, index)}
                                key={item.id}
                                keyprop={item.id} type={item.type} id={item.id} name={item.name}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Files;