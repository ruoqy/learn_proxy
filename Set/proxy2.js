const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
  set(target, prop, value, reveiver) {
    console.log("--- handler.set ---    ", prop, value);

    return Reflect.set(target, prop, value);
  },
});

let result = Reflect.set(proxy, "key", "test");
console.log("set 不存在的属性  ", result);

// // 不可修改属性且设置不相同的值
// Reflect.defineProperty(proxy, "foo", {
//   value: "foo",
//   configurable: false,
//   writable: false,
//   enumerable: false,
// });

// result = Reflect.set(proxy, "foo", "change foo");
// console.log("set 不可写属性值不同   ", result, proxy.foo);

// 访问器属性，没有定义set
Reflect.defineProperty(proxy, "boo", {
  get() {
    return "boo"
  },
  configurable: false,
  enumerable: false,
});

result = Reflect.set(proxy, "boo", "change boo");
console.log("set 访问器属性，没有定义set   ", result);

console.log((proxy.x = Symbol("test")));
console.log((proxy["x"] = Symbol("test1")));
