// 原理其实就是利用隐式绑定，对象属性调用的办法来绑定的
Function.prototype.myApply = function (context = window, args) {
  // 将执行的方法绑定在传入的上下文中
  context.fn = this;

  // 执行，因为this 隐式绑定原则，此时的this就指向来context
  const result = context.fn(...args);

  // 用完就删除掉
  delete context.fn;

  return result;
};
