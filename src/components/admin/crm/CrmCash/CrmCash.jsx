// import React, { useState, useEffect } from 'react';
//
// const CrmCash = () => {
//     const [price, setPrice] = useState(1);
//     const [endElement, setEndElement] = useState(4);
//     const [coefficient, setCoefficient] = useState(3);
//     const [numberOfAdditions, setNumberOfAdditions] = useState(5);
//     const [influenceCurve, setInfluenceCurve] = useState(2);
//     const [totalPrice, setTotalPrice] = useState(0);
//
//     useEffect(() => {
//         let overallImpact = 0;
//         let impact = 1;
//         const dampingFactor = endElement;
//         const additions = numberOfAdditions;
//
//         // apply coefficient in a loop
//         for (let i = 0; i < additions; i++) {
//             // calculate this iteration's impact
//             let thisImpact = impact * coefficient;
//             // add this iteration's impact to overall
//             overallImpact += thisImpact;
//             // apply damping
//             impact /= dampingFactor;
//         }
//
//         // divide the overall impact by the influence curve
//         let totalPrice = price * overallImpact / influenceCurve;
//
//         setTotalPrice(totalPrice);
//     }, [price, endElement, coefficient, numberOfAdditions, influenceCurve]);
//
//     return (
//         <div>
//             <label>Enter price:</label>
//             <input type="number" onChange={(e) => setPrice(parseFloat(e.target.value))} value={price} />
//             <label>Enter end element (damping factor):</label>
//             <input type="number" onChange={(e) => setEndElement(parseFloat(e.target.value))} value={endElement} />
//             <label>Enter coefficient:</label>
//             <input type="number" onChange={(e) => setCoefficient(parseFloat(e.target.value))} value={coefficient} />
//             <label>Enter number of additions:</label>
//             <input type="number" onChange={(e) => setNumberOfAdditions(parseFloat(e.target.value))} value={numberOfAdditions} />
//             <label>Enter influence curve:</label>
//             <input type="number" onChange={(e) => setInfluenceCurve(parseFloat(e.target.value))} value={influenceCurve} />
//             <p>Total Price: {totalPrice}</p>
//         </div>
//     );
// };

import React, { useState, useEffect } from 'react';

const CrmCash = () => {
    const [price, setPrice] = useState(1);
    const [endElement, setEndElement] = useState(4);
    const [coefficient, setCoefficient] = useState(3);
    const [quantity, setQuantity] = useState(5);
    const [influenceCurve, setInfluenceCurve] = useState(2);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let overallImpact = 0;
        let impact = 1;
        const dampingFactor = endElement;

        for (let i = 0; i < quantity; i++) {
            let thisImpact = impact * coefficient;
            overallImpact += thisImpact;
            impact /= dampingFactor;
        }

        let totalPrice = price * overallImpact / influenceCurve;
        setTotalPrice(totalPrice);
    }, [price, endElement, coefficient, quantity, influenceCurve]);

    return (
        <div>
            <label>Enter a price:</label>
            <input type="number" onChange={(e) => setPrice(parseFloat(e.target.value))} value={price} />
            <label>Enter end element (damping factor):</label>
            <input type="number" onChange={(e) => setEndElement(parseFloat(e.target.value))} value={endElement} />
            <label>Enter coefficient:</label>
            <input type="number" onChange={(e) => setCoefficient(parseFloat(e.target.value))} value={coefficient} />
            <label>Enter quantity:</label>
            <input type="number" onChange={(e) => setQuantity(parseFloat(e.target.value))} value={quantity} />
            <label>Enter influence curve:</label>
            <input type="number" onChange={(e) => setInfluenceCurve(parseFloat(e.target.value))} value={influenceCurve} />
            <p>Total Price: {totalPrice}</p>
        </div>
    );
};

export default CrmCash;

// export default CrmCash;

// в первом поле будет число используемое для цени, второе число показівающее конечній елемент прогрессии коєфициента,
//     3 число сам коєфициент применяемій по отношению к 1 числу в зависимости от 4 числа олицетворяющего колличество
// сложений 1 числа, 5 число - переменная влияющая на изгиб спада силі влияния коєфициента на число с ростом его колличества