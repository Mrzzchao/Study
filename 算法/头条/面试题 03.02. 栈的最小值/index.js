/**
 * https://leetcode-cn.com/problems/min-stack-lcci/
 * initialize your data structure here.
 * 1. 插入堆栈
 * 2. 判断是否比设定的小 如果小 设置值 
 * 3. 
 */
var MinStack = function() {
  this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  const lastItem = this.stack[this.stack.length - 1]
  let min = x
  if(lastItem && lastItem.min < x) {
    min = lastItem.min
  }
  this.stack.push({
    value: x,
    min
  })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const currentItem = this.stack.pop()
  const value = currentItem && currentItem.value

  // return value
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const currentItem = this.stack[this.stack.length - 1]
  const value = currentItem && currentItem.value

  console.log('top value', value)
  return value
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  const lastItem = this.stack[this.stack.length - 1]
  const value = lastItem && lastItem.min

  console.log('getMin value', value)

  return value
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var minStack = new MinStack();
minStack.push(-1);
minStack.top();      
minStack.getMin();   