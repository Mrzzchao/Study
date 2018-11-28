/**
 * 单词模式
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    var patArr = pattern.split('')
    var strArr = str.split(' ')

    var patMap = {}
    var strMap = {}

    if(patArr.length !== strArr.length) return false

    for(var i = 0; i < patArr.length; i++) {
        if(patMap[patArr[i]] !== strMap[strArr[i]]) return false

        patMap[patArr[i]] = i
        strMap[strArr[i]] = i
    }
    return true
};

var result = wordPattern("abba", "dog cat cat dog");

console.log(result);
