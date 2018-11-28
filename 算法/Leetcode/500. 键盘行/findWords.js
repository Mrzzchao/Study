/**
 * 键盘行
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    var first = 'qwertyuiop'
    var second = 'asdfghjkl'
    var third = 'zxcvbnm'

    var result = []
    words.forEach(function(word) {
        var a = 0
        var b = 0
        var c = 0
        var wordStr = word.toLowerCase();
        var isTrue = wordStr.split("").every(function(char) {
            if (~first.indexOf(char)) {
                a++;
            }
            if (~second.indexOf(char)) {
                b++;
            }
            if (~third.indexOf(char)) {
                c++;
            }
            if (a + b + c === (a || b || c)) {
                return true;
            }
            return false;
        });
        if(isTrue) {
            result.push(word)
        }
    })

    return result
};

var result = findWords(["Hello", "Alaska", "Dad", "Peace"])

console.log(result);
