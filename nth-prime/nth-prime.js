//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const prime = (nthPrime) => {
  if (nthPrime === 0) {
    throw new Error('there is no zeroth prime');
  } else if (nthPrime < 0) {
    throw new Error('Invalid number');
  }

  let primeCounter = 0;
  let currentNumber = 2;

  while (primeCounter < nthPrime) {
    if (isPrime(currentNumber)) {
      primeCounter++;
    }

    currentNumber++;
  }

  return currentNumber - 1;
};

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

