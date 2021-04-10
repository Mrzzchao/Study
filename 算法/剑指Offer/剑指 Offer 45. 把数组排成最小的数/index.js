/**
 * @param {number[]} nums
 * @return {string}
 * 思路：其实就是一个排序算法，比较ab和ba哪一个更小。
 */
const minNumber = function (nums) {
  return nums
    .sort((a, b) => {
      return `${a}${b}` - `${b}${a}`;
    })
    .join('');
};
