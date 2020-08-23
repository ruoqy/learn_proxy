const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

Reflect.preventExtensions(b)

const proxy = new Proxy(b, {
  has(target, prop) {
    console.log("--- handler.has ---", prop, typeof prop);

    return false
  },
});

// let result = Reflect.has(proxy, 'foo')
// console.log('target不可扩展，访问不在属性：  ',result)

result = Reflect.has(proxy, 'x')
console.log('target不可扩展，访问已有属性  ', result)