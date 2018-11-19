let obj = {
    a: 1,
    b: {
        c: 2,
        d: 3,
    },
    age: undefined,
    jobs: function () { }
}
obj.c = obj.b
obj.e = obj.a
obj.b.c = obj.c
obj.b.d = obj.b
obj.b.e = obj.b.c
let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)

// 会忽略 undefined
// 不能序列化函数
// 不能解决循环引用的对象