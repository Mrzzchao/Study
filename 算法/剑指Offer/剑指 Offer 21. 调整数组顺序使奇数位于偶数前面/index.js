/**
 * @param {number[]} nums
 * @return {number[]}
 */
const exchange = function (nums) {
  const evens = [];
  const odds = [];

  function isEven(num) {
    return num % 2 === 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (isEven(nums[i])) {
      evens.push(nums[i]);
    } else {
      odds.push(nums[i]);
    }
  }

  return [...odds, ...evens];
};
