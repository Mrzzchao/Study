// 有一个请求函数request，封装一下这个函数，使得多个相同的请求过来的时候不发请求，直接读取第一个的结果
// 设计其实有点像promise原理，用状态机和队列来解决
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class cacheRequest {
  cache;
  constructor() {
    this.cache = new Map();
  }

  // 执行7⃣️
  run(target, options = {}) {
    const cacheKey = options.cacheKey || target;
    // 如果没有匹配缓存，就直接请求
    if (!this.cache.has(cacheKey)) {
      return this.handleRequest(target, cacheKey);
    }

    const cacheInfo = this.cache.get(cacheKey);
    // 进来如果匹配到已经成功了，那直接返回结果
    if (cacheInfo.status === FULFILLED) {
      return Promise.resolve(cacheInfo.data);
    }

    // 如果当前正在请求中，则把一个promise塞进队列，等请求完成，自然会响应状态。
    if (cacheInfo.status === PENDING) {
      return new Promise((resolve, reject) => {
        cacheInfo.resolve.push(resolve);
        cacheInfo.reject.push(reject);
      });
    }

    // 如果请求失败，再次请求
    return this.handleRequest(target, cacheKey);
  }

  handleRequest(target, cacheKey) {
    this.setCache();

    this.request(target)
      .then((result) => {
        this.setCache(cacheKey, {
          data: result,
          status: FULFILLED,
        });
        this.notify(cacheKey);
        return Promise.resolve(result);
      })
      .catch((err) => {
        this.setCache(cacheKey, {
          status: REJECTED,
        });
        this.notify(cacheKey);
        return Promise.reject(err);
      });
  }

  setCache(cacheKey, info = {}) {
    this.cache.set(cacheKey, {
      status: PENDING,
      data: {},
      resolve: [],
      reject: [],
      ...info,
    });
  }

  notify(cacheKey) {
    let queue = [];
    const cacheInfo = this.cache.get(cacheKey);

    if (cacheInfo.status === FULFILLED) {
      queue = cacheInfo.resolve;
    } else {
      queue = cacheInfo.reject;
    }

    while (queue.length) {
      const cb = queue.shift();
      cb();
    }
  }

  request() {}
}
