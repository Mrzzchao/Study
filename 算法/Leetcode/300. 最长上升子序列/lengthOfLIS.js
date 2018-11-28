/**
 * 最长上升子序列
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    var dp = {}
    var maxLen = 1
    if(nums.length === 0) return 0
    if(nums.length === 1) return 1
    for(var i = 0; i < nums.length; i++) {
        dp[i] = 1
        for(var j = 0; j < i; j++) {
            if(nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
                if(dp[i] > maxLen) {
                    maxLen = dp[i]
                }
            }
        }
    }
    return maxLen
};

var result = lengthOfLIS([2, 2])

console.log(result);
