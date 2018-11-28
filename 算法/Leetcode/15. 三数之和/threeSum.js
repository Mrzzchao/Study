/**
 * 三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort(function(a, b) {
        return a - b
    })
    var target
    var result = []
    var len = nums.length

    for(var i = 0; i < len; i++) {
        if(target === nums[i]) {
            continue
        } else {
            target = nums[i]
        }
        var low = i + 1, high = len -1
        while(low < high) {
            var a = nums[low]
            var b = nums[high]
            if(-target === a + b) {
                result.push([target, a, b])
                do {
                    low++
                } while(a === nums[low])
            } else {
                if(a + b < -target) {
                    low++
                } else {
                    high--
                }
            }
        }
    }

    return result
};

var result = threeSum([-1, 0, 1, 2, -1, -4])

console.log(result);
