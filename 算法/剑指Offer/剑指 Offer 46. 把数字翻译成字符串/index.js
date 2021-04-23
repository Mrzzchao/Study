/**
 * @param {number} num
 * @return {number}
 * dp[i]: 第i个位置的组合数
 * dp[i] = dp[i - 1];   i < 10 || i > 25
 * 代表第[i]位和第[i-1]不能组合成字符。那第[i]个位置只能单独组合。
 * 和前面[0...i]的就有dp[i-1]个组合，意思是每一个组合都加上一个[i]
 *
 * dp[i] = dp[i - 1] + dp[i - 2];   i >= 10 && i <= 25;
 * 这代表第[i]位和第[i-1]位可以组合成字符。那就有两种情况。
 * 1. 和上面一个逻辑，第[i]个位置单独组合。那就有dp[i-1]种组合
 * 2. 第[i]和第[i-1]位置组合成一个字符。那[i-1, i]看成一个字符，就和[0...i-2]有dp[i-2]种组合
 *
 * base case: dp[0] = 1;
 */
const translateNum = function (num) {
  const dp = [1];
  const numArr = num.toString().split('');
  if (numArr.length < 2) {
    return 1;
  }

  const frontTwoNum = Number(numArr[0] + numArr[1]);
  if (frontTwoNum < 10 || frontTwoNum > 25) {
    dp[1] = 1;
  } else {
    dp[1] = 2;
  }

  for (let i = 2; i < numArr.length; i++) {
    const combNum = Number(numArr[i - 1] + numArr[i]);
    if (combNum < 10 || combNum > 25) {
      dp[i] = dp[i - 1];
    } else {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
  }

  return dp[numArr.length - 1];
};
