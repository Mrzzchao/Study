// 间隔时间内只执行一次
function throttle(fn, wait) {
    var starttime = null
    var timer = null

    return function(...args) {
        var now = Date.now()

        if(now - starttime >= wait || !starttime) {
            fn.apply(this, args)
            starttime = now
        } else {
            if(timer) {
                clearTimeout(timer)
                timer = null
            }
            // console.log(wait - (now - starttime));
            timer = setTimeout(() => {
                fn.apply(this, args)
                starttime = now
            }, wait - (now - starttime))
        }
    }
}

function handler() {
    console.log('throttle')
    console.log('-------')
}

var handlerD = throttle(handler, 1000)

setInterval(() => {
    handlerD()
}, 300)