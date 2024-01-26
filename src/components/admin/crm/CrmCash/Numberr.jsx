import React, {useEffect, useState} from 'react';
import axios from "axios";
import SearchForm from "../SearchForm";

const Numberr = () => {
    const [leftField, setLeftField] = useState(null); // modify to empty array
    const [rightField, setRightField] = useState(null); // modify to empty array

    const [inPageCount, setInPageCount] = useState(555);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(null);

    useEffect(() => {
        let data = {
            name: "Склад",
            inPageCount: inPageCount,
            currentPage: currentPage,
        }
        axios.post(`admin/gettable`, data)
            .then(response => {
                console.log(response.data);
                setLeftField(response.data)
                setPageCount(Math.ceil(response.data.count / inPageCount))
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);

    const handleLeftFieldChange = (event) => {
      setLeftField([...leftField, event.target.value]); // Modify to push value into array
    }

    const handleRightFieldChange = (event) => {
      setRightField([...rightField, event.target.value]); // Modify to push value into array
    }

    return (
        <div className="d-flex">
            <div id="leftContainer" className="w-50 min-vh-100 bg-light m-2 p-2">
                {leftField && (
                    <div className="border-1">
                        {leftField.rows.map(item => (
                            <div className="border-1 m-2 p-2" key={item.id}>{item.id} {item.name}</div>
                        ))}
                    </div>
                )}
            </div>
            <div id="rightContainer" className="w-50 min-vh-100 bg-light m-2 p-2">
                <div className="border-1 m-2 p-2">items added to this check</div>
                {rightField && (
                    <div className="border-1">
                        {rightField.rows.map(item => (
                            <div className="border-1 m-2 p-2" key={item.id}>{item.id} {item.name}</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Numberr;