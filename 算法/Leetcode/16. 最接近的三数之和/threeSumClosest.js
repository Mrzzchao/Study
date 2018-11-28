/**
 * 最接近的三数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort(function(a, b) {
        return a - b
    })
    var len = nums.length
    var bestSum = Number.MAX_SAFE_INTEGER
    for(var i = 0; i < len; i++) {
        var a = nums[i]

        var low = i + 1, high = len - 1
        while(low < high) {
            var b = nums[low]
            var c = nums[high]
            var sum = a + b + c
            var s1 = sum - target
            var s2 = bestSum - target
            var sub1 = Math.abs(s1)
            var sub2 = Math.abs(s2)
            if(sub1 < sub2) {
                bestSum = sum
            } else {
                if(s1 < 0) {
                    low++
                } else {
                    high--
                }
            }
        }
    }

    return bestSum
};

var result = threeSumClosest([-1, 2, 1, -4], 1)

console.log(result);
