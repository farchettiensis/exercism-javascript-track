//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const prime = (nthPrime) => {
  if (nthPrime < 1) {
    throw new Error('there is no zeroth prime');
  }

  const primes = [];
  let currentNumber = 2;

  while (primes.length < nthPrime) {
    if (isPrime(currentNumber, primes)) {
      primes.push(currentNumber);
    }
    currentNumber++;
  }

  return primes[nthPrime - 1];
};

const isPrime = (num, primes) => {
  if (num < 2) {
    return false;
  }

  for (const primeNum of primes) {
    if (primeNum > Math.sqrt(num)) {
      break;
    }
    if (num % primeNum === 0) {
      return false;
    }
  }

  return true;
};

