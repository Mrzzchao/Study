/**
 * 最后一个单词的长度
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(!s.trim()) return 0;
    var sArr = s.split(" ").filter(function (value) {
        return value
    });
    return sArr[sArr.length - 1].length;
};

var result = lengthOfLastWord(" ");
console.log(result);