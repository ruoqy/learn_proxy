const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

const proxy = new Proxy(b, {
  ownKeys(target) {
    // return Reflect.ownKeys(target);

    // // 返回值只能是string和symbol
    // return [
    //   "x" /*, true*/ /*, null*/ /*, undefined*/,
    //   Symbol("test") /*, 1n*/ /*,{}*/,
    // ];

    // key值不能duplicate
    return ["x", "x"];
  },
});

const result = Reflect.ownKeys(proxy);
console.log("ownKeys的执行结果为：  ", result);
