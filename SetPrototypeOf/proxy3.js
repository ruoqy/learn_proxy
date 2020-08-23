const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
  setPrototypeOf(target, proto) {
    console.log(" --- handler.setPrototypeOf ---");
    // return Reflect.setPrototypeOf(target, proto);

    /**
     * 以下这种情况返回false时抛出TypeError: 'setPrototypeOf' on proxy: trap returned falsish for property 'undefined'
     */
    Reflect.setPrototypeOf(target, proto);
    // Object.setPrototypeOf(target, proto);
    return true
  },
});

console.log("setPrototypeOf之前   ", Reflect.getPrototypeOf(proxy));

const result = Reflect.setPrototypeOf(proxy, null);
// const result = Object.setPrototypeOf(proxy, Object)

console.log('setPrototypeOf执行结果为：   ', result);

console.log("setPrototypeOf之后   ", Reflect.getPrototypeOf(proxy));
