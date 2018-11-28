/**
 * 两数之和 II - 输入有序数组
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var idx1, idx2;
    for(var i = 0; i< numbers.length; i++) {
        var a = numbers[i];
        var bIdx = numbers.lastIndexOf(target - a);
        if(~bIdx) {
            return [i + 1, bIdx + 1];
        }
    }
};

var result = twoSum([2, 7, 11, 15], 9);
console.log(result);
