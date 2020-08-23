const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
  getPrototypeOf(target) {
    console.log(" --- handler.getPrototypeOf ---");
    return Reflect.getPrototypeOf(target);
  },
});

/**
 * proxy上没有__proto__，以下结果为undefined
 */
// console.log(proxy.__proto__);

/**
 * 应该使用Reflect.getPrototypeOf或者Object.getPrototypeOf
 */
console.log(Reflect.getPrototypeOf(proxy))
