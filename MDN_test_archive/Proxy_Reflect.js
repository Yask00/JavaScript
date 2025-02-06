// Proxy objects allow you to intercept certain operations and to implement custom behaviors.

const handler = {
  get(target, name) {
    return name in target ? target[name] : 43;
  }
}

const p = new Proxy({}, handler); // target/handler
p.a = 1;
console.log(p.a, p.b); // 1, 42

// Reflect is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of the proxy handler's.

Reflect.has(Object, "assign"); // true

Function.prototype.apply.call(Math.floor, undefined, [1.75]); // to
Reflect.apply(Math.floor, undefined, [1.75]);
// 1