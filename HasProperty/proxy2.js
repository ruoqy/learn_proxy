const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
  has(target, prop) {
    console.log("--- handler.has ---", prop, typeof prop);

    return false
  },
});

Reflect.defineProperty(proxy, 'foo', {
  value: 'foo',
  enumerable: true,
  configurable: false,
  writable: true
})

let result = Reflect.has(proxy, 'foo')
console.log('属性不可配置时：  ',result)

result = Reflect.has(proxy, 'test')
console.log('属性不存在时：  ', result)