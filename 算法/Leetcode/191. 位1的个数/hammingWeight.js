/**
 * 位1的个数
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var count = 0;
    while(n) {
        n = n - getTwoPowN(n);
        count++;
    }
    return count;
};

function getTwoPowN(n) {
    for(var i = 0; i <= n; i++) {
        var tmp = Math.pow(2, i);
        if(tmp == n) {
            return tmp;
        }
        if(tmp > n) {
            return Math.pow(2, i - 1);
        }
    }
    return 0;
}

var result = hammingWeight(64);
console.log(result);
