function Promise(fn) {
    var PENDING = 0     // 执行状态
    var FULFILLED = 1   // 成功状态
    var REJECTION = 2   // 失败状态

    var value = null    // 异步返回值
    var state = PENDING // 执行状态
    var handlers = []   // then 处理队列

    function resolve(val) {
        value = val
        state = FULFILLED
        handlers.forEach(handle)
        handlers = null
    }

    function reject(val) {
        value = val
        state = REJECTION
        handlers.forEach(handle)
        handlers = null
    }

    fn.call(this, resolve, reject)

    function handle(handler) {
        if(typeof handler !== 'object') throw new Error('处理错误')

        if(state === PENDING) {
            handlers.push(handler)
        }

        if(state === FULFILLED) {
            handler.onFullFilled(value)
        }

        if (state === REJECTION) {
            handler.onRejection(value)
        }
    }

    this.done = function(onFullFilled, onRejection) {
        setTimeout(function() {
            handle({
                onFullFilled,
                onRejection
            })
        }, 0)
    }

    this.then = function(onFullFilled, onRejection) {
        var self = this
        return new Promise(function(resolve, reject) {
            self.done(function(result) {
                try {
                    resolve(onFullFilled(result))       // then 传递
                } catch(e) {
                    reject(e)
                }
            }, function(error) {
                try {
                    resolve(onRejection(error))
                } catch(e) {
                    reject(e)
                }
            })
        })
    }
}

var p = new Promise(function (resolve) {
    setTimeout(function () {
        resolve(1000)
    }, 1000)
})
    .then(function (val) {
        console.log(val); // 1000
        return 10000
    })
    .then(function (val) {
        console.log(val); // 10000
        return 100000
    })
    .then(function (val) {
        console.log(val); // 100000
    })