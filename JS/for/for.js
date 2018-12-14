for (let i = 0, j = console.log('初始化'); i < 3 && (console.log('条件') == 'undefined' || true); i++, console.log('循环处理')) {
    console.log('循环体')
    console.log('i', i)
    console.log(this)
    console.log('---------------------------------')
}

(let i = 0, j = console.log('初始化'); i < 3 && (console.log('条件') == 'undefined' || true); i++ , console.log('循环处理'))
// 相当于

function kuohao() {
    var i = 0
    var j = console.log('初始化')
    function neibu() {
        if (i < 3 && (console.log('条件') == 'undefined' || true)) {
            console.log('循环体')
            console.log('i', i)
            console.log(this)
            console.log('---------------------------------')
            i++
            return neibu()
        } else {
            return
        }
    }
    return neibu()
}
kuohao()

