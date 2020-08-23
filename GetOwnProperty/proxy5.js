/**
 * handler.getOwnPropertyDescriptor返回undefined，但是target的isExtensible为false
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
console.log("执行getOwnPropertyDescriptor：  ", result);

console.log("target的isExtensible：  ", Reflect.isExtensible(b));

Reflect.preventExtensions(b);
console.log("target执行preventExtensions后：  ", Reflect.isExtensible(b));

result = Reflect.getOwnPropertyDescriptor(proxy, "x");
console.log("isExtensible=false时执行getOwnPropertyDescriptor：   ", result);
