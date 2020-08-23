const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
  has(target, prop) {
    console.log("--- handler.has ---", prop, typeof prop);

    return Reflect.has(target, prop)
  },
});
// const key = null
// const key = 123
// const key = true
const key = undefined
// const key = { test: 123 };

const result = Reflect.has(proxy, key);
console.log("has的执行结果为：  ", result);

console.log('in操作符   ', key in proxy)

for (const objKey in Proxy) {
    if (Proxy.hasOwnProperty(objKey)) {
        console.log('for in 操作   ', objKey )
    }
}
