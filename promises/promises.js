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

export const all = () => {
  throw new Error('Remove this statement and implement this function');
};

export const allSettled = () => {
  throw new Error('Remove this statement and implement this function');
};

export const race = () => {
  throw new Error('Remove this statement and implement this function');
};

export const any = () => {
  throw new Error('Remove this statement and implement this function');
};

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
