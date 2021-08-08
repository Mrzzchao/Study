function curry(fn) {
  return function inner(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    return function (...args2) {
      return inner.apply(this, [...args, ...args2]);
    };
  };
}

function sum(a, b, c) {
  return a + b + c;
}
const currySum = curry(sum);
console.log(currySum(1, 2, 3));

console.log(currySum(1)(2)(3));
