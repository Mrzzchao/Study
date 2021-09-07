/**
 * // 实现一个u。
u.console("breakfast").setTimeout(3000)
.console("lunch"). setTimeout(3000).console("dinner")
 */

class U {
  constructor() {
    this.p = Promise.resolve();
  }

  runTask(task) {
    this.p = this.p.then(task);
  }

  console(text) {
    this.runTask(() => {
      console.log(text);
    });
    return this;
  }

  setTimeout(time) {
    this.runTask(() => {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
      });
    });
    return this;
  }
}

const u = new U();
u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner');
