const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
  preventExtensions(target) {
    Reflect.preventExtensions(target);
    return false
    // return true;
  },
});

const result = Reflect.isExtensible(proxy);
console.log("preventExtensions执行之前   ", result);

// Reflect.preventExtensions(proxy);

/**
 * 使用Object.preventExtensions时，如果handler中的preventExtensions返回false值，将抛出TypeError
 */
Object.preventExtensions(proxy)

console.log("preventExtensions执行之后：   ", Reflect.isExtensible(proxy));
