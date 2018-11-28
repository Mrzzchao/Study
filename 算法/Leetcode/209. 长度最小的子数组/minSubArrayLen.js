/**
 * 长度最小的子数组
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    if(nums.length === 0) return 0
    var minC = Number.MAX_SAFE_INTEGER
    var sum = 0

    for(var i = 0; i < nums.length; i++) {
        sum = 0
        for(var j = i; j < nums.length; j++) {
            sum += nums[j]
            if(sum >= s) {
                if((j - i + 1) <= minC) {
                    minC = j - i + 1
                }
                break
            }
        }
    }

    return minC === Number.MAX_SAFE_INTEGER ? 0 : minC
};

var result = minSubArrayLen(7, [2, 3, 1, 2, 4, 3])

console.log(result)
