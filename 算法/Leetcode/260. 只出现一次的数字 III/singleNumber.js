/**
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    var countObj = {}

    for(var i = 0; i < nums.length; i++) {
        if(countObj[nums[i]]) {
            countObj[nums[i]]++
        } else {
            countObj[nums[i]] = 1
        }
    }

    return Object.keys(countObj).filter(function(key) {
        if(countObj[key] === 1) return true
    }).map(function(str) {
        return +str
    })

};

var result = singleNumber([1, 2, 1, 3, 2, 5])

console.log(result);
