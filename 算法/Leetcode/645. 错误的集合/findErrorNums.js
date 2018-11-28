/**
 * 错误的集合
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    var n = nums.length;
    var nSum = ~~((1 + n) * n / 2);

    var numsSum = nums.reduce(function (pre, next) {
        return pre + next;
    });

    var uniqueNumsSum = Array.from(new Set(nums)).reduce(function (pre, next) {
        return pre + next;
    });

    return [numsSum - uniqueNumsSum, nSum - uniqueNumsSum];
};

var result = findErrorNums([1, 2, 2, 4]);

console.log(result);