/**
 * 合并两个有序数组
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *
 * 1. 遍历num1 终止条件是num1结尾和num2不为空
 * 2. 判断num2如果小于等于num1的项 则插入num1前
 * 3. 去掉num2插入的那个数
 * 4. 剩余的num2全部放入num1
 */
const merge = function (nums1, m, nums2, n) {
  const dealNum2 = nums2.slice(0, n);
  nums1.length = m;
  for (let i = 0; i < nums1.length && dealNum2.length > 0; i++) {
    const n1 = nums1[i];
    const n2 = dealNum2[0]; /*        比nums1中的数小或等就插入在前面。*/
    if (n2 <= n1) {
      nums1.splice(i, 0, n2);
      dealNum2.shift();
    }
  } /*    剩下的放在后面*/
  if (dealNum2.length > 0) {
    [].push.apply(nums1, dealNum2);
  }
};
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

const result = merge(nums1, m, nums2, n);

console.log(result);
