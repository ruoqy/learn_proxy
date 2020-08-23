const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
    getOwnPropertyDescriptor(target, prop) {
        console.log("--- handler.getOwnPropertyDescriptor ---", prop, typeof prop);
        // return Reflect.getOwnPropertyDescriptor(target, prop)
        return Object.getOwnPropertyDescriptor(target, prop)
    }
});

// const result = Reflect.getOwnPropertyDescriptor(proxy, null)
const result = Reflect.getOwnPropertyDescriptor(proxy, 123)
// const result = Reflect.getOwnPropertyDescriptor(proxy, true)
// const result = Reflect.getOwnPropertyDescriptor(proxy, undefined)
// const result = Reflect.getOwnPropertyDescriptor(proxy, {test: 123})
console.log('getOwnPropertyDescriptor的执行结果为：  ', result);
