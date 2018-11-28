/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.originNums = nums.slice()
    this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    this.nums = this.originNums.slice()
    return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    var result = []
    var indexArr = []
    var len = this.nums.length
    while(result.length !== len) {
        var index = Math.floor(Math.random() * len)
        if(!~indexArr.indexOf(index)) {
            indexArr.push(index)
            result.push(this.nums[index])
        }
    }
    this.nums = result
    return result
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */