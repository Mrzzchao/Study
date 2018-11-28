/**
 * 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 用对象的 hash来查找的效率会比数组便利高很多 所以这里就相当于利用了缓存的思想
var twoSum = function(nums, target) {
    var len = nums.length;
    var numObj = {};
    for(var i = 0; i < len; i++) {
        var current = nums[i];
        var match = target - current;
        if(match in numObj) {
            return [i, numObj[match]]
        } else {
            numObj[current] = i;
        }
    }
};