/**
 * 交替位二进制数
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    var bitArr = n.toString(2).split('');

    return !!~bitArr.reduce(function (pre, next) {
        if((+pre) + (+next) === 1) {
            return next
        } else {
            return -1;
        }
    });


};

var result = hasAlternatingBits(7);

console.log(result);