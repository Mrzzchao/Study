/**
 * 密钥格式化
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
    var result = []
    for(var i = S.length - 1; i >= 0; i--) {
        if(S.charAt(i) !== '-') {
            if (result.length % (K + 1) == K) {
                result.push('-')
            }
            result.push(S.charAt(i));
        }
    }
    return result.reverse().join('').toUpperCase()
};

var result = licenseKeyFormatting('5F3Z-2e-9-w', 4)

console.log(result);
