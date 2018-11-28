/**
 * 找到所有数组中消失的数字
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    var result = []
    var uniqueNums = Array.from(new Set(nums)).sort(function(a, b) {
        return a - b
    })
    var numsLen = nums.length
    var uniqueNumsLen = uniqueNums.length
    for(var i = 0, count = 1; i < uniqueNumsLen; i++, count++) {
        if((count) !== (uniqueNums[i])) {
            result.push(count)
            i--
        }
    }
    for(var i = uniqueNums[uniqueNumsLen - 1] + 1; i <= numsLen; i++) {
        result.push(i)
    }
    return result
};

var result = findDisappearedNumbers([1, 1])

console.log(result);
