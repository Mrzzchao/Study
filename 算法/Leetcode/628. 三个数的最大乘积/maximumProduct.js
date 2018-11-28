/**
 * 三个数的最大乘积
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });

    var a, b, result;
    var len = nums.length;
    a = nums[len - 1];
    b = Math.max(nums[0] * nums[1], nums[len - 2] * nums[len - 3]);
    return a * b;
};

var result = maximumProduct([1, 2, 3]);

console.log(result);
