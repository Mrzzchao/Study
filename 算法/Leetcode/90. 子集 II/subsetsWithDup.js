/**
 * 子集 II
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const len = nums.length
    let arr = []
    let res = []
    dfs(0, arr)
    return deleteDup(res)

    function dfs(num, vec) {
        let tmp = vec.slice(0)
        res.push(tmp)
        for (let i = num; i < len; i++) {
            vec.push(nums[i])
            dfs(i + 1, vec)
            vec.splice(-1)
        }
    }

    function deleteDup(arr) {
        var arrStr = arr.map(function(ele) {
            return ele.sort().toString()   // 返回数组内容字符串
        })

        return Array.from(new Set(arrStr)).map(function(ele) {
            if(!ele) return []
            return ele.split(',').map(function(str) {
                return +str
            })
        })
    }
};

var result = subsetsWithDup([4, 4, 4, 1, 4])

console.log(result);
