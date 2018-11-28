/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    var sum
    var count = 50

    while(count) {
        var reminder, sum = 0
        while(n != 0) {
            reminder = n % 10
            sum += reminder * reminder
            n = parseInt(n / 10)
        }
        if(sum === 1) return true
        n = sum
        count--
    }
    return false
};

var result = isHappy(19)

console.log(result);
