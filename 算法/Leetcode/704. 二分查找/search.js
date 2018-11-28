/**
 * 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    nums.sort(function(a, b) {
        return a - b;
    });
    var start = 0;
    var end = nums.length - 1;
    var mid = (start + end) / 2 | 0;

    while(start <= end) {
        var midNum = nums[mid];
        if(midNum === target) return mid;
        if(midNum > target) end = mid - 1;
        if(midNum < target) start = mid + 1;
        mid = (start + end) / 2 | 0;
    }
    return -1;
};

var result = search([-1,0,3,5,9,12], 9);

console.log(result);
