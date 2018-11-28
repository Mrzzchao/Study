/**
 * 两个数组的交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var arr = nums1.filter((v) => {
        return nums2.includes(v);
    });

    return Array.from(new Set(arr));
};

var result = intersection([1,2,2,1]], [2, 2]);

console.log(result);
