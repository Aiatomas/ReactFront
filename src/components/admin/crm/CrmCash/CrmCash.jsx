import React, {useEffect, useState} from "react";
import axios from "axios";
import './CrmCash.css';
import Form from "react-bootstrap/Form";

const CrmCash = () => {
    const [price, setPrice] = useState(1);
    const [things, setThings] = useState([]);
    const [selectedThings, setSelectedThings] = useState([]);

    const handleThingClick = (thing) => {
        // setThings(things.filter((t) => t !== thing));
        setSelectedThings([...selectedThings, thing]);
    };

    const handleThingClick2 = (thing) => {
      setSelectedThings(selectedThings.filter((t) => t !== thing));
      setThings([...things, thing]);
    };

    useEffect(() => {
        let data = {
            name: "Склад",
            inPageCount: 99999,
            currentPage: 1,
        };
        axios.post(`admin/gettable`, data)
            .then(response => {
                console.log(response.data);
                setThings(response.data.rows)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);

    return (
        <div className="d-flex justify-content-space-between">
            <div className="card">
                <div>

                </div>
                {things.map((thing, index) => (
                    <p key={index} onClick={() => handleThingClick(thing)} className="thing">
                        {thing.name}
                    </p>
                ))}
            </div>
            <div className="card">
                {selectedThings.map((thing, index) => (
                    <div key={index} className="d-flex thing">
                        <p className="">{thing.name}</p>
                        <button onClick={() => handleThingClick2(thing)} className="">remove</button>
                        <button className="">-</button>
                        <Form.Control
                            type="number"
                            placeholder=""
                            // value={productName}
                            className=""
                            // onChange={(event) => setProductName(event.target.value)}
                        />
                        <button className="">+</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CrmCash;