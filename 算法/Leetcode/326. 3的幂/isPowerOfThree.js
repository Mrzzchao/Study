/**
 * 3的幂
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    n = +n;
    if(n === 0) return false;
    for(var i = 0; i <= n / 2; i++) {
        var target = Math.pow(3, i);
        if(target === n) {
            return true;
        }
        if(target >= n) {
            return false;
        }
    }
    return false;
};

var result = isPowerOfThree(27);

console.log(result);
