// 先定义三个常量表示状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  // 当前的状态
  status = PENDING;

  // 当前的值
  value = '';

  // 失败的值
  reason = '';

  // 成功回调函数
  onFullFilledCallBacks = [];

  // 失败回调函数
  onRejectedCallBacks = [];

  constructor(executor) {
    executor(this.resolve, this.reject);
  }

  // 更改成功的状态和值
  resolve = (value) => {
    // 如果是等待状态，那就修改为成功状态
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;

      while (this.onFullFilledCallBacks.length) {
        const callback = this.onFullFilledCallBacks.shift();
        try {
          this.value = callback(this.value);
        } catch (e) {
          this.reject(e);
        }
      }
    }
  };

  // 更改失败的状态和原因
  reject = (reason) => {
    // 如果是等待状态，那就修改为失败状态
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;

      while (this.onRejectedCallBacks.length) {
        const callback = this.onRejectedCallBacks.shift();
        this.reason = callback(this.reason);
      }
    }
  };
  then(onFullFilled, onRejection) {
    if (typeof onFullFilled !== 'function') {
      throw new Error('onFullFilled must be a function');
    }
    if (onRejection && typeof onRejection !== 'function') {
      throw new Error('onRejection must be a function');
    }
    // 完成状态的话就直接执行完成回调
    if (this.status === FULFILLED) {
      const result = onFullFilled(this.value);
    }

    // 失败状态的话就直接执行失败回调
    if (this.status === REJECTED) {
      onRejection(this.reason);
    }

    // 等待状态的话，可能因为任务是异步的，先缓存起回调，等异步任务执行完成以后，再根据状态执行相应回调
    if (this.status === PENDING) {
      if (onFullFilled) {
        this.onFullFilledCallBacks.push(onFullFilled);
      }

      if (onRejection) {
        this.onRejectedCallBacks.push(onRejection);
      }
    }
    return this;
  }

  catch(onRejection) {
    if (this.status === REJECTED) {
      onRejection(this.reason);
    }

    if (this.status === PENDING) {
      this.onRejectedCallBacks.push(onRejection);
    }
  }

  // 全部成功算成功，有一个失败就算失败
  static all(promiseArr) {
    const result = [];
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promiseArr.length; i++) {
        Promise.resolve(promiseArr[i])
          .then(
            (data) => {
              result.push(data);
              if (result.length === promiseArr.length) {
                resolve(result);
              }
              return Promise.resolve(result);
            },
            (err) => {
              return reject(err);
            }
          )
          .catch((err) => {
            reject(err);
          });
      }
    });
  }

  // 会返回所有结果
  static allSettled(promiseArr) {
    return new MyPromise((resolve, reject) => {
      const result = [];
      function checkResolve() {
        if (promiseArr.length === result.length) {
          resolve(result);
        }
      }
      for (let i = 0; i < promiseArr.length; i++) {
        Promise.resolve(promiseArr[i]).then(
          (data) => {
            result.push({
              status: FULFILLED,
              value: data,
            });
            checkResolve();
          },
          (err) => {
            result.push({
              status: REJECTED,
              reason: err,
            });
            checkResolve();
          }
        );
      }
    });
  }
}

module.exports = MyPromise;
