const log = (...rest) => {
  console.log(rest);
};

const proxy = new Proxy(log, {
  apply(target, thisArg, argList) {
    console.log("---handler.apply--- ", thisArg, argList);

    return Reflect.apply(target, thisArg, argList);
  },
});

proxy("test log call");
proxy.call(window, window.location.href);
proxy.apply(null, [1, 2, 3]);
