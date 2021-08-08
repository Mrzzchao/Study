/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
  // 存储结果
  const result = [];

  const len = s.length;

  foo(s, 0, '', 0);

  return result;
  function foo(ip, idx, path, num) {
    // 段数边界
    if (num > 4) return;

    // 到4段并且到最后一位
    if (num === 4 && idx === len) {
      result.push(path);
    }

    for (let i = 1; i <= 3; i++) {
      // 长度超过字符串长度边界
      if (idx + i > len) return;

      // 截断当前子串
      const str = ip.substring(idx, idx + i);

      // 假设分段是001、010 或者大于255边界
      if (+str > 255 || (str[0] && str.length > 1)) return;

      path = path + str;
      if (num === 3) {
        path += '.';
      }

      foo(ip, idx + i, num + 1);
    }
  }
};

const s1 = '25525511135';
const result = restoreIpAddresses(s1);
console.log(result);
