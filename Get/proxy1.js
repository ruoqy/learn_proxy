const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
  get(target, prop, receiver) {
    console.log("--- handler.et ---", receiver, prop, typeof prop);

    return Reflect.get(target, prop);
  },
});
// const key = null
// const key = 123
// const key = true
// const key = undefined
const key = { test: 123 };

const result = Reflect.get(proxy, key);
console.log("get的执行结果为：  ", result);
