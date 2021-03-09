const arr = [1, 2, [4, 5, [6, 7]]];

console.log(Array.prototype.concat.apply([], arr));
