/**
 * handler.getOwnPropertyDescriptor返回undefined，prop不存在的情况
 */
const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
  getOwnPropertyDescriptor(target, prop) {
    console.log("--- handler.getOwnPropertyDescriptor ---", prop, typeof prop);
    return undefined;
  },
});

let result = Reflect.getOwnPropertyDescriptor(proxy, "test");
console.log("执行getOwnPropertyDescriptor：   ", result);

