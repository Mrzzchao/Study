/**
 * 长整数加减
 * @param a
 * @param b
 * @returns {string}
 */

function add(a, b) {
    var n = a.toString().split('');
    var m = b.toString().split('');
    var aP = n[0];  // 符号
    var bP = m[0];


    var aArr = aP === '-' ? n.slice(1) : n;
    var bArr = bP === '-' ? m.slice(1) : m;

    var aLen = aArr.length;
    var bLen = bArr.length;



    var ret = [];
    var retP = '';

    var len = Math.max(aLen, bLen);
    var addN = 0;
    var subN = 0;

    for(var i = 0; i < len; i++) {
        if(!aArr[i]) aArr.unshift(0);
        if(!bArr[i]) bArr.unshift(0);
    }

    aArr = aArr.reverse();
    bArr = bArr.reverse();


    if(aP === '-' && bP === '-') {
        retP = '-'
    }


    for(var i = 0; i < len; i++) {
        var d = +aArr[i];
        var e = +bArr[i];
        var sum = 0;
        var subSum = (d ? d  : 0) - (e ? e : 0);

        if(aP === '-' && bP !== '-') {
            if(aLen > bLen) {
                retP = '-'
            } else {
                if(d < e) {
                    retP = ''
                } else {
                    retP = '-'
                }
            }
            sum = (d ? d  : 0) - (e ? e : 0) - subN;
        }
        if(aP !== '-' && bP === '-'){
            if(aLen < bLen) {
                retP = '-'
            } else {
                if(d > e) {
                    retP = ''
                } else {
                    retP = '-'
                }
            }
            sum = (d ? d  : 0) - (e ? e : 0) - subN;
        }
        if(aP !== '-' && bP !== '-' || aP === '-' && bP === '-') {
            sum = (d ? d : 0) + (e ? e : 0) + addN;
        }

        if(+sum >= 10) {
            addN = 1;
            sum = sum - 10;
        } else {
            addN = 0;
        }

        if(subSum < 0) {
            subN = 1;
            sum = sum + 10;
        } else {
            subN = 0;
        }

        ret[i] = sum;
    }

    if(addN) ret[len] = 1;



    return retP + ret.reverse().join('').replace(/^0*/, '');

}

var result =  add('111', '-22');

console.log(result);