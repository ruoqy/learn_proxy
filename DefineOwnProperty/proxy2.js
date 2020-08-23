const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

Reflect.preventExtensions(b);

const proxy = new Proxy(b, {
  defineProperty(target, prop, desc) {
    console.log("--- handler.defineProperty ---", prop, typeof prop);

    // return Reflect.defineProperty(target, prop, desc)
    return Object.defineProperty(target, prop, desc);
  },
});

console.log("--- 修改已有属性的描述符 ---");
console.log(Reflect.getOwnPropertyDescriptor(proxy, "x"));
let result = Reflect.defineProperty(proxy, "x", {
  value: 123,
});
console.log(Reflect.getOwnPropertyDescriptor(proxy, "x"));

console.log("--- 修改不存在属性的描述符 ---");
console.log(Reflect.getOwnPropertyDescriptor(proxy, "test"));
result = Reflect.defineProperty(proxy, "test", {
  value: 123,
  enumerable: true,
  configurable: true,
  writable: true,
});
console.log(Reflect.getOwnPropertyDescriptor(proxy, "test"));
