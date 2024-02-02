import React, { useState, useEffect } from 'react';
import ChartComponent from "./ChartComponent";
import ChartStoled2 from "./ChartStoled2";
import ChartStoled from "./ChartsStoled";

const CoefTest = () => {
    const [price, setPrice] = useState(1);
    const [coefficient, setCoefficient] = useState(3);
    const [reducerCoef, setReducerCoef] = useState(1);
    const [quantity, setQuantity] = useState(1000);
    const [totalPrice, setTotalPrice] = useState(0);
    const [dataForCharts, setDataForCharts] = useState([]);

    useEffect(() => {
        let dataForChars = []
        let impactCoef = coefficient
        let reducedCoef = reducerCoef / 100;
        for (let i = 0; i < quantity; i++) {
            let priceForThisUnit = price * impactCoef


            reducedCoef = reducerCoef / 100;
            impactCoef = Math.max(impactCoef * (1 - reducedCoef));

            let unitCharts = {price: priceForThisUnit, count: i+1}
            dataForChars.push(unitCharts)
        }
        setDataForCharts(dataForChars)
    }, [price, reducerCoef, coefficient, quantity]);

    return (
        <div>
            <div className="d-flex">
                <div>
                    <input type="number" onChange={(e) => setPrice(parseFloat(e.target.value))} value={price}/>
                    <label>-Ціна</label>
                </div>
                <div>
                    <input type="number" step="1" onChange={(e) => setQuantity(parseFloat(e.target.value))}
                           value={quantity}/>
                    <label>-Кількість</label>
                </div>
            </div>
            <div className="d-flex">
                <div>
                    <input type="number" step="0.01" onChange={(e) => setCoefficient(parseFloat(e.target.value))}
                           value={coefficient}/>
                    <label>-Коєфіцієнт</label>
                </div>
                <div>
                    <input type="number" step="0.01" onChange={(e) => setReducerCoef(parseFloat(e.target.value))}
                           value={reducerCoef}/>
                    <label>-% зниження єффекту коєфіцієнта за одиницю кількості</label>
                </div>
            </div>
            <p>Total Price: {totalPrice}</p>

            <div>
                <ChartComponent aapl={dataForCharts}/>
            </div>

            {/*<div>*/}
            {/*    <ChartStoled aapl={dataForCharts}/>*/}
            {/*</div>*/}
        </div>
    );
};

export default CoefTest;