const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

/**
 * target[prop]的configurable=true，handler.getOwnPropertyDescriptor不能返回configurable=false
 */
// Reflect.defineProperty(b, "foo", {
//   value: "foo",
//   writable: true,
//   configurable: true,
//   enumerable: true,
// });
// const proxy = new Proxy(b, {
//   getOwnPropertyDescriptor(target, prop) {
//     console.log("--- handler.getOwnPropertyDescriptor ---", prop, typeof prop);

//     // return {
//     //     value: "foo1",
//     //     writable: true,
//     //     configurable: true,
//     //     enumerable: true,
//     // };

//     // return {
//     //     value: "foo",
//     //     writable: false,
//     //     configurable: true,
//     //     enumerable: true,
//     // };

//     // return {
//     //     value: "foo",
//     //     writable: true,
//     //     configurable: true,
//     //     enumerable: false,
//     // };

//     return {
//         value: "foo",
//         writable: true,
//         configurable: false,
//         enumerable: true,
//     };
//   },
// });

// result = Reflect.getOwnPropertyDescriptor(proxy, "foo");
// console.log("原属性不可配置可删除可枚举：   ", result);

/**
 * target[prop]的configurable=false，handler.getOwnPropertyDescriptor只能修改value的值
 */
// Reflect.defineProperty(b, "bar", {
//   value: "bar",
//   writable: true,
//   configurable: false,
//   enumerable: true,
// });

// const proxy = new Proxy(b, {
//   getOwnPropertyDescriptor(target, prop) {
//     console.log("--- handler.getOwnPropertyDescriptor ---", prop, typeof prop);

//     // return {
//     //   value: "bar1",
//     //   writable: true,
//     //   configurable: false,
//     //   enumerable: true,
//     // };

//     // return {
//     //   value: "bar",
//     //   writable: false,
//     //   configurable: false,
//     //   enumerable: true,
//     // };

//     // return {
//     //     value: "bar",
//     //     writable: true,
//     //     configurable: false,
//     //     enumerable: false,
//     // };

//     return {
//       value: "bar",
//       writable: true,
//       configurable: true,
//       enumerable: true,
//     };
//   },
// });

// result = Reflect.getOwnPropertyDescriptor(proxy, "bar");
// console.log("原属性可配置不可删除可枚举：   ", result);

/**
 * target[prop]writable|enumerable=false，handler.getOwnPropertyDescriptor除了configurable别的值都可以修改
 */
Reflect.defineProperty(b, "baz", {
  value: "baz",
  writable: false,
  configurable: true,
  enumerable: true,
});

const proxy = new Proxy(b, {
  getOwnPropertyDescriptor(target, prop) {
    console.log("--- handler.getOwnPropertyDescriptor ---", prop, typeof prop);

    // return {
    //   value: "baz1",
    //   writable: false,
    //   configurable: true,
    //   enumerable: true,
    // };

    // return {
    //   value: "baz",
    //   writable: true,
    //   configurable: true,
    //   enumerable: true,
    // };

    // return {
    //   value: "baz",
    //   writable: false,
    //   configurable: false,
    //   enumerable: true,
    // };

    return {
      value: "baz",
      writable: true,
      configurable: true,
      enumerable: true,
    };
  },
});

result = Reflect.getOwnPropertyDescriptor(proxy, "baz");
console.log("原属性不可配置可删除可枚举：   ", result);

/**
 * handler.getOwnPropertyDescriptor修改访问器属性描述符, 不能修改configurable值
 */
// Reflect.defineProperty(b, "foo2", {
//   get() {
//     return "foo2";
//   },
//   set: (value) => {
//     console.log("setter", value);
//   },
//   configurable: true,
//   enumerable: true,
// });

// const proxy = new Proxy(b, {
//   getOwnPropertyDescriptor(target, prop) {
//     console.log("--- handler.getOwnPropertyDescriptor ---", prop, typeof prop);

//     return {
//       get: () => {
//         return "change foo2";
//       },
//       set(value) {
//         console.log("change setter", value);
//       },
//       configurable: true,
//       enumerable: true,
//     };

//     // return {
//     //     value: 'change foo2',
//     //     configurable: true,
//     //     enumerable: true,
//     //     writable: true
//     // }
//   },
// });

// result = Reflect.getOwnPropertyDescriptor(proxy, "foo2");
// console.log("原属性不可配置可删除可枚举：   ", result);
