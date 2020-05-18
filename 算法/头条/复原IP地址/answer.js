/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result = [];
    const len = s.length
    //递归函数，参数1为字符串入参
    //参数2用于记录字符串下表
    //参数3用户保存当前IP字符串
    //参数4用于记录字符串被划分几段
    helper(s,0,'',0)
    return result
    
    function helper(ip,idx,path,num){
        //如果字符串s被划分超过4段，返回
        if(num > 4) return;
        //如果字符串s被划分为4段，切所有的字符串使用完，将当前IP保存到result的数组中
        if(num === 4 && idx == len){
            result.push(path)
        }
        //对字符串s划分
        for(let i = 1; i < 4 ; i++){
            if(idx+i>len) return;
            const str = ip.substring(idx,idx+i)
            //判定新划分的字段是否符合IP规则
            if(str[0] === '0'&&str.length>1 ||  Number(str)>255) return;
            //如果符合，递归
            helper(ip,idx+i,path+str+(num === 3 ?'':'.'),num+1)
        }
    }
   
};


const s1 = "25525511135"
const result = restoreIpAddresses(s1)
console.log(result)