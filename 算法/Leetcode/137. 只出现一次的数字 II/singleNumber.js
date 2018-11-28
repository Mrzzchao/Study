/**
 * 只出现一次的数字 II
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var sum = nums.reduce(function(a, b) {
        return a + b
    })
    var uniqueSum = Array.from(new Set(nums)).reduce(function(a, b) {
        return a + b
    })

    return (3 * uniqueSum - sum) / 2
};

var result = singleNumber([2, 2, 3, 2])

console.log(result);
