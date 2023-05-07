import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import FileContainer from "../btn/FileContainer";
import "./Files.css"
import {fetchAllFiles} from "../../../actions/allFilesAction";
import {pickFile} from "../../../actions/fileAction";
import {Link} from "react-router-dom";

const FilesContainer = () => {
    const files = useSelector((state) => state.files.allFiles);
    const isLoading = useSelector(state => state.files.isLoading);
    const error = useSelector(state => state.files.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllFiles())
    }, [])

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    const handleItemClick = (item, index) => {
        dispatch(pickFile(index));
    }

    return (
        <div>
            <div className="containerForFiles">
                <div className="FilesContainerRelative slider-container position-relative">
                    <div className="FilesContainer slider-track position-absolute d-flex">
                        {/*<button className="btn btn-sm formatC addMoreFiles mousePointer">+</button>*/}
                        {files.map((item, index) => (
                            <FileContainer
                                onClick={() => handleItemClick(item, index)}
                                key={item.id}
                                keyprop={item.id} type={item.type} name={item.name}/>
                        ))}
                        <Link to="/react"><button className="btn btnm btn-sm">+</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilesContainer;