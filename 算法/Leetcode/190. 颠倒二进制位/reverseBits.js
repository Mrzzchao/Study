/**
 * 颠倒二进制位
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var bitArr = n.toString(2).split('');
    while(bitArr.length < 32) {
        bitArr.unshift(0);
    }
    var bitStrReverse = bitArr.reverse().join('');
    return parseInt(bitStrReverse, 2);
};

var result = reverseBits(43261596);

console.log(result);