/**
 * 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var maxProfit = 0
    var minPrice = prices[0]
    for(var i = 1; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minPrice)
        minPrice = Math.min(minPrice, prices[i])
    }
    return maxProfit
};

var result = maxProfit([7, 1, 5, 3, 6, 4])

console.log(result);
