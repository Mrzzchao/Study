/**
 * 最大连续1的个数
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    var maxC = 0;
    var count = 0;

    for(var i = 0; i < nums.length; i++) {
        if(count > maxC) {
            maxC = count;
        }
        if(nums[i] == 1) {
            count++;
        } else {
            count = 0;
        }

        if (count > maxC) {
            maxC = count;
        }
    }
    return maxC;
};

var result = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);

console.log(result);
