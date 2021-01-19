/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) return 0;
  /**
   * dp[i + 1][j + 1]表示以matrix(i,j)为右下角方格可能的最大正方形边长
   */
  const height = matrix.length;
  const width = matrix[0].length;

  // 初始化
  const dp = new Array(height);
  for (let i = 0; i <= height; i++) {
    dp[i] = new Array(width + 1);
    dp[i].fill(0);
  }

  console.log('dp', dp);
  let maxLen = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === '1') {
        /**
         * dp[i + 1][j + 1]取值为该格左边，左上角，上边最小值加一
         * 若形成正方形（非单 1），以当前为右下角的视角看，则需要：当前格、上、左、左上都是 1
         * 可以换个角度：当前格、上、左、左上都不能受 0 的限制，才能成为正方形
         */
        dp[i + 1][j + 1] = Math.min(dp[i + 1][j], dp[i][j + 1], dp[i][j]) + 1;
        maxLen = Math.max(maxLen, dp[i + 1][j + 1]);
      }
    }
  }

  return maxLen * maxLen;
};

const matrix = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
];

const result = maximalSquare(matrix);

console.log(result);
