// 总是在最后一次事件的wait毫秒后执行

function debounce(func, wait) {
    let timer = 0

    return function(...args) {
        if(timer) clearTimeout(timer)

        timer = setTimeout(() => {
            func.apply(this, args)
        }, wait);
    }
}

function handler() {
    console.log('hello')
}

let handlerD = debounce(handler, 100)

// handlerD()

setInterval(() => {
    handlerD()
}, 200)