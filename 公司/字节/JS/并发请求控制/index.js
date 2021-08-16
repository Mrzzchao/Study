/**
 * 整体思路是
 * 1. 维持一个全请求队列
 * 2. 维持一个正在请求的队列，最大为limit项
 * 3. 如果请求完成，从正在请求队列删除
 * @param {*} limit
 * @param {*} arr
 * @param {*} fn
 */
async function eachLimit(limit, arr, iteratorFn) {
  const res = [];
  const activeList = [];
  for (const item of arr) {
    const p = iteratorFn(item);
    res.push(p);
    const e = p.then(() => activeList.splice(activeList.indexOf(e), 1));
    activeList.push(e);
    while (activeList.length >= limit) {
      // 当超过最大并发限制时，就一直请求，最先完成的移除队列
      await Promise.race(activeList);
    }
  }

  // 这里是为了执行，并且保持结果顺序的作用
  return Promise.all(res);
}

async function test() {
  const timeout = (i) => new Promise((resolve) => setTimeout(() => resolve(i), i));
  const results = await eachLimit(2, [1000, 5000, 3000, 2000], timeout);
  console.log(results);
}

test();
