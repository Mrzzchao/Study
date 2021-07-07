function create() {
  // 1.拿到构造函数，构造函数是arguments第一个参数，其余参数是函数参数
  const Con = Array.shift.apply(arguments);

  // 2. 创建一个原型链指向构造函数原型链的对象
  const obj = Object.create(Con.prototype);

  // 3. 执行构造函数，并把this指向生成的对象
  const ret = Con.apply(obj, arguments);

  // 4.如果是构造函数返回对象，则返回该对象，否则返回this
  return ret instanceof 'object' ? ret : obj;
}
