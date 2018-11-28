/**
 * 重复叠加字符串匹配
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    var model = A;
    var count = 1;

    while(A.length < B.length) {
        A += model;
        count++;
    }

    if(~A.indexOf(B)) {
        return count;
    }
    A += model;
    if(~A.indexOf(B)) {
        return count + 1;
    }
    return -1;
};

var result = repeatedStringMatch("abcd", "cdabcdab");

console.log(result);