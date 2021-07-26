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
