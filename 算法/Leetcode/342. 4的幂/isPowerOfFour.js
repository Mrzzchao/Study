/**
 * 4的幂
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    n = +n;
    if(n === 0) return false;
    for(var i = 0; i <= n / 2; i++) {
        var target = Math.pow(4, i);
        if(target === n) {
            return true;
        }
        if(target >= n) {
            return false;
        }
    }
    return false;
};

var result - isPowerOfFour(16);

console.log(result);
