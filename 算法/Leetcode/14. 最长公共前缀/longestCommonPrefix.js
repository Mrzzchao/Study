/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  const strLen = strs.length;
  if (!strs || !strLen) return '';

  let minLen = strs[0].length;
  let min_index = 0;

  for (var i = 1; i < strLen; i++) {
    if (strs[i].length < minLen) {
      minLen = strs[i].length;
      min_index = i;
    }
  }
  console.log(minLen);
  for (var i = minLen; i >= 0; i--) {
    var common_pre = strs[min_index].slice(0, i);
    let flag = true;
    for (let j = 0; j < strLen; j++) {
      if (strs[j].indexOf(common_pre) == 0) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      break;
    } else {
      common_pre = '';
    }
  }
  return common_pre;
};

console.log(longestCommonPrefix(['ca', 'a']));
