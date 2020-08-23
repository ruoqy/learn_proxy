const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
    getOwnPropertyDescriptor(target, prop) {
        console.log("--- handler.getOwnPropertyDescriptor ---", prop, typeof prop);
        // return null
        return 123
        // return true
        // return Reflect.getOwnPropertyDescriptor(target, prop)
        // return undefined
    }
});

// TypeError: 'getOwnPropertyDescriptor' on proxy: trap returned neither object nor undefined
const result = Reflect.getOwnPropertyDescriptor(proxy, 'x')
console.log('getOwnPropertyDescriptor的执行结果为：  ', result);
