/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const match = this.cache.get(key);

  if (typeof match === 'undefined') {
    return -1;
  }

  this.cache.delete(key);
  this.cache.set(key, match);

  return match;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  }
  this.cache.set(key, value);

  this.clear();
};

LRUCache.prototype.clear = function () {
  const keys = this.cache.keys();

  while (this.cache.size > this.capacity) {
    this.cache.delete(keys.next().value);
  }
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// @after-stub-for-debug-begin
module.exports = LRUCache;
// @after-stub-for-debug-end
