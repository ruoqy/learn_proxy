const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {});

console.log("setPrototypeOf之前   ", Reflect.getPrototypeOf(proxy));

/**
 * 实际执行的是：Reflect.setPrototypeOf(target, proto)或者Object.setPrototypeOf(target, proto)
 */

Reflect.setPrototypeOf(proxy, null);

console.log("setPrototypeOf之后   ", Reflect.getPrototypeOf(proxy));
