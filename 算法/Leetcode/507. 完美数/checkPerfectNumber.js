/**
 * 完美数
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    function findAllN(n) {
        var start = ~~(n / 2);
        var result = [];

        for(var i = start; i >= 1; i--) {
            if(n % i === 0) {
                var a = n / i;
                result.push(i);
                if(a !== i && a !== n) {
                    result.push(a);
                }
            }
        }
        return Array.from(new Set(result));
    }

    var sum = findAllN(num).reduce(function(pre, next) {
        return pre + next;
    }, 0);

    return !!num && sum === num;

};

var result = checkPerfectNumber(0);

console.log(result);
