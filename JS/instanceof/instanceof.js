// 含义：a instanceof b 代表判断a的原型链向上是不是能找到b
function myInstanceof(left, right) {
  // 获取类型原型
  const { prototype } = right;

  // 获取对象原型
  left = left.__proto__;

  while (true) {
    // null 没有原型
    if (left === null) {
      return false;
    }
    if (left === prototype) {
      return true;
    }

    // 一直沿着原型向上
    left = left.__proto__;
  }
}

console.log(myInstanceof([], Array));
