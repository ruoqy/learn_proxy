/**
 * handler.getOwnPropertyDescriptor返回undefined，但是target[prop]的描述符存在的情形
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

let result = Reflect.getOwnPropertyDescriptor(proxy, "x");
console.log("执行getOwnPropertyDescriptor：   ", result);

console.log(
  "target.x的Descriptor为：  ",
  Reflect.getOwnPropertyDescriptor(b, "x")
);

Reflect.defineProperty(b, "x", { configurable: false });
console.log(
  "target.x的Descriptor修改为：  ",
  Reflect.getOwnPropertyDescriptor(b, "x")
);
result = Reflect.getOwnPropertyDescriptor(proxy, "x");
console.log("configurable=false时执行getOwnPropertyDescriptor：   ", result);
