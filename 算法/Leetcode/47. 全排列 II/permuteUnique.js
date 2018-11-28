/**
 * 全排列 II
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    function permute(nums) {
        var result = []
        for (var i = 0; i < nums.length; i++) {
            var arr = permute(nums.slice(0, i).concat(nums.slice(i + 1, nums.length)))
            arr.forEach(function (a) {
                result.push([nums[i], ...a])
            })
            if (arr.length === 0) {
                result.push([nums[i]])
            }
        }
        return result
    }

    function removeSame(arr) {
        var result = arr.map(function(ele) {
            return ele.toString()
        })

        return Array.from(new Set(result)).map(function(ele) {
            return ele.split(',').map(function(str) {
                return +str
            })
        })
    }
    return removeSame(permute(nums))
};

var result = permuteUnique([1, 1, 2])

console.log(result);
