/**
 * 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var numsSet = new Set(nums);
    var numsArr = Array.from(numsSet);
    numsArr.forEach((num, index) => {
        nums[index] = num;
    });

    nums.length = numsArr.length;
};

var nums = [1, 1, 2]

var result = removeDuplicates(nums);
console.log(nums);