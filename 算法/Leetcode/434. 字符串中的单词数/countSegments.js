/**
 * 字符串中的单词数
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    s = s.trim();
    s = s.replace(/\s+/g, ' ');
    if(!s) return 0;
    return s.split(' ').length;
};

var result = countSegments("                ");

console.log(result);
