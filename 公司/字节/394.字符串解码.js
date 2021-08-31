/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
  const stack = [];
  let result = '';

  function strTime(str, time) {
    let result = '';
    for (let i = 1; i <= time; i++) {
      result += str;
    }
    return result;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (Number.isInteger(+char)) {
      stack.push(char);
      continue;
    }
    if (char === '[') {
      stack.push(char);
      continue;
    }

    if (char === ']') {
      let char = stack.pop();
      let curr = char;
      while (char !== '[') {
        char = stack.pop();
        curr += char;
      }
      const count = stack.pop();
      strTime(curr, count);
      if (stack.length === 0) {
        result += curr;
        curr = '';
      }
      continue;
    }

    stack.push(char);
  }

  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = decodeString;
// @after-stub-for-debug-end
