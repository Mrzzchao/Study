const p = Promise.resolve(42);

p.then(function (msg) {
  console.log(msg.toLowerCase()); // 会报错
}).done(null, handlerErrors);

function handlerErrors(err) {
  console.log(err);
}
