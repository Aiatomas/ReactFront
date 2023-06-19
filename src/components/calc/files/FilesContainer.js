import React from "react";
import {useSelector} from "react-redux";
import FileContainer from "../btn/FileContainer";
import "./Files.css"
import {Link} from "react-router-dom";
import {Spinner} from "react-bootstrap";

const FilesContainer = () => {
    useSelector(state => state.files.thisFile);
    const files = useSelector((state) => state.files.allFiles);
    const isLoading = useSelector(state => state.files.isLoading);
    const error = useSelector(state => state.files.error);

    if (isLoading) {
        return <Spinner className="m-auto" animation="grow" />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div className="containerForFiles">
                <div className="FilesContainerRelative slider-container position-relative">
                    <div className="FilesContainer slider-track position-absolute d-flex">
                        {files.map((item) => (
                            <FileContainer
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