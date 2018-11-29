function quickSort(arr) {
    if(arr.length <= 1) return arr
    var left = []
    var right = []
    var privotIdx = Math.floor(arr.length / 2)
    var privot = arr.splice(privotIdx, 1)[0]

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < privot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat([privot], right)
}

var result = quickSort([1,2,6,3,6,2,8,2,4])

console.log(result);
