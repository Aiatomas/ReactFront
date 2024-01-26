import React, { useState, useEffect } from 'react';
import axios from "axios";
import reactVT from 'react-vt';

const Numberr = () => {
    const [state, setState] = useState({
        leftField: null,
        rightField: null,
        inPageCount: 555,
        currentPage: 1,
        pageCount: null
    });

    useEffect(() => {
        reactVT(React);

        let data = {
            name: "Склад",
            inPageCount: state.inPageCount,
            currentPage: state.currentPage,
        };

        axios.post(`admin/gettable`, data)
            .then(response => {
                console.log(response.data);
                setState(prevState => ({
                    ...prevState,
                    leftField: response.data,
                    pageCount: Math.ceil(response.data.count / state.inPageCount)
                }));
            })
            .catch(error => {
                console.log(error.message);
            });
    }, []);

    const clickFunc = (item) => {
        // Your function logic
    };

    return (
        <div className="d-flex">
            <div id="leftContainer" className="w-50 min-vh-100 bg-light m-2 p-2">
                {state.leftField && (
                    <div className="border-1">
                        {state.leftField.rows.map(item => (
                            <div className="border-1 m-2 p-2" onClick={() => clickFunc(item)} key={item.id}>{item.id} {item.name}</div>
                        ))}
                    </div>
                )}
            </div>
            <div id="rightContainer" className="w-50 min-vh-100 bg-light m-2 p-2">
                <div className="border-1 m-2 p-2">items added to this check</div>
                {state.rightField && (
                    <div className="border-1">
                        {state.rightField.rows.map(item => (
                            <div className="border-1 m-2 p-2" key={item.id}>{item.id} {item.name}</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Numberr;