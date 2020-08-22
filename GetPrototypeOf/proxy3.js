const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
  getPrototypeOf(target) {
    return 123
    // return undefined
    // return Symbol('a')
    // return true
    // return null
  },
});

console.log(Reflect.getPrototypeOf(proxy)); // TypeError: 'getPrototypeOf' on proxy: trap returned neither object nor null
