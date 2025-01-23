//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const numStr = number.toString();
  const digitsInNumber = numStr.length;

  const sum = [...numStr].reduce((acc, digit) => {
    const digitBigInt = BigInt(digit);
    return acc + digitBigInt ** BigInt(digitsInNumber);
  }, 0n);

  return sum === BigInt(number);
};