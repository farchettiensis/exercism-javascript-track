//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (isbn) => {
  const parsedIsbn = isbn.replace(/-/g, '');

  if (parsedIsbn.length !== 10) return false;

  let weightedSum = 0;

  for (let i = 0; i < 10; i++) {
    const currentDigit = parsedIsbn[i];

    const checkDigit = (currentDigit === 'X' && i === 9) ? 10 : parseInt(currentDigit);

    if (isNaN(checkDigit)) return false;

    weightedSum += (10 - i) * checkDigit;
  }

  return weightedSum % 11 === 0;
};