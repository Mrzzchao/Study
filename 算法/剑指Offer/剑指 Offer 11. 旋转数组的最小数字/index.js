/**
 * https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
 * @param {number[]} numbers
 * @return {number}
 * 数组最后一个为x 最小值为min
 * 那min的右边全部小于等于x
 * min的左边全部大于等于x。
 *
 * 所以可以用二分法来做
 */
const minArray = function (numbers) {
  let low = 0;
  let high = numbers.length - 1;

  while (low < high) {
    // 中点
    const mid = Math.floor(low + (high - low) / 2);

    // 中点小于最后一个元素，那证明就是旋转的部分。右边界直接为中点即可
    if (numbers[mid] < numbers[high]) {
      high = mid;
    } else if (numbers[mid] > numbers[high]) {
      // 中点大于最后一个元素，那证明是原数组部分。左边界中点加一即可
      low = mid + 1;
    } else {
      // 中点等于最后一个元素
      high = high - 1;
    }
  }

  return numbers[low];
};
