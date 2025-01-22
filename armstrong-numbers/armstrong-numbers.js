//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const digitsInNumber = Math.abs(number).toString().length;
  const digits = [...Math.abs(number).toString()].map(digit => parseInt(digit));

  return digits.reduce((sum, digit) => sum + Math.pow(digit, digitsInNumber), 0) === number;
};