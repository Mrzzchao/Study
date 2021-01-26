const data = { name: 'zhangzc' };

function observe(data) {
  if (!data || typeof data !== 'object') return;

  // 遍历每一个属性，添加响应式
  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key]);
  });
}

function defineReactive(data, key, val) {
  const dep = new Dep(); // 每一个数据维护一个订阅器
  observe(val); // 监听子属性
  Object.defineProperty(data, key, {
    enumerable: true, // 可枚举
    configurable: false, // 不能再define
    get() {
      Dep.target && dep.addSub(Dep.target);
      return val;
    },
    set(newVal) {
      val = newVal;
      dep.notify();
    },
  });
}

// 发布订阅器
function Dep() {
  this.subs = [];
}

Dep.prototype = {
  addSub(sub) {
    this.subs.push(sub);
  },
  notify() {
    this.subs.forEach(function (sub) {
      sub.update();
    });
  },
};

// 监视器
function Watcher(vm, exp, cb) {
  this.cb = cb;
  this.vm = vm;
  this.exp = exp;
  // 此处为了触发属性的getter，从而在dep添加自己，结合Observer更易理解
  this.value = this.get();
}

Watcher.prototype = {
  update() {
    const val = this.get();
    const oldVal = this.value;
    if (oldVal !== val) {
      this.value = val;
      this.cb.call(this.vm, val, oldVal);
    }
  },
  get() {
    Dep.target = this;
    const value = this.vm[this.exp];
    Dep.target = null;
    return value;
  },
};

observe(data);
new Watcher(data, 'name', function (newVal, oldVal) {
  console.log('vm的值变化了', oldVal, '-->', newVal);
});
data.name = 'zzc';
