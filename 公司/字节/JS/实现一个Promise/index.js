const FULFILLED = 'FULFILLED';
const PENDING = 'PENDING';
const REJECT = 'REJECT';

class MyPromise {
  status = PENDING;

  onFulfilledCallbackList = [];

  onRejectCallbackList = [];

  value;

  reason;

  constructor(executor) {
    executor(this.resolve.bind(this), this.reject.bind(this));
  }

  then(onFulfilled, onReject) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.status === REJECT) {
      onFulfilled(this.reason);
    }

    if (this.status === PENDING) {
      this.onFulfilledCallbackList.push(onFulfilled);
      this.onRejectCallbackList.push(onReject);
    }
  }

  resolve(value) {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
    }

    while (this.onFulfilledCallbackList.length) {
      try {
        const cb = this.onFulfilledCallbackList.shift();
        this.value = cb(this.value);
      } catch (e) {
        this.reject(e.message);
      }
    }
  }

  reject(reason) {
    if (this.status === PENDING) {
      this.status = REJECT;
      this.reason = reason;
    }

    while (this.onRejectCallbackList.length) {
      const cb = this.onRejectCallbackList.shift();
      this.reason = cb(this.reason);
    }
  }

  catch(onReject) {
    if (this.status === REJECT) {
      onReject(this.reason);
    }
    if (this.status === PENDING) {
      this.onRejectCallbackList.push(onReject);
    }
  }

  static all(promiseArr) {
    const result = [];
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseArr.length; i++) {
        const p = promiseArr[i];
        Promise.resolve(p).then(
          (data) => {
            result.push(data);
            if (result.length === promiseArr.length) {
              resolve(result);
            }
            return data;
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }

  static allSettled(promiseArr) {
    const result = [];
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promiseArr.length; i++) {
        Promise.resolve(promiseArr[i]).then(
          (data) => {
            result.push({
              status: FULFILLED,
              value: data,
            });

            if (result.length === promiseArr.length) {
              resolve(result);
            }
          },
          (err) => {
            result.push({
              status: REJECT,
              reason: err,
            });

            if (result.length === promiseArr.length) {
              resolve(result);
            }
          }
        );
      }
    });
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject('success');
  }, 2000);
});

const promise2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    // reject('error');
    resolve('success2');
  }, 2000);
});

MyPromise.all([promise, promise2]).then((result) => {
  console.log(result);
});

MyPromise.allSettled([promise, promise2])
  .then((res) => {
    console.log('res', res);
  })
  .catch((err) => {
    console.error('error', err);
  });
