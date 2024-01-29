import React, { useState, useEffect } from 'react';
import ChartComponent from "./ChartsMy";

const CrmCash = () => {
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
            impactCoef = Math.max(impactCoef * (1 - reducedCoef), 1);

            // console.log(`impactCoef: ${impactCoef}, reducedCoef: ${reducedCoef}`);
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
        </div>
    );
};

export default CrmCash;

// в первом поле будет число используемое для цени, второе число показівающее конечній елемент прогрессии коєфициента,
//     3 число сам коєфициент применяемій по отношению к 1 числу в зависимости от 4 числа олицетворяющего колличество
// сложений 1 числа, 5 число - переменная влияющая на изгиб спада силі влияния коєфициента на число с ростом его колличества