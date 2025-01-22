//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const promisify = (fn) => {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
};

export const all = (promises) => {
  return new Promise((resolve, reject) => {
    if (!promises) {
      resolve(undefined);
      return;
    }

    const results = [];
    let completedPromises = 0;

    if (!promises.length) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completedPromises++;

          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

export const allSettled = (promises) => {
  return new Promise((resolve) => {
    if (!promises) {
      resolve(undefined);
      return;
    }

    if (!promises.length) {
      resolve([]);
    }

    const results = [];
    let completedPromises = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
        })
        .catch((reason) => {
          results[index] = reason;
        })
        .finally(() => {
          completedPromises++;
          if (completedPromises === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

export const race = (promises) => {
  return new Promise((resolve, reject) => {
    if (!promises) {
      resolve(undefined);
      return;
    }

    if (!promises.length) {
      resolve([]);
    }

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch(reject);
    });
  });
};

export const any = (promises) => {
  return new Promise((resolve, reject) => {
    if (!promises) {
      resolve(undefined);
    }

    if (!promises.length) {
      resolve([]);
    }

    const errors = [];
    let rejectedPromises = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((reason) => {
          errors[index] = reason;
          rejectedPromises++;

          if (rejectedPromises === promises.length) {
            reject(errors);
          }
        });
    });
  });
};

// output tests
const fetchProduct = (productId, callback) => {
  setTimeout(() => {
    if (!productId) {
      callback(new Error('Invalid ID'), null);
    } else {
      callback(null, {id: productId, name: 'Commodore64'});
    }
  }, 1000);
}

const fetchProductAsPromise = promisify(fetchProduct);

fetchProductAsPromise(1982)
  .then((data) => {
    console.log(`Product: ${JSON.stringify(data)}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
