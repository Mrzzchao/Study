/**
 * 数字的补数
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    var sum = 0
    var i = 0
    while(sum < num) {
        sum += Math.pow(2, i)
        i++
    }
    return sum - num
};

var result = findComplement(5)

console.log(result);
