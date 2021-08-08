/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  // f(x) = f(x - 1) + f(x - 2)
  // f(x)表示上到第x台阶的方案总数
  // 那他就等于少一步+少两步的和
  // x = 1 f1 = 1
  // x = 2 f2 = 1
  // x = 3 f3 = f2 + f1 = 2
  // x = 4 f4 = f3 + f2 = 3

  let i = 1;
  let q = 0; // f1
  let p = 0; // f2
  let k = 1; // f3
  while (i <= n) {
    p = q;
    q = k;
    k = p + q;

    i++;
  }

  return k;
};

console.info(climbStairs(5));
