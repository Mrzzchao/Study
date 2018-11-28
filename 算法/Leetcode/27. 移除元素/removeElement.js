/**
 * 移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    while(true) {
    var matchIdx = nums.indexOf(val);
    if(~matchIdx) {
        nums.splice(matchIdx, 1);
    } else {
        return nums.length;
    }
}
};

var nums = [3,2,2,3];

var result = removeElement(nums, 3);
console.log(result);