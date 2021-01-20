/**
 * @param {number} capacity
 * 建立一个缓存map
 * 如果是新put 或者 新get 都重新删除 重新插入
 * 这样可以让他在队列后面 就是刚使用了
 * 之前的就是很久没使用的了
 */
const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const val = this.map.get(key);
  if (typeof val === 'undefined') {
    return -1;
  }
  this.map.delete(key);
  this.map.set(key, val);
  return val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  }

  this.map.set(key, value);
  const keys = this.map.keys();
  while (this.map.size > this.capacity) {
    this.map.delete(keys.next().value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const cache = new LRUCache(2 /* 缓存容量 */);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // 返回  1
cache.put(3, 3); // 该操作会使得关键字 2 作废
cache.get(2); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得关键字 1 作废
cache.get(1); // 返回 -1 (未找到)
cache.get(3); // 返回  3
cache.get(4); // 返回  4
