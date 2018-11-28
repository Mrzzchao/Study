/**
 * 有效的完全平方数
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    for (var i = 0; i <= num; i++) {
        var val = i * i - num;
        if (val > 0) return false;
        if (val == 0) return true;
    }
};

var result = isPerfectSquare(1);

console.log(result);
