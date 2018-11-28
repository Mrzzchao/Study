/**
 * 二进制求和
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    //拆分并倒置，方便循环时尾数相加
    a = a.split('').reverse();
    b = b.split('').reverse();
    //存放结果
    var c = [];
    //进位
    var add = 0;

    for (var i = 0, len = Math.max(a.length, b.length); i < len; i++) {
        //两个位数不同超出索引可能是undefined
        var sum = (a[i] === undefined ? 0 : Number(a[i])) + (b[i] === undefined ? 0 : Number(b[i])) + add;
        //二进制的且运算，判断sum最后一位是不是1，存到结果中
        c[i] = sum & 1;
        //进一位
        if (sum >= 2)
            add = 1;
        else
            add = 0;
    }
    //循环结束，有进位，最后再补一个1哦
    if (add)
        c[len] = 1;
    //把结果倒置，拼成字符串
    return c.reverse().join('').toString();
};

var result = addBinary('11', '1');

console.log(result);