/**
 * 搞两层循环
 * 第一层：遍历整个数组
 * 第二层：字符串指针右移动
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  let result = '';
  let flag = true;
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    let j = 1;
    for (; j < strs.length; j++) {
      if (strs[j][i] === char) {
      } else {
        flag = false;
        break;
      }
    }

    if (flag) {
      result += char;
    }
  }

  return result;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
