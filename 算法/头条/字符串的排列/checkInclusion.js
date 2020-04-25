/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    function generate(strArr) {
        const result = []
        let one = []
        for(let i = 0; i < strArr.length; i++) {
            const cloneArr = [...strArr]
            const firstChar = cloneArr.splice(i, 1)
            const otherArr = generate(cloneArr)
            if(otherArr.length === 0) {
                result.push(firstChar)
            }
            otherArr.forEach(_ => {
                let one = firstChar
                if(Array.isArray(_)) {
                    one = [...one, ..._]
                }
                result.push(one)
            })
        }
        return result
    }
    const strArr = s1.split('')
    const result = generate(strArr)
    return result.some(_ => {
        return s2.includes(_.join(''))
    })
};

const s1 = "prosperity"
const s2 = "properties"
const result = checkInclusion(s1, s2)
console.log(result)