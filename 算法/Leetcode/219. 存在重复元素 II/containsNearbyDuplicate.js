/**
 * 存在重复元素 II
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for(var i = 0; i < nums.length - 1; i++) {
        for(var j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                if((j - i) <= k) {
                    return true;
                }
            }
        }
    }
    return false;
};

var result = containsNearbyDuplicate([1,2,3,1], 3);

console.log(result);
