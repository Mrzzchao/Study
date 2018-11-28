/**
 * 只出现一次的数字
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = nums[0]
    for(var i = 1; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;
};

var result = singleNumber([2, 2, 1]);

console.log(result);
