/**
 * 节流：持续执行函数时，每隔一段时间，只执行一次的策略叫做节流。
 * 立即执行：可以记录上一次的时间戳previous，和本次时间戳now。如果now-previous > wait 那就执行
 * 延迟执行：用定时器
 * @param {*} fn 执行的方法
 * @param {*} wait 等待的时间
 */
function throttle(fn, wait, immediate) {
  let previous = 0;
  let timer;

  return function (...args) {
    const now = Date.now();

    if (immediate) {
      if (now - previous > wait) {
        fn.apply(this, args);
        previous = now;
      }
    } else {
      if (timer) return;

      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}

window.throttle = throttle;
