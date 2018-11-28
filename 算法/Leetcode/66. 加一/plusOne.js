/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length;
    for(var i = len - 1; i >= 0; i--) {
        if(digits[i] < 9) {  // 不会进位的情况
            digits[i]++;
            return digits
        }

        digits[i] = 0;
    }

    return [1, ...digits];
};

var result = plusOne([9,9]);

console.log(result)