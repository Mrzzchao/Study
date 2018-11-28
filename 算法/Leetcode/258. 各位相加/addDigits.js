/**
 * 各位相加
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var numArr = num.toString().split("");
    var result = numArr.reduce(function(pre, next) {
        return +pre + +next;
    }, 0)
    if(result < 10) {
        return result;
    } else {
        return addDigits(result);
    }
};

var result = addDigits(38);
console.log(result);