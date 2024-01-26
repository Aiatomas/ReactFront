function multiplyNumbersInRange(numbers) {
  return numbers.map(num => {
    if (num >= 1 && num <= 10) return num * 10;
    if (num >= 11 && num <= 50) return num * 8;
    if (num >= 51 && num <= 100) return num * 5;
    if (num >= 101 && num <= 99999) return num * 2;
    return num;
  });
}
const numbers = [5, 20, 60, 200, 1000];
const output = multiplyNumbersInRange(numbers, multiplicand);
console.log(output);