//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  if (number < 0) {
    return false;
  }

  const numberString = number.toString();
  const digitsInNumber = numberString.length;

  const useBigInt = number > Number.MAX_SAFE_INTEGER;
  const base = useBigInt ? BigInt : Number;

  const sum = [...numberString].reduce((acc, digit) => {
    const digitValue = base(digit);
    return acc + digitValue ** base(digitsInNumber);
  }, useBigInt ? 0n : 0);

  return sum === base(number);
};