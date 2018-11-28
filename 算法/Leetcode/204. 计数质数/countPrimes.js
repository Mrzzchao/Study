/**
 * 计数质数
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    function isPrimes(num) {
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) {
                return false;
            }
        }
        return true;
    }

    let count = 0;
    for(let i = 2; i < n; i++) {
        if(isPrimes(i)) {
            count++;
        }
    }

    return count;

};

var result = countPrimes(10);

console.log(result);

