/**
 * @param {number[]} a
 * @return {number[]}
 * 可以用两个遍历的方式去做
 * 设结果是res[i]
 * 第一层遍历 从[0...i-i]
 * res[i] = a[0]*a[1]...*a[i - 1]
 * 这里的相当于乘积是i左边的。
 *
 * 第二层遍历 从[i+1,i+2...n]
 * res[i] = res[i] * a[n]*a[n-1]*a[i+1]
 * 这样最后的res就是结果了
 *
 */
const constructArr = function (a) {
  const res = [];
  let left = 1;

  for (let i = 0; i < a.length; i++) {
    res[i] = left;

    // 这样就达成了等于除了a[i]一外的乘积
    left *= a[i];
  }

  let right = 1;
  for (let i = a.length - 1; i >= 0; i--) {
    res[i] *= right;
    right *= a[i];
  }

  return res;
};
