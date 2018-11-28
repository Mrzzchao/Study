/**
 * 检测大写字母
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    var re = /(^[A-Z][a-z]+$)|(^[A-Z]+$)|(^[a-z]+$)/g;
    var arr = word.match(re);
    return re.test(word);
};

var result = detectCapitalUse("usa");

console.log(result);
