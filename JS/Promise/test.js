// 引入我们的 MyPromise.js
const MyPromise = require('./index.js');
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 2000);
});

promise
  .then((value) => {
    console.log(3);
    console.log('resolve', value);
    return 'success 1';
  })
  .then((value) => {
    console.log(4);
    console.log('resolve', value);
    return 'success 2';
  })
  .then((value) => {
    console.log(5);
    console.log('resolve', value);
    return 'success 3';
  });
