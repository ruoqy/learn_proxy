const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

let proxy = new Proxy(b, {
  getPrototypeOf(target) {
    console.log(" --- handler.getPrototypeOf ---");
    return { test: 1234 };
    // return Reflect.getPrototypeOf(target);
  },
});

console.log('preventExtensions之前：  ', Reflect.getPrototypeOf(proxy));

Reflect.preventExtensions(b);
proxy = new Proxy(b, {
  getPrototypeOf(target) {
    // return { test: 1234 }; // TypeError: 'getPrototypeOf' on proxy: proxy target is non-extensible but the trap did not return its actual prototype
    return Reflect.getPrototypeOf(target)
  },
});
console.log('preventExtensions之后：  ', Reflect.getPrototypeOf(proxy));
