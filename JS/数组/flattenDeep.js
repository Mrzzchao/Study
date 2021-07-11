function flattenDeep(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((a, b) => {
      return [...a, ...flattenDeep(b)];
    }, []);
  }
  return [arr];
}

const arr = [1, 2, 3, 4, [2, 3, 5, [2, 5, 6]]];

console.log(flattenDeep(arr));
