function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const left = [];
  const right = [];
  const privotIdx = Math.floor(arr.length / 2);
  const privot = arr.splice(privotIdx, 1)[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < privot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([privot], right);
}

const result = quickSort([1, 2, 6, 3, 6, 2, 8, 2, 4]);

console.log(result);
