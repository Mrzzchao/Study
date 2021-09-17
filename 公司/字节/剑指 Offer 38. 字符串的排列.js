/**
 * @param {string} s
 * @return {string[]}
 */
const permutation = function (s) {
  const result = [];
  const track = [];
  const visited = {};

  function backtrack() {
    if (track.length === s.length) {
      result.push(track.join(''));
      return;
    }

    for (let i = 0; i < s.length; i++) {
      if (visited[`${i}`]) continue;

      visited[`${i}`] = true;
      track.push(s[i]);
      backtrack();
      visited[`${i}`] = false;
      track.pop();
    }
  }

  backtrack();

  return Array.from(new Set(result));
};
