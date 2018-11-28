/**
 * 买卖股票的最佳时机 II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var allProfit = 0

    for(var i = 0; i < prices.length - 1; i++) {
        var sub = prices[i + 1] - prices[i]
        if(sub > 0) {
            allProfit += sub
        }
    }
    return allProfit
};

var result = maxProfit([7, 1, 5, 3, 6, 4])

console.log(result);
