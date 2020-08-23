- 创建`proxy`对象时，`handler`必须为`object`，且不能为`null`
- `handler`上没有`getOwnPropertyDescriptor`时，访问的是`target.[[GetOwnProperty]](prop)`
- `prop`不是为`String`或`Symbol`时，`prop`被转换为`string`，结果为`undefined`
- `handler.getOwnPropertyDescriptor`返回值不是`undefined`和`Object`，抛出`TypeError`
- `handler.getOwnPropertyDescriptor`不能获取到原型链上属性的描述符，只能获取到自有属性的描述符
- `handler.getOwnPropertyDescriptor`返回`undefined`，但是`prop`的`configurable`为`false`，抛出`TypeError`
- `handler.getOwnPropertyDescriptor`返回`undefined`，但是`target`的`isExtensible`为`false`，抛出`TypeError`
- `handler.getOwnPropertyDescriptor`返回`object`，且`target`的`isExtensible`为`false`，但是`target[prop]`不存在，抛出`TypeError`
- `handler.getOwnPropertyDescriptor`返回`{configurable: false, ...}`，除非`target[prop]`的`{configurable: false}`, 否则抛出`TypeError`
- `handler.getOwnPropertyDescriptor`返回`{configurable: false, writable: false,...}`，除非`target[prop]`的`{configurable: false, writable: false}`, 否则抛出`TypeError`