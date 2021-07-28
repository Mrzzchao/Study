// 实现函数compose，compose接受多个函数作为参数，
// 并返回一个新的函数，新的函数会从右向左依次执行原函数， 并且上一次结果的返回值将会作为下一个函数的参数。
function compose(...fns) {
  return (...args) => {
    return fns.reduceRight((pre, curr) => {
      console.log('pre', pre);
      return curr(pre);
    }, args);
  };
}

function a(msg) {
  return `${msg}a`;
}
function b(msg) {
  return `${msg}b`;
}
function c(msg) {
  return `${msg}c`;
}

const f = compose(a, b, c);
console.log(f('hello', 'world', 'test'));
