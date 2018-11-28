/**
 * Fizz Buzz
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    var res = []
    var resMap = ['Fizz', 'Buzz']

    for(var i = 1; i <= n; i++) {
        var str = ''
        if(i % 3 === 0) {
            str += resMap[0]
        }
        if(i % 5 === 0) {
            str += resMap[1]
        }
        if(i % 3 !== 0 && i % 5 !== 0) {
            str = '' + i
        }
        res.push(str)
    }
    return res
};

var result = fizzBuzz(15)

console.log(result);
