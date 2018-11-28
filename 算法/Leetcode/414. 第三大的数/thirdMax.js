/**
 * 第三大的数
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums = Array.from(new Set(nums));
    nums.sort(function(a, b) {
        return a - b;
    });
    var len = nums.length;
    if(len < 3) {
        return nums[len - 1];
    }

    return nums[len - 3];
};

var result = thirdMax(3, 2, 1);

console.log(result);
