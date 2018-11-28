/**
 * 缺失数字
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var n = nums.length;
    var shouldSum = (n + 1) * n / 2;
    var sum = nums.reduce(function(pre, next) {
        return pre + next;
    }, 0);

    return shouldSum - sum;
};


var result = containsNearbyDuplicate([3, 0, 1]);

console.log(result);
