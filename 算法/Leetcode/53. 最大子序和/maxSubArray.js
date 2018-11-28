/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var len = nums.length;
    var maxSum = nums[0];
    var sum = nums[0];

    if(len === 1) return sum;

    for(var i = 1; i < len; i++) {
        if(sum < 0) sum = 0;
        sum += nums[i];

        maxSum = Math.max(sum, maxSum);
    }

    return maxSum
};

var result = maxSubArray([-2,-1])
console.log(result)