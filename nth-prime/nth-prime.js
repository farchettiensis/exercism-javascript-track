//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const prime = (nthPrime) => {
  if (nthPrime === 0) {
    throw new Error('there is no zeroth prime');
  }

  const limit = nthPrime > 6
      ? Math.ceil(nthPrime * (Math.log(nthPrime) + Math.log(Math.log(nthPrime))))
      : 15;

  const primes = sieve(limit);

  return primes[nthPrime - 1];
};

const sieve = (max) => {
  const isPrime = Array(max + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(max); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= max; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.map((val, index) => (val ? index : null)).filter((val) => val !== null);
};


