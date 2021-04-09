/**
 * @param {number} n
 * @return {number[]}
 */
const printNumbers = function (n) {
  const result = [];
  let max = 1;
  for (let i = 0; i < n; i++) {
    max *= 10;
  }

  for (let i = 1; i <= max - 1; i++) {
    result.push(i);
  }

  return result;
};
