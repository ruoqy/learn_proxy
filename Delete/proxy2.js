const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
  deleteProperty(target, prop) {
    console.log("--- handler.deleteProperty ---", prop, typeof prop);

    return Reflect.deleteProperty(target, prop);
  },
});

// delete 不存在的属性
// Reflect.preventExtensions(b)
// let result = Reflect.deleteProperty(proxy, "key");
// console.log("delete 不存在的属性：  ", result, proxy);

// 删除不可配置的属性
// Reflect.defineProperty(proxy, 'foo', {
//     value: 'foo',
//     configurable: false,
//     writable: true,
//     enumerable: true
// })

// result = Reflect.deleteProperty(proxy, 'foo')
// console.log("delete 不可配置的属性   ", result, proxy);

// 当target不可配置的时候，删除已有属性
Reflect.preventExtensions(b)
result = Reflect.deleteProperty(proxy, 'x')
console.log("当target不可扩展的时候，删除已有属性  ", result, proxy);