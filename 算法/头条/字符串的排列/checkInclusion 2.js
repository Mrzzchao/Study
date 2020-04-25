/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let window = {}
    let needWindow = {}
    for(let i = 0; i < s1.length; i++) {
        needWindow[s1[i]] ? needWindow[s1[i]]++ : needWindow[s1[i]] = 1
    }

    // 两个指针 分别对应滑动窗口的左和右
    let left = 0
    let right = 0
    
    let matchLen = 0 // 记录已经匹配的字符个数
    while(right < s2.length) {
        const c1 = s2[right]
        if(needWindow[c1]) {
            window[c1] ? window[c1]++ : window[c1] = 1

            if(needWindow[c1] === window[c1]) {  // 说明同一个字符满足
                matchLen++
            }
        }

        right++ // 滑动窗口右滑
        
        // 假设子字符串完全匹配
        while(matchLen === Object.keys(needWindow).length) {
            if((right - left) === s1.length) {
                return true
            }
            const c2 = s2[left]
            if(needWindow[c2]) {
                window[c2]-- // 从滑动窗口中去除

                if(window[c2] < needWindow[c2]) { // 避免重复问题
                    matchLen--
                }
            }
            left++
        }
        
    }
    return false
};

const s1 = "adc"
const s2 = "dcda"
const result = checkInclusion(s1, s2)
console.log(result)