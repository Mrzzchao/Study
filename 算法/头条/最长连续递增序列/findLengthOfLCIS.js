/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let max = 0
    let count = 1
    let i = 0
    while(i < nums.length) {
        if(nums[i] > nums[i - 1]) {
            count++
        } else {
            count = 1
        }

        if(count > max) {
            max = count
        }
        i++
    }

    return max
};

const params = []
const result = findLengthOfLCIS(params)
console.log(result)