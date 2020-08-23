const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
  get(target, prop) {
    console.log("--- handler.get ---", prop);

    return 123;
    // return undefined
  },
});

let result = Reflect.get(proxy, "key");
console.log("get 不存在的属性  ", result);

// 不可修改属性返回不相同的值
// Reflect.defineProperty(proxy, 'foo', {
//     value: 'foo',
//     configurable: false,
//     writable: false,
//     enumerable: false
// })

// result = Reflect.get(proxy, 'foo')
// console.log("get 不可写属性值不同   ", result);

// 不可修改属性，返回相同的值
// Reflect.defineProperty(proxy, 'baz', {
//     value: 123,
//     configurable: false,
//     writable: false,
//     enumerable: false
// })

// result = Reflect.get(proxy, 'baz')
// console.log("get 不可写属性单值相同   ", result);

// 访问器属性，没有定义get
// Reflect.defineProperty(proxy, "boo", {
//   set(val) {
//     console.log("boo  ", val);
//   },
//   configurable: false,
//   enumerable: false,
// });

// result = Reflect.get(proxy, "boo");
// console.log("get 访问器属性，没有定义get   ", result);

console.log(proxy.x);
console.log(proxy["x"]);
