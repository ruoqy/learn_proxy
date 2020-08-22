const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

let proxy = new Proxy(b, {
  setPrototypeOf(target, proto) {
    console.log('--- 执行setPrototypeOf ---');
    return Reflect.setPrototypeOf(target, proto);
  },
});

console.log('preventExtensions之前：  ', Reflect.getPrototypeOf(proxy));
let result = Reflect.setPrototypeOf(proxy, Object)

/**
 * 执行Object.setPrototypeOf方式时，返回的结果并不会强制转换为boolean，这一点和规范不一致
 */
// let result = Object.setPrototypeOf(proxy, Object)
console.log('setPrototypeOf执行结果为：   ', result);
console.log('preventExtensions之前执行setPrototypeOf：  ', Reflect.getPrototypeOf(proxy));

Reflect.preventExtensions(b);
proxy = new Proxy(b, {
  setPrototypeOf(target, proto) {
    return Reflect.setPrototypeOf(target, proto)
  },
});

console.log('从Object改成null');
result = Reflect.setPrototypeOf(proxy, null)
console.log('setPrototypeOf执行结果为：   ', result);
console.log('preventExtensions之前执行setPrototypeOf：  ', Reflect.getPrototypeOf(proxy));
