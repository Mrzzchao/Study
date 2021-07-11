// 使用 * 表示这是一个 Generator 函数
// 内部可以通过 yield 暂停代码
// 通过调用 next 恢复执行
function* test() {
  const a = 1 + 2;
  yield 2;
  yield 3;
}
const b = test();
console.log(b.next()); // >  { value: 2, done: false }
console.log(b.next()); // >  { value: 3, done: false }
console.log(b.next()); // >  { value: undefined, done: true }

function generator(cb) {
  const result = {
    value: undefined,
    stop() {},
  };

  return {
    next() {
      const ret = cb(result);
      if (ret === undefined) {
        return {
          value: undefined,
          done: true,
        };
      }
      return {
        value: ret,
        done: false,
      };
    },
  };
}
