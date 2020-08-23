/**
 * 不可扩展对象上，增加新属性的情况
 */
const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

Reflect.preventExtensions(b);

const proxy = new Proxy(b, {
  getOwnPropertyDescriptor(target, prop) {
    console.log("--- handler.getOwnPropertyDescriptor ---", prop, typeof prop);
    return {
      value: "test",
      writable: true,
      enumerable: true,
      configurable: true,
    };
  },
});

let result = Reflect.getOwnPropertyDescriptor(proxy, "test");
console.log("执行getOwnPropertyDescriptor：   ", result);
