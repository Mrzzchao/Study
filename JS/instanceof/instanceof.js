function myInstanceof(left, right) {
  const { prototype } = right;
  left = left.__proto__;

  while (true) {
    if (left === null) {
      return false;
    }
    if (left === prototype) {
      return true;
    }
    left = left.__proto__;
  }
}

console.log(myInstanceof([], String));
