import React from 'react';
import axios from "axios";
import reactVT from 'react-vt';

class Numberr extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leftField: null,
            rightField: null,
            inPageCount: 555,
            currentPage: 1,
            pageCount: null
        };
    }

    componentDidMount() {
        reactVT(React);

        let data = {
            name: "Склад",
            inPageCount: this.state.inPageCount,
            currentPage: this.state.currentPage,
        }

        axios.post(`admin/gettable`, data)
            .then(response => {
                console.log(response.data);
                this.setState({
                    leftField: response.data,
                    pageCount: Math.ceil(response.data.count / this.state.inPageCount)
                });
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    // clickFunc = (item) => {
    //     // Your function logic
    // }

    render() {
        return (
            <div className="d-flex">
                <div id="leftContainer" className="w-50 min-vh-100 bg-light m-2 p-2">
                    {this.state.leftField && (
                        <div className="border-1">
                            {this.state.leftField.rows.map(item => (
                                <div className="border-1 m-2 p-2" onClick={() => this.clickFunc(item)} key={item.id}>{item.id} {item.name}</div>
                            ))}
                        </div>
                    )}
                </div>
                <div id="rightContainer" className="w-50 min-vh-100 bg-light m-2 p-2">
                    <div className="border-1 m-2 p-2">items added to this check</div>
                    {this.state.rightField && (
                        <div className="border-1">
                            {this.state.rightField.rows.map(item => (
                                <div className="border-1 m-2 p-2" key={item.id}>{item.id} {item.name}</div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Numberr;