/**
 * 移动零
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var len = nums.length;
    for(var i = 0, j = 0; i < len; i++, j++) {
        if(nums[j] === 0) {
            nums.splice(j, 1);
            nums.push(0);
            j--;
        }
    }
};

var result = moveZeroes([0,1,0,3,12]
);
console.log(result);