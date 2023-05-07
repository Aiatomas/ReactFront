import React from "react";
import {useSelector} from "react-redux";

const OneFileInterface = () => {
    const thisFile = useSelector(state => state.files.thisFile);
    if(thisFile) {
        return (
            <div>
                <div className="">OneFileInterface</div>
            </div>
        )
    }

    return (
        <div>
            <div className="">nothing</div>
        </div>
    );
};

export default OneFileInterface;