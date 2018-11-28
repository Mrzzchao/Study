/**
 * 自除数
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var result = [];
    for(var i = left; i <= right; i++) {
        if(isSelfDividingNum(i)) {
            result.push(i)
        }
    }

    function isSelfDividingNum(n) {
        var nArr = n.toString().split('');
        for(var i = 0; i < nArr.length; i++) {
            if(n % (+nArr[i]) !== 0) {
                return false;
            }
        }
        return true;
    }

    return result;
};

var result = selfDividingNumbers(1, 22);

console.log(result);