import React, { useState, useEffect } from 'react';
import Numberr from "./Numberr";

const CrmCash = () => {
  const [number, setNumber] = useState(0);
  const [coefficient, setCoefficient] = useState(0);

  useEffect(() => {
    calculateCoefficient(number);
  }, [number]);

  const calculateCoefficient = (num) => {
    let newCoefficient = num > 0 ? 1 / num : 0;
    setCoefficient(newCoefficient);
  };

  return (
    <div>
      <label>Enter a number:</label>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>Coefficient: {coefficient}</p>

        <Numberr/>
    </div>
  );
};

export default CrmCash;