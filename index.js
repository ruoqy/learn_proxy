// handler类型错误
// import './GetPrototypeOf/proxy1'

// handler 没有getPrototypeOf
// import './GetPrototypeOf/proxy2'

// handler.getPrototypeOf返回值非Object
// import './GetPrototypeOf/proxy3'

// target不可扩展的情况
// import './GetPrototypeOf/proxy4'

// getPrototypeOf拦截哪些操作
// import "./GetPrototypeOf/proxy5"

// proto需为Object(包含null)
// import './SetPrototypeOf/proxy1'

// handler 没有setPrototypeOf
// import './SetPrototypeOf/proxy2'

// setPrototypeOf 返回假值
// import './SetPrototypeOf/proxy3'

// setPrototypeOf为其他值
// import './SetPrototypeOf/proxy4'

// isExtensible
// import './IsExtensible/proxy'

// preventExtensions
// import './PreventExtensions/proxy'

// getOwnPropertyDescriptor 入参prop非string非symbol
// import './GetOwnProperty/proxy1'

//  getOwnPropertyDescriptor返回结果不是object和undefined
// import './GetOwnProperty/proxy2'

// getOwnPropertyDescriptor 入参prop是原型链上的属性
// import './GetOwnProperty/proxy3'

// getOwnPropertyDescriptor 返回undefined，访问prop的configurable为false的情况
// import './GetOwnProperty/proxy4'

// getOwnPropertyDescriptor 返回undefined，target的isExtensible为false的情况
// import './GetOwnProperty/proxy5'

// getOwnPropertyDescriptor 返回undefined，prop不存在
// import './GetOwnProperty/proxy6'

// 不可扩展对象上，增加新属性的情况
// import './GetOwnProperty/proxy7'

// 修改了属性的数据属性描述符
// import './GetOwnProperty/proxy8'

// defineProperty
// import './DefineOwnProperty/proxy1'

// 不可扩展对象
// import './DefineOwnProperty/proxy2'

// 属性描述符configurable从true改为false
// import './DefineOwnProperty/proxy3'

// has
// import './HasProperty/proxy1'

// has return false的情况
// import './HasProperty/proxy2'

// has return false且不可扩展
// import './HasProperty/proxy3'

// get
// import './Get/proxy1'
// import './Get/proxy2'

// set
// import './Set/proxy1'
// import './Set/proxy2'

// delete
// import './Delete/proxy1'
// import './Delete/proxy2'

// ownKeys
// import './OwnPropertyKeys/proxy1'
// import './OwnPropertyKeys/proxy2'

// apply
import './Call/proxy1'