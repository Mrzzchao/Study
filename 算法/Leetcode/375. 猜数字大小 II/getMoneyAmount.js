/**375. 猜数字大小 II
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
    var pay = new Array(n)
    for(var i = 0; i < n; i++) {
        pay[i] = new Array(n).fill(0)
    }
    for(var i = n - 1; i >= 0; i--) {
        for(var j = i + 1; j < n; j++) {
            for(var k = i + 1; k < j; k++) {
                pay[i][j] = Math.min(pay[i][j], k + 1 + Math.max(pay[i][k - 1], pay[k + 1][j]))
            } 
        }
    }

    return pay[0][n - 1]
};

var result = getMoneyAmount(10)

console.log(result);
