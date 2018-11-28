/**
 * 阶乘后的零
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
        var sum=0;
        while(n){
            sum = sum + ~~(n/5);
            console.log(sum)
            console.log(n)
            n = ~~(n / 5);
        }

        return sum;
};

var result = trailingZeroes(3);

console.log(result);
