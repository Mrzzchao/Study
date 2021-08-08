function flatten(arr) {
  return arr.reduce((pre, next) => {
    let mergeArr = next;
    if (Array.isArray(next)) {
      mergeArr = flatten(next);
    }
    return pre.concat(mergeArr);
  }, []);
}

console.log(flatten([1, 2, 3, [2, 4, 5, [2, 6]]]));
