/**
 * 零钱兑换
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    var dp = new Array(amount + 1)
    dp.fill(amount + 1)
    dp[0] = 0

    for(var i = 1; i <= amount; i++) {
        for(var j = 0; j < coins.length; j++) {
            if(coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount]
};

var result = coinChange([1, 2, 5], 12)

console.log(result);
