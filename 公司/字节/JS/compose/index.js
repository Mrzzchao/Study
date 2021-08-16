function compose(...fnArr) {
  if (!Array.isArray(fnArr)) return;

  return (...args) => {
    return fnArr.reduceRight((preResult, currFn) => {
      const result = currFn(preResult);
      return result;
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
console.log(f('hello'));
