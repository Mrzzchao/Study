/**
 * 全排列
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var result = []
    for(var i = 0; i < nums.length; i++) {
        var arr = permute(nums.slice(0, i).concat(nums.slice(i + 1, nums.length)))
        arr.forEach(function(a) {
            result.push([nums[i], ...a])
        })
        if(arr.length === 0) {
            result.push([nums[i]])
        }
    }
    return result
};

var result = permute([1, 2, 3])

console.log(result);
