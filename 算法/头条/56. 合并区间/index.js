/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  intervals = intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  const result = [];

  // 1.取第一个作为前一个
  let pre = intervals[0];

  let current = [];

  for (let i = 1; i < intervals.length; i++) {
    current = intervals[i];
    /**
     * 2.假如上一区间的大值大于后一个的小值，则证明是有交集
     * 那就得将后区间的大值赋值给上一区间的大值，达成合并
     */
    if (pre[1] >= current[0]) {
      pre[1] = Math.max(pre[1], current[1]);
    } else {
      // 3. 没有交叉的就插入数组里面
      result.push(pre);
      pre = current;
    }
  }

  result.push(pre);

  return result;
};

const data = [
  [1, 4],
  [0, 4],
];
const result = merge(data);

console.log(result);
