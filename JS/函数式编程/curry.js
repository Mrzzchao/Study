// 实现函数curry，该函数接受一个多元（多个参数）的函数作为参数，然后一个新的函数，这个函数 可以一次执行，也可以分多次执行。
function curry(fn) {
  const ctx = this;

  return function inner(...args) {
    if (fn.length === args.length) {
      return fn.call(ctx, ...args);
    }
    return (...innerArgs) => {
      return inner.call(ctx, ...args, ...innerArgs);
    };
  };
}

function test(a, b, c) {
  console.log(a, b, c);
}

const fn = curry(test);
fn(1, 2, 34);
const fn1 = fn(1);
const fn2 = fn1(1);
const fn3 = fn2(1);
