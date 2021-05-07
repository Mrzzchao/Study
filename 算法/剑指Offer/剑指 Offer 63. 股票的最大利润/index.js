/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  // 最大利润
  let max = 0;

  // 最小值
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - min);
    if (prices[i] < min) {
      min = prices[i];
    }
  }

  return max;
};
