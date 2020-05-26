/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length < 2) return nums.length

    nums = Array.from(new Set(nums))
    nums = nums.sort((a, b) => {
        return a - b
    })


    let count = 1
    let max = 1
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === (nums[i - 1] + 1)) {
            count++;
        } else {
            count = 1
        }

        if(count > max) {
            max = count
        }
    }

    return max
};

const params = [1,2,0,1]
const result = longestConsecutive(params)
console.log(result)