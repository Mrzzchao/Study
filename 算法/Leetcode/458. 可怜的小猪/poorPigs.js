/**
 * 可怜的小猪
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
    if(buckets === 1) return 0
    var times = minutesToTest / minutesToDie + 1
    var num = 1
    while (Math.pow(times, num) < buckets) {
        num++
    }
    return num
};

var result = poorPigs(5, 15, 60)

console.log(result);
