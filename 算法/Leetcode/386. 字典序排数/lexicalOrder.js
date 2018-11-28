/**
 * 字典序排数
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    var result = []
    var cur = 1
    for(var i = 0; i < n; i++) {
        result[i] = cur

        if(cur * 10 <= n) {
            cur *= 10
        } else {
            if(cur >= n) {
                cur = Math.floor(cur / 10)
            }
            cur += 1
            
            while(cur % 10 === 0) {
                cur = Math.floor(cur / 10)
            }
        }
    }
    return result
};

var result = lexicalOrder(10)

console.log(result);
