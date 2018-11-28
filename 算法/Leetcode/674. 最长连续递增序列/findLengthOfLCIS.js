/**
 * 最长连续递增序列
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    var maxCount = 0;
    var len = nums.length;
    var count = 1;
    for(var i = 0; i < len; i++) {
        if(count > maxCount) {
            maxCount = count;
        }
        if(nums[i] < nums[i + 1]) {
            count++;
        } else {
            count = 1;
        }
    }
    return maxCount;
};

var result = findLengthOfLCIS([1, 3, 5, 7]);

console.log(result);
