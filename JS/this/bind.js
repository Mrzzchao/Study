// 原理其实就是利用隐式绑定，对象属性调用的办法来绑定的
Function.prototype.myBind = function (context = window, ...args1) {
  // 将执行的方法绑定在传入的上下文中
  context.fn = this;
  console.log('args1', args1);
  return function (...args2) {
    console.log('args2', args2);

    // 执行，因为this 隐式绑定原则，此时的this就指向来context
    const result = context.fn(...args1, ...args2);

    // 用完就删除掉
    delete context.fn;

    return result;
  };
};
const a = 2;
const context = {
  a: 3,
};
function run(a, b, c, e, f, g) {
  console.log(this.a, a, b, c, e, f, g);
}
const bindRun = run.myBind(context, 4, 5, 6);

bindRun(1, 2, 3);
