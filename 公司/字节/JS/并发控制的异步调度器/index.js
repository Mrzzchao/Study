/**
 * 并发控制的异步调度器
 * 一个任务列表
 * 一个统计当前正在运行的数量count
 * 新增的时候，如果运行数量, 没有超过并发数量, 直接执行
 * 如果执行的数量大于限制，先放如任务队列中
 */
class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.task = [];
    this.count = 0;
  }

  // 增加调度函数
  add(task) {
    return new Promise((resolve, reject) => {
      // 为了后面task执行完成，有一个引用可以直接调用
      task.resolve = resolve;

      if (this.count < this.limit) {
        this.count++;
        this.run(task);
      } else {
        this.task.push(task);
      }
    });
  }

  // 执行
  run(task) {
    return task().then((result) => {
      this.count--;
      // 执行之前保存的promise resolve
      task.resolve(result);

      if (this.task.length) {
        const nextTask = this.task.shift();
        this.run(nextTask);
      }
      return result;
    });
  }
}

const timeout = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
const scheduler = new Scheduler(1);
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(300, '4');
addTask(300, '5');
