/**
 * 2的幂
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) == 0;
};

var result = isPowerOfTwo(1);

console.log(result);
