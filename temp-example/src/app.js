// Watcher
Watcher.prototype = {
	get: function(key) {
		Dep.target = this;
		this.value = data[key];	// 这里会触发属性的getter，从而添加订阅者
		Dep.target = null;
	}
}

// Dep
function Dep() {
  this.subs = [];
}
Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub);
  },
  notify: function () {
    console.log('this.subs:', this.subs)
    this.subs.forEach(function (sub) {
      sub.update();
    });
  }
};

// Observer
function observe(data) {
  if (!data || typeof data !== 'object') {
    return;
  }
  // 取出所有属性遍历
  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key]);
  });
};

function defineReactive(data, key, val) {
  var dep = new Dep();
  observe(val); // 监听子属性
  Object.defineProperty(data, key, {
    enumerable: true, // 可枚举
    configurable: false, // 不能再define
    get: function () {
      Dep.target && dep.addDep(Dep.target);
      return val;
    },
    set: function (newVal) {
      if (val === newVal) return;
      console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal);
      val = newVal;
      dep.notify(); // 通知所有订阅者
    }
  });
}

// 运行
var data = { name: 'kindeng' };
observe(data);
data.name = 'dmq'; // 哈哈哈，监听到值变化了 kindeng --> dmq