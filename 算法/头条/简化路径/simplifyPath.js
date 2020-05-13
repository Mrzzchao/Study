/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const pathArr = path.split('/')
    const stack = []
    pathArr.forEach((path, index) => {
        if(path === '' || path === '.') {
            return
        }

        if(path === '..') {  // 代表返回上一目录
            stack.pop()
        } else {
            stack.push(path)
        }
    })

    return `/${stack.join('/')}`
};

const s1 = "/a//b////c/d//././/.."
const result = simplifyPath(s1)
console.log(result)