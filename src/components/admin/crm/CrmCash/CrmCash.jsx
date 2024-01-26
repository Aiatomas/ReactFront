import React, { useState, useEffect } from 'react';

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

    const multiplyNumbersInRange = function(numbers, multiplicand) {
        return numbers.map(num => {
            if (num >= 1 && num <= 10) return num * multiplicand;
            if (num >= 11 && num <= 50) return num * multiplicand;
            if (num >= 51 && num <= 100) return num * multiplicand;
            if (num >= 101 && num <= 99999) return num * multiplicand;
            return num;
        });
    }
    const numbers = [5, 20, 60, 200, 1000];
    const multiplicand = 2;
    const output = multiplyNumbersInRange(numbers, multiplicand);
    console.log(output);

  return (
    <div>
      <label>Enter a number:</label>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>Coefficient: {coefficient}</p>
    </div>
  );
};

export default CrmCash;