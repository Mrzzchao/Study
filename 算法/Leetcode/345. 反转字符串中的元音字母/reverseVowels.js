/**
 * 反转字符串中的元音字母
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    var aeiou = s.replace(/[^aeiouAEIOU]/g, ''); // 筛选出aeiou字符串
    var len = aeiou.length;
    var index = 0;
    return s.replace(/[aeiouAEIOU]/g, function () {
        index++;
        return aeiou[len - index];    // 颠倒替换
    })
};

var result = reverseVowels('hello');

console.log(result);
