/**
 * 找不同
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var sArr = s.split("");
    var tArr = t.split("");

    sArr.forEach(function (value) {
        var idx = tArr.indexOf(value);
        if(~idx) {
            tArr.splice(idx, 1);
        } else {
            return value;
        }
    });

    return tArr[0];
};

var result = findTheDifference("abcd", "abcde");

console.log(result);
