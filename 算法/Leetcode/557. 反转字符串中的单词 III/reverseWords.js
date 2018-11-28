/**
 * 反转字符串中的单词 III
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    var sArr = s.split(' ')

    for(var i = 0; i < sArr.length; i++) {
        var sWord = sArr[i]
        sWord = sWord.split('').reverse().join('')
        sArr[i] = sWord
    }

    return sArr.join(' ')
};

var result = reverseWords("Let's take LeetCode contest")

console.log(result);
