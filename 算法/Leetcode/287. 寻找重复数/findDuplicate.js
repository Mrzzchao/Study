/**
 * 寻找重复数
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    var sum = nums.reduce(function(pre, next) {
        return pre + next
    })
    var numsUnique = Array.from(new Set(nums))
    var sumUnique = numsUnique.reduce(function(pre, next) {
        return pre + next
    })

    return (sum - sumUnique) / (nums.length - numsUnique.length)
};

var result = findDuplicate([1, 3, 4, 2, 2])

console.log(result);
