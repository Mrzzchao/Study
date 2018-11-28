/**
 * 反转整数
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = 0;
    var flag = true;
    if(x < 0) {
        flag = false;
    }
    x = Math.abs(x);
    while(x > 0) {
        var n = x % 10;
        x = Math.floor(x / 10);
        if(x) {
            result = ((result + n) * 10);
        } else {
            result = result + n;
        }
    }
    if(result > Math.pow(2,31)) return 0;

    return flag ? result : -result;
};