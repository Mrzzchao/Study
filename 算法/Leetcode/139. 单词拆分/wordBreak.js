/**
 * 单词拆分
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    var f = new Array(s.length + 1);
    f[0] = true;
    for (var i = 1; i < f.length; i++) {
        f[i] = false;
    }
    for (var i = 1; i <= s.length; i++) {
        for (var j = 0; j < wordDict.length; j++) {
            var str = wordDict[j];
            if (str.length <= i) {
                if (f[i - str.length]) {
                    if (s.substring(i - str.length, i) == str) {
                        f[i] = true;
                        break;
                    }
                }
            }
        }
    }
    return f[s.length];
}

var result = wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);

console.log(result);
