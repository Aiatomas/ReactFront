import React, {useState, useEffect} from "react";
import Loader from "../../calc/Loader";
import axios from "axios";

export const Table = ({name}) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get(`admin/${name}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);


    return (
        <h1 className="d-flex justify-content-center align-content-center align-items-center">
            {/*{name}*/}
            <Loader />
        </h1>
    )
}