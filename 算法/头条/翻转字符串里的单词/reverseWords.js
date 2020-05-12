/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const wordArr = s.split(' ')
    return wordArr.reverse().filter(word => word).join(' ')
};

const s1 = "a good   example"
const result = reverseWords(s1)
console.log(result)