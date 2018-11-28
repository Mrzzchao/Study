/**
 * 两个数组的交集 II
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    var res = []
    var numMap = new Map()
    nums1.forEach(function(num) {
        var numV = numMap.get(num)
        if(numV) {
            numMap.set(num, numV + 1)
        } else {
            numMap.set(num, 1)
        }
    })

    nums2.forEach(function(num) {
        var numV = numMap.get(num)
        if (numV) {
            numMap.set(num, numV - 1)
            res.push(num)
        }
    })

    return res
};

var result = intersect([1, 2, 2, 1], [2, 2])

console.log(result);
