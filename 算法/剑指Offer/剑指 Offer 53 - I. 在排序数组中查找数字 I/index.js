/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let count = 0;

  nums.forEach((num) => {
    if (num === target) {
      count++;
    }
  });

  return count;
};
