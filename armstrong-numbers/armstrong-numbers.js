//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const absNumberString = number.toString().replace('-', '');
  const digitsInNumber = absNumberString.length;

  const sum = [...absNumberString].reduce((acc, digit) => {
    const digitBigInt = BigInt(digit);
    return acc + digitBigInt ** BigInt(digitsInNumber);
  }, 0n);

  return sum === BigInt(number);
};