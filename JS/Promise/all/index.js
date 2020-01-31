const PromiseN = require('bluebird')

const p1 = Promise.resolve(1)

const p2 = Promise.resolve(2)


const p3 = Promise.resolve(3)

const p4 = Promise.reject('error')

const arr = [p1, p2, p3, p4]

Promise.all(arr).then((result) => {
    console.log('成功', result)
}).catch((e) => {
    console.log('失败', e)

})  // 失败 error

PromiseN.some(arr).then((result) => {
    console.log('成功', result)
}).catch((e) => {
    console.log('失败', e)

})  // 失败 error

