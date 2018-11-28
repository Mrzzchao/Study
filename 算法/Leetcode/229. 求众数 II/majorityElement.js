/**
 * 求众数 II
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    nums = nums.sort(function(a, b) {
        return a - b
    })
    var result = []
    var maxCount = Math.floor(nums.length / 3)
    var num = nums[0]
    var count = 0
    for(var i = 0; i < nums.length; i++) {
        if(num === nums[i]) {
            count++
        } else {
            num = nums[i]
            count = 1
        }
        if (count > maxCount) {
            result.push(num)
        }
    }
    return Array.from(new Set(result))
};

var result = majorityElement([1, 2])

console.log(result);
