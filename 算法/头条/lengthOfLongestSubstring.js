/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var sMap = {}
    var count = 0 
    var maxCount = 0
    for(var i = 0; i < s.length; i++) {
        if(Number.isInteger(sMap[s[i]])) {
            i = sMap[s[i]] + 1
            sMap = {}
            count = 0
        }
        sMap[s[i]] = i
        count++

        if(count > maxCount) {
            maxCount = count
        }
    }
    return maxCount
};

const str = "abcabcbb"
const result = lengthOfLongestSubstring(str)
console.log(result)