/**
 * 存在重复元素
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var oLen = nums.length;
    var nLen = Array.from(new Set(nums)).length;
    return oLen !== nLen;
};

var result = containsDuplicate([1,2,3,1]);

console.log(result);
