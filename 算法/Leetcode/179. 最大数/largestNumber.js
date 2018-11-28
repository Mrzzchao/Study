/**
 * 最大数
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    nums = nums.sort(function(a, b) {
        var sum1 = +(a + '' + b)
        var sum2 = +(b + '' + a)

        return sum1 - sum2
    }).reverse()
    var str = ''
    str = nums.reduce(function(pre, next) {
        if(pre === 0 && next === 0) return 0
        return pre + '' + next
    })

    return str + ''
};

// 被人的解
// var largestNumber = function(nums) {
//     nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
//     return nums[0] === 0 ? "0" : nums.join("");
// };

var result = largestNumber([3, 30, 34, 5, 9])

console.log(result);
