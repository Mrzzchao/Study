// 引入我们的 MyPromise.js
const MyPromise = require('./index.js');
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject('success');
  }, 2000);
});

const promise2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    // reject('error');
    resolve('success2');
  }, 2000);
});

MyPromise.allSettled([promise, promise2])
  .then((res) => {
    console.log('res', res);
  })
  .catch((err) => {
    console.error('error', err);
  });

// MyPromise.all([promise, promise2])
//   .then((res) => {
//     console.log('res', res);
//   })
//   .catch((err) => {
//     console.error('error', err);
//   });

// promise
//   .then((value) => {
//     console.log(3);
//     console.log('resolve', value);
//     return 'success 1';
//   })
//   .then((value) => {
//     console.log(4);
//     console.log('resolve', value);
//     return 'success 2';
//   })
//   .then((value) => {
//     console.log(5);
//     console.log('resolve', value);
//     return 'success 3';
//   });
