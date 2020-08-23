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

// console.log("--- 修改属性的描述符configurable为不一样的值 ---");
// console.log(Reflect.getOwnPropertyDescriptor(proxy, "x"));
// result = Reflect.defineProperty(proxy, "x", {
//   value: 123,
//   enumerable: true,
//   configurable: false,
//   writable: true,
// });
// console.log(Reflect.getOwnPropertyDescriptor(proxy, "x"));

// console.log("--- 设置不存在属性的描述符 ---");
// console.log(Reflect.getOwnPropertyDescriptor(proxy, "test"));
// result = Reflect.defineProperty(proxy, "test", {
//   value: 'test',
//   enumerable: true,
//   configurable: false,
//   writable: true,
// });
// console.log(Reflect.getOwnPropertyDescriptor(proxy, "test"));

Reflect.defineProperty(proxy, "foo", {
  value: "foo",
  configurable: true,
  writable: false,
  enumerable: true,
});

console.log("修改之前的：  ", Reflect.getOwnPropertyDescriptor(proxy, "foo"));

Reflect.defineProperty(proxy, "foo", {
  value: "test",
  enumerable: true,
  configurable: false,
  writable: false,
});

console.log("修改之后的：  ", Reflect.getOwnPropertyDescriptor(proxy, "foo"));
