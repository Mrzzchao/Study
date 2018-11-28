/**
 * 排列硬币
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    if(n === 0) return 0
    if(n <= 2) return 1
    var level = 0
    for(var i = Math.ceil(Math.sqrt(2 * n)); i >= 1; i--) {
        var sum = (1 + i) * i / 2
        if(sum > n) {
            level = i
        } else {
            return level - 1
        }
    }
    return level
};

var result = arrangeCoins(1804289383);

console.log(result);
