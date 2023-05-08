import React from "react";
import {useSelector} from "react-redux";
import {Digital} from "./Digital";

const OneFileInterface = () => {
    const thisFile = useSelector(state => state.files.thisFile);
    if(thisFile) {
        if(thisFile.calc === "digital"){
            return (
                <div>
                    <div className="">
                        <Digital/>
                    </div>
                </div>
            )
        } else if(thisFile.calc === "wide"){
            return (
                <div>
                    <div className="">
                        wide
                    </div>
                </div>
            )
        } else if(thisFile.calc === "photo"){
            return (
                <div>
                    <div className="">
                        photo
                    </div>
                </div>
            )
        } else if(thisFile.calc === "cup"){
            return (
                <div>
                    <div className="">
                        cup
                    </div>
                </div>
            )
        } else if(thisFile.calc === "post"){
            return (
                <div>
                    <div className="">
                        post
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            <div className="">nothing</div>
        </div>
    );
};

export default OneFileInterface;