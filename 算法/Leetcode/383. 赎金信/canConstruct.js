/**
 * 赎金信
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    ransomNote = ransomNote.toLowerCase()
    magazine = magazine.toLowerCase()

    var noteArr = ransomNote.split('')
    var magArr = magazine.split('')

    return noteArr.every(function(ele) {
        var matchIdx = magArr.indexOf(ele)
        if(~matchIdx) {
            magArr.splice(matchIdx, 1)
            return true
        } else {
            return false
        }
    })
};

var result = canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi");

console.log(result);
