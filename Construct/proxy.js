function parent(name) {
  this.name = name;
}

parent.prototype.show = function () {
  console.log(this.name);
};

// 测试不同返回值
// const proxy = new Proxy(parent, {
//   construct(target, args, newTarget) {
//     console.log("---handler.construct---  ", target, args, newTarget);

//     // return Reflect.construct(target, args, newTarget);
//     // return args;

//     // return true;
//     // return undefined
//     // return null;
//     // return 1234
//     return { a: "test" };
//   },
// });

// window.test = new proxy("first");

const proxy = new Proxy(
  { a: 123 },
  {
    construct(target, args, newTarget) {
      console.log("---handler.construct---  ", target, args, newTarget);
      return Reflect.construct(target, args, newTarget);
    },
  }
);

window.test = new proxy("first");
