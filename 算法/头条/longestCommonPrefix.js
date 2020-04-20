/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) {
        return ''
    }
    let maxLen = 0;
    let len = 0;
    strs = strs.sort(function(a, b) {
        return a.length - b.length;
    })
    let sub_str = strs[0]
    while(sub_str.length) {
        for(let i = 0; i < strs.length; i++) {
           let matchStr = strs[i]
           if(matchStr.indexOf(sub_str) === 0) {
                maxLen = sub_str.length
           } else {
                maxLen = 0
                break
           }
        }
        if(maxLen) {
            return sub_str
        }
        sub_str = sub_str.slice(0, sub_str.length - 1)
    }
    return ''
};

const params = ["a"]
const result = longestCommonPrefix(params)
console.log(result)