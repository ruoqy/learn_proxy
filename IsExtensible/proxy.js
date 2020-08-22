const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
    isExtensible(target) {
        Reflect.isExtensible(target)
        return true
        // return false
        // return 0
    }
});

const result = Reflect.isExtensible(proxy)
console.log("preventExtensions执行之前   ", result);

// Reflect.preventExtensions(proxy);

// console.log("preventExtensions执行之后：   ", Reflect.isExtensible(proxy));
