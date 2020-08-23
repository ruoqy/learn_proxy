const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
  deleteProperty(target, prop) {
    console.log("--- handler.deleteProperty ---", prop, typeof prop);

    return Reflect.deleteProperty(target, prop);
  },
});
// const key = null
// const key = 123
// const key = true
// const key = undefined
const key = { test: 123 };

const result = Reflect.deleteProperty(proxy, key);
console.log("delete的执行结果为：  ", result);
