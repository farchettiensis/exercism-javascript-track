//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (isbn) => {
  const isbnParsed = isbn.replace(/-/g, '');

  if (isbnParsed.length !== 10) return false;

  let sum = 0;
  for (let i = 0; i < 10; i++) {
    const digit = isbnParsed[i];

    const checkChar = digit === 'X' && i === 9 ? 10 : parseInt(digit);

    if (isNaN(checkChar)) return false;

    sum += (10 - i) * checkChar;
  }

  return sum % 11 === 0;
};

console.log(isValid('3598215088'));
