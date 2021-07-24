function deepClone(target, map = new WeakMap()) {
  // 需要单独处理null，因为他的typeof 类型也是object
  if (Object.prototype.toString.apply(target) === '[object Null]') {
    return target;
  }
  // 对象数组的处理，数组类型也是object
  if (typeof target === 'object') {
    let cloneTarget = {};
    if (Object.prototype.toString.call(target) === '[object Array]') {
      cloneTarget = [];
    }

    // 如果能在映射表里面找到，就直接返回，而不是一直递归下去
    if (map.get(target)) {
      return map.get(target);
    }

    // 会记录克隆原对象和目标对象的引用，解决循环引用的问题
    map.set(target, cloneTarget);
    for (const key in target) {
      if (Object.hasOwnProperty.call(target, key)) {
        const element = target[key];
        cloneTarget[key] = deepClone(element, map);
      }
    }
    return cloneTarget;
  }
  return target;
}
const target = {
  a: 1,
  b: 2,
  c: [1, 2, 3],
  d: {
    e: 1,
    f: 2,
    g: [1, 2, 3],
  },
  e: undefined,
  f: null,
  g() {
    console.log('test');
  },
  h: Symbol(234324),
};

target.target = target;

const deepResult = deepClone(target);

console.log(deepResult, deepResult === target);
