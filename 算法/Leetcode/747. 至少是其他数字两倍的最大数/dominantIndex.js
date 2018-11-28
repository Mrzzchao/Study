/**
 * 至少是其他数字两倍的最大数
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    var idxObj = {};
    var len = nums.length;

    if(len === 1) return 0;

    for (var i = 0; i < len; i++) {
        idxObj[nums[i]] = i;
    }

    var sortNums = nums.sort(function(a, b) {
        return a - b;
    });

    var maxNum = sortNums[len - 1];

    var twiceNums = sortNums.slice(0, len - 1).map(function(num) {
        return num * 2;
    });

    var secondTwiceMaxNum = twiceNums[len - 2];

    return maxNum >= secondTwiceMaxNum ? idxObj[maxNum] : -1;
};

var result = dominantIndex([3, 6, 1, 0]);

console.log(result);
