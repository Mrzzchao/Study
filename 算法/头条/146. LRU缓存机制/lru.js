class LRU {
  cache = new Map();
  size = 0;

  constructor(size) {
    this.size = size;
  }

  get(key) {
    const match = this.cache.get(key);
    if (!match) {
      return -1;
    }

    this.cache.delete(key);
    this.cache.set(key, match);
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);

    this.clear();
  }

  clear() {
    const keys = this.cache.keys();

    while (this.cache.size > this.size) {
      this.cache.delete(keys.next().value);
    }
  }
}

const cache = new LRU(2 /* 缓存容量 */);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // 返回  1
cache.put(3, 3); // 该操作会使得关键字 2 作废
cache.get(2); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得关键字 1 作废
cache.get(1); // 返回 -1 (未找到)
cache.get(3); // 返回  3
cache.get(4); // 返回  4
