/**
 * 防抖：在wait毫秒内，没有方法再次调用，则执行该方法，否则重新开始计时。
 * 延迟防抖：先等wait毫秒，没有重复调用，就可以执行。
 * 立即执行防抖，先执行，然后wait毫秒内都不会重新调用。
 * @param {*} func 执行方法
 * @param {*} wait 防抖等待时间
 * @param {*} immediate 立即执行标志
 */
function debounce(func, wait, immediate) {
  // 记时器
  let timer;

  return function (...args) {
    // 先清除计时器
    if (timer) {
      clearTimeout(timer);
    }

    if (immediate) {
      // 如果当前计时器为空，就可以立即执行
      const callNow = !timer;
      if (callNow) {
        console.log('立即执行中～～～');

        // 如果当前执行器为空，就代表wait毫秒内，没有新的触发，可以开始执行一次
        func.apply(this, args);
      }
      timer = setTimeout(() => {
        // wait后，请客定时器，可以重复执行
        timer = null;
      }, wait);
    } else {
      // 然后重新开始计时
      timer = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    }
  };
}

window.debounce = debounce;
