/**
 * 大问题：s的全排列
 * 子问题：permutation(subS)。subS是去掉其中任何一个字符的子串。
 * @param {string} s
 * @return {string[]}
 */
const permutation = function (s) {
  const result = [];
  for (let i = 0; i < s.length; i++) {
    const chart = s[i];

    const strArr = permutation(s.slice(0, i) + s.slice(i + 1));

    if (strArr.length === 0) {
      result.push(chart);
    } else {
      strArr.forEach((str) => {
        const newStr = chart + str;
        result.push(newStr);
      });
    }
  }

  return Array.from(new Set(result));
};

console.log(permutation('abc'));
