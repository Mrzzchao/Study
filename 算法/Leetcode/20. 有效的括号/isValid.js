/**
 * 有效的括号
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if(s.length % 2 !== 0) {
        return false
    }
    var matchMap = {
        ']': '[',
        '}': '{',
        ')': '('
    }
    
    var stack = []

    for(var i = 0; i < s.length; i++) {
        var matchValidLeft = matchMap[s[i]] || ''
        var matchLeft = ''
        if (matchValidLeft) {
            matchLeft = stack.pop()
        } else {
            stack.push(s[i])
        }
        if (matchValidLeft !== matchLeft) {
            return false
        }
    }
    return stack.length === 0
};

var result = isValid('()[]{}')

console.log(result);
