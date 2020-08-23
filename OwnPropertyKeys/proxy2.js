const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const test = Symbol("test");
b[test] = "symbol descriptor is test";

Reflect.defineProperty(b, "foo", {
  configurable: false,
  value: "foo",
});
Reflect.preventExtensions(b);

const proxy = new Proxy(b, {
  ownKeys(target) {
    console.log("--- handler.ownKeys ---");
    // return ["x"];
    // return ["foo"]
    return ["x", "foo", test];
    // return ["x", "foo", "test", "y", Symbol("test")];
  },
});

const result = Reflect.ownKeys(proxy);
console.log("ownKeys的执行结果为：  ", result);

console.log(Object.keys(proxy));

console.log(Object.getOwnPropertyNames(proxy));

console.log(Object.getOwnPropertySymbols(proxy));

for (const objKey in proxy) {
  console.log("for...in ", objKey);
}
