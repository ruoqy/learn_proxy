const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
  defineProperty(target, prop, desc) {
    console.log("--- handler.defineProperty ---", prop, typeof prop);

    // return Reflect.defineProperty(target, prop, desc)
    return Object.defineProperty(target, prop, desc);
  },
});
// const key = null
// const key = 123
// const key = true
// const key = undefined
const key = { test: 123 };

const desc = undefined
// const desc= {}
// const desc = {test: 123}
// const desc = 123
// const desc = true
// const desc = null;

const result = Reflect.defineProperty(proxy, key, desc);
console.log("defineProperty的执行结果为：  ", result);
console.log(Reflect.getOwnPropertyDescriptor(proxy, key));
