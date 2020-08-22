const a = Object.create(null);
a.test = "a props";

const b = Object.create(a);
b.x = 12;

/**
 * handler必须为Object，且不能是null
 */
// const proxy = new Proxy(b, null);

// const proxy = new Proxy(b, undefined);

const proxy = new Proxy(b, 'proxy'); // TypeError: Cannot create proxy with a non-object as target or handler