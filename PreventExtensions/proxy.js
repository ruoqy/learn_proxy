const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
  preventExtensions(target) {
    console.log('--- handler.preventExtensions ---');
    Reflect.preventExtensions(target);
    // return false;
    return true;
  },
});

const result = Reflect.isExtensible(proxy);
console.log("执行preventExtensions之前   ", result);

// console.log("执行preventExtensions   ", Reflect.preventExtensions(proxy));

/**
 * 使用Object.preventExtensions时，如果handler中的preventExtensions返回false值，将抛出TypeError
 */
console.log(Object.preventExtensions(proxy))

console.log("执行preventExtensions之后：   ", Reflect.isExtensible(proxy));
