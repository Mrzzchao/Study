function sortArray(nums) {
  if (nums.length < 2) return nums;

  const target = nums[0];

  const left = [];
  const right = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < target) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return sortArray(left).concat([target], sortArray(right));
}

console.log(sortArray([5, 1, 1, 2, 0, 0]));
