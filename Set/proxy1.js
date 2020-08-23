const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
  set(target, prop, value, receiver) {
    console.log("--- handler.set ---", receiver, prop, typeof prop);

    return Reflect.set(target, prop, value, receiver);
  },
});
// const key = null
// const key = 123
// const key = true
// const key = undefined
const key = { test: 123 };

const result = Reflect.set(proxy, key, 'test');
console.log("set的执行结果为：  ", result);
