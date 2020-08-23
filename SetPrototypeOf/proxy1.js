const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
  setPrototypeOf(target, proto) {
    console.log(" --- handler.setPrototypeOf ---");
    return Reflect.setPrototypeOf(target, proto);
  },
});

console.log("setPrototypeOf之前：   ", Reflect.getPrototypeOf(proxy));

Reflect.setPrototypeOf(proxy, null);
// Reflect.setPrototypeOf(proxy, () => {});

// 以下抛出TypeError: Object prototype may only be an Object or null
// Reflect.setPrototypeOf(proxy, 123);  
// Reflect.setPrototypeOf(proxy, true);

console.log("setPrototypeOf之后：   ", Reflect.getPrototypeOf(proxy));
