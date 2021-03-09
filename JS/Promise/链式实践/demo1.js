/**
 * then 传递promise 或 thenable值时会递归完所有promise， return 也是同样的处理方式
 * Created by zhangzc on 2018/8/31
 **/

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p');
  }, 1000);
});

p.then(
  function (v) {
    console.log('p error succ', foo.ss());
  },
  function (err) {
    console.log('p error,', err);
  }
);

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1');
  }, 1000);
});

p.then((v) => {
  console.log('p,', v); // 传递直接值的情况
});

p1.then((v) => {
  console.log('p1,', v);
  return p; // 返回promise的情况
})
  .then((v) => {
    console.log('p1 return promise,', v);
  })
  .then(
    p.then((v) => {
      // 传递promise的情况
      console.log('p1 param promise,', v);
    })
  );
