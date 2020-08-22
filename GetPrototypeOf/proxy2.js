const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {});

/**
 * 返回的是：Reflect.getPrototypeOf(target)或者Object.getPrototypeOf(target)
 */
console.log(Reflect.getPrototypeOf(proxy))
