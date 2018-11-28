/**
 * 反转字符串
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return s.split("").reverse().join("");
};

var result = reverseString("hello");

console.log(result);
