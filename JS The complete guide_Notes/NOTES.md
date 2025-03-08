### Section 1 Introduction

* `JavaScript` is a `high-level`, often `just-in-time` compiled language that conforms to the `ECMAScript` standard. It has `dynamic` typing, `prototype-based` `object-orientation`, and `first-class functions`. It is `multi-paradigm`, supporting `event-driven`, `functional`, and `imperative` programming styles. It has application programming interfaces (`APIs`) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).
* JS - dynamic, weakly typed language compiled at runtime. This means code is not precompiled but instead evaluated and executed at runtime - interpreted and the fly. Hosted - runs in different environments.
* JavaScript engine (build in the browser) parse code and compile it to machine code and executes it happening on a single thread. It has heap(memory allocation) and stack (execution context)
* `Prototype-based` programming is a style of `object-oriented` programming in which behavior reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes.

### Section 2 Data, variables
* 7- `String`, `Number`, `BigInt`, `Symbol`, `Boolean`, `Undefined`, `Null`
* variables - data container storage
* `camel case` is best practice, only letters and digits, starting with `$` and `_` is allowed - userName, $userName, _userName
* `a ${test} 523 ` - template literal
* `Parameters` are variables listed as a part of the function definition. `Arguments` are values passed to the function when it is invoked:
`funtion sayHi(name) { ... }`  - parameter
`sayHi('Max')` – argument
* Functions automatically are pulled to top by js engine, also can access global variables
* In programming, `implicit` is often used to refer to something that's done for you by other code behind the scenes. `Explicit` is the manual approach to accomplishing the change you wish to have by writing out the instructions to be done explicitly
* `null`, `undefined`, `NaN` – first two are both values and data types, NaN is number

### Section 4 Control Structures

* Operators:
```
General: + - * / % ** = += -= ++ --
Boolean: == != === !=== > & < >= <= !
Logical: && !& || 
ternary: x ? y : z
```
* `!!` converts value to Boolean
* `Falsy & Truthy` values - In condition JS tries to coerce("convert without really converting") values to Boolean
* `If(-10)` - is a truthy value
* `Expression` yields a value and is also `statement`
* In JavaScript, an `expression` is a piece of code that produces a value and can be written wherever a value is expected. A `statement` (if), on the other hand, performs an action and typically consists of keywords and expressions.
* `Statement` you can’t use it where you don’t need value, f.e. in if
Labeled statement is giving name to loop so that f.e. in inner loop you can break the outer loop – testname: dowhile…

### Section 5 Behind the scenes ES3 5 and 6
* `ECMA` standardize JS and browsers implement the new features
* `ES6` is the most major new integrations version
* Newer ECMA versions can be transpiled to older
* `var` vs `let` - let exist in block scope, var in global and FN
* `hoisting` - js engine loads and goes over the entire script, does thing like look for fn that auto loads and registers, also pull variables at top. Let and const could not be pulled though
* `Strict mode` - Eliminates some JavaScript silent errors by changing them to throw errors....
* Browser engines (`V8`) parse and execute script and consist of two parts: (interpreter & compiler (JIT)) – eg manage memory and execution steps. Interpreter loads, reads and translate it to byte code and runs the scripts. For best performance first to machine code and compiler does that. Both happen side by side.
* Browser APIs - communication bridges to call and work with (`location`, `html`, `fetch`, `dom`) vs Third party API (Google maps)
* `heap` vs `stack` (Engine) - heap is long term memory allocation (data stored). Stack is important for execution (short term memory) it manages program flow - keeps control which FN is executed. The top most thing in the stack is what currently is happening. Fn removed from stack in not necessary removed from heap.
* `Event loop` - helps with `async` code, with things like event listeners, not part of the engine but browser and pings the engine when eg. click event occurs, it controls push event does not interrupt with ongoing script.
* `Primitive` vs `reference` values - data types categories (strings, numbers, bool, null, undefined, symbol in memory in stack memory), (var 1 is assign to var 2 and var 1 is changed then var 2 in not) VS (all objects in heap) (change value in object 1 will affect object 2 as well - we only copy the `reference`). In the stack we have a pointer store reference to the object in the `heap`
* `Garbage collection` - in heap the engine collector periodically checks for unused objects without references - addresses stored in variables.

### Section 6 More on FN
* You can store `FN` in variables or constants – `expression` vs `statement`/`declaration`
* `Parameter` is the variable in the declaration of the function.
* `Argument` is the actual value of this variable that gets passed to the function.
* `Arrow` function is anonymous FN –
    * has no arguments object,
    * they don’t create their own this binding
    * cannot be used as constructors
    * cannot be declared
    * cannot be accessed before initialization
* Missing argument in FN is forgiven by JS and it’s defaulted to undefined
FN inside FN is available only locally
* `.bind` on FN method preconfigured with arguments already set, first value sets this and after parameters that want to be preconfigured all that without wanting to EXECUTE the function
* `.call` , `.apply` – specify parameters and this but immediately EXECUTE the FN
* `Higher order` FN – either takes or return fn as argument or result

### Section 7 DOM
* `DOM` is API exposed from the browser so that JS can interact with the html, element is object like in JS
* `Document` and `window` give this access to loaded html code
* Console.dir(document) give all props of the object
* Document is also part of the window object
* DOM Object is called also `Element NODE`, strings are `Text NODE` – 
* `HTMLCollection` vs `NodeList`. You cannot loop through an HTMLCollection with any of the array methods. Unless you first create an array from the collection. But with a NodeList, you can use the forEach method to loop through it. But you cannot use other array methods like map, filter, and others without first creating an array from it.
* Live list vs static list:
    * document.getElementsByClassName() is an HTMLCollection, and is live.
    * document.getElementsByTagName() is an HTMLCollection, and is live.
    * document.getElementsByName() is a NodeList and is live.
    * document.querySelectorAll() is a NodeList and is not live.

### Section 8 More Arrays & Iterables
* `Iterable` – object that you can use for of loop on - Arrays + Array like obj (NodeList, String, Map, Set)
* Array-like – Object have `length` prop and use `indexes` for access
* `.slice`, `.filter` `.concat` `.map` `.flat` - returns brand new array, not copy & reference
* Destructuring array: `const [fName, lname ] = arr;` // value matters
* Map/Set - Data which are indexed by a key
* Map (.values/.keys/.entries) 
    * Key-Value pair
    * for...of loop to return an array of [key, value]
    * Key - any value primitive or object
    * iteration of maps is in insertion order of the elements
    * Object-like data
    * Duplicates not allowed
    * Order not guaranteed
* Set (has) – 
    * Single value - unique
    * All data types
    * special map methods
    * Order gtd
    * No duplicates
* Weak map
    * keys must be objects or non-registered symbols
    * The only primitive type that can be used as a WeakMap key is symbol
    * doesn't allow enumeration
    * One use case of WeakMap objects is to store private data for an object, or to hide implementation details.
* Weak set  
    * can only store Obj and Obj-like elements - collections of objects or symbols only. 
    * If there is no other reference to an object stored in the WeakSet, they can be garbage collected.
    * doesn't allow enumeration
* `slice` lets you `copy` an array or a part of it.
* `splice` `mutates` the array (to insert or delete items).

### Section 9 More Objects
* Core data `structure`, not data `type`
* So you could say: Primitive values are the core building blocks that hold your data, objects (and arrays) are helpful for organizing and working with that data.
*` Let a = {…b}` – SPREAD operator creating new object in memory !!! without the nested objects and arrays
* `Object.assign({}, person)` – also copy
* `structuredClone(value)` – new way of deep clone object
* Desctructuring object – `const {info, title} = movie;` // key matters
* If (‘info’ in obj) – check if present property
* `Getter` and `setter` inside object can set property with logic
* `get/set` in initialization vs `Object.defineProperties` after creation - property creation
*  Properties defined via `Object.defineProperty` and such are not enumerable by default.

### Section 10 Classes and OOP
* Classes – `blueprint` to create objects
* In classes, the `instance creation` is done by the `constructor`.
* `Field` vs `property` in class at the end are the same.  What's a class "field"? In the end a property defined outside of the constructor method (directly inside the class body). 
* `Static` fields/methods only accessible on the `class`, not `instance` of it
* `Private` properties are accessible only inside the class
* Object descriptor (getOwnPropertyDescriptors, defineProperty) let you configure object (enumerable, writable ect.)
* Unlike function declarations, `class declarations are not hoisted `
* There is a philosophy in object-oriented programming called "`encapsulation`". This means you should not access the underlying implementation of an object, but instead use well-abstracted methods to interact with it.
* `Static` properties are a group of class features that are defined on the class itself, rather than on individual `instances` of the class - (methods/fields, getters/setters)
* `super(r, g, b)` is equal to `this = new Color(r, g, b)` in constructor
* Derived classes don't have access to the parent class's private fields


### Section 11 Constructor FNs and Prototypes
* Constructor FN has the same concept as class, but before head – `blueprint` for objects
* JS is prototype based language using prototype inheritance – sharing code
* Every constructor FN has this prototype property there by default
* Every obj in js has prototype that is connected obj as `fallback` obj
Like our object is based on invisible obj that for example has toString() method
* Every obj we create has a parent object prototype called Object (global)
* We can set own `prototype` to Person constructor FN, no `toString()` if not implemented
* you access the connected fallback/ prototype object via the special` __proto__` property which EVERY object (remember, functions are objects) has. The prototype property (existing in fn objects) does something different: It sets/updates the prototype object, which new objects created with this User constructor function will have. Like User.prototype.sayHello = …
* Method inside class is assigned to the prototype and hence `shared` across instances, property function in class or in constructor is assigned to individual instances and recreated per object, this refers to what called the method, if arrow FN refers to instance
* The fallback of all is `Object.prototype`
* `getProptotypeOf`/`setPrototypeOf` instead of `__proto__`
* For example, "array methods" like `map()` are simply methods defined on Array.prototype diiferent from `.__proto__`
* The `prototype` chain's behavior is less like inheritance and more like `delegation`. 

### Section 13 More DOM and APIs
* Data attributes are combined in `dataset` property in js
* Dom elements have properties for positions like `clientHeight`, `offsetLeft…` and `getClientRectBound()`
* Template tag `<template>` is new thing used w `document.importNode`

### Section 14 Events
* Core `Event` object has specialized based on it `MouseEvent`/`DragEvent`(with properties)…
* In html we can also attach via `onclick`/`ondrag…`.
* To `remove` event listener e have to `store` it initially in variable
* `e.target` give us access to the element we attach event to
* `preventDefault` method – prevents default behavior of event / i.e. disables it
* `Capturing` and `Bubbling(default)` – top to bottom vs bottom to top, change it with true as 3rd argument in addEventListener
* `Propagate` stops same event to trigger on parent element/ancestor
* `Event delegation` – list items and event on every one (too much events) VS event on the list, but if elements inside `<li>` they will be target. E.currentTarget is the whole UL, but with `event.target.slosest(‘li’)` to next LI
* `Programmatically` trigger event – `form.submit()`, even on `PREVENTED` event on that element

### Section 15  Advanced FNs
* `Pure FN` – always `same` input vs eg fetch inside
* `Factory` FN produces another FN
* Every FN in JS is `closure` (`scope` inside {} ). A closure is a function having access to the parent scope, even after the parent function has closed (the combination of a function and the lexical environment within which that function was declared.)

### Section 16  More Numbers & Strings
* Every `number` is `float`
* `0,1 + 0,2 === 0,3` `false` – js converts to binary to get calculation from it - so imperfection
* `Tagged` templates – you can reorder stuff from input – fn x (strings, pName, pPrice => x`this ${pName} is ${pPrice}`
* Regex with new `RegExp()` or `/…/` and define patterns

### Section 17 Async – Promises & callbacks
* JS is `single threaded `– one task at a time
* Browser is handling asynchronous code to not block code execution -e.g. has `multiple threads` for stuff like (setTimeout, addEventListener)
* `Event loop`- not part of engine- sync callstack and engine with our waiting in Message queue 
* `Promise` – `object/class` – when creating we pass `function` the constructor with `2 arguments as functions for success and failure` (`resolve`, `reject`)
* States – `PENDING`, `RESOLVED`, `REJECTED`
* The `Promise()` constructor takes a `single` function as an argument. We'll call this function the `executor`. This executor function itself takes `two arguments`, which are both also `functions`, and which are conventionally called `resolve` and `reject`.
* `Async` `await` utilizes promises also but lets you omit then and catch methods, used only in functions and makes looks sync. Async function returns a promise `(!!ALWAYS)` and `await` is `NON BLOCKING??` (out of scope) as well. `Error` handling with `try/catch`. NOT GREAT if you want to kick few things simultaneously and after each other

### Section 18-Onwards & Bookmarks
 
* `export` class XXX -> `import` XXX – but in the main `<script add type=”module”>`
* `.mjs` can be extension for module file
* `globalThis` is alternative to this in modules (also works in nodejs)
* `sourcemap` in `webpack` dev setup – we have access to original source not build one
* Browsers keep a `cache` of bundled js file so if we change the name in development, browser will loose it, if the file hasn’t changed as well browser will have cache version
* `Cookies` are available if only page served with `real server`
* For browser support – feature detection + fallback, polyfills, transpiling code, detect auto and add polyfils
* `encodeURI` – encodes string to `url` friendly resource
* Specifically, an `iterator` is any object which implements the Iterator protocol by having a `next()` method that returns an object with two properties(`value/done`).The most common iterator in JavaScript is the `Array iterator`
* `next()` inside object can be iterator for `property/field` of the object – custom logic instead of for of loop
* `Generator` functions provide a powerful alternative: they allow you to define an `iterative` algorithm by writing a single function whose execution is not continuous.  generator – builds us iterator object that has next method. In order to be iterable, an object must implement the` [Symbol.iterator]()` method. 
* `Reflect` API – groups functionalities to work with objects on meta level – properties and defaults. The major use case of Reflect is to provide default forwarding behavior in `Proxy` handler traps.
* `Proxy API` – create trap for certain operation on object, eg get property thunelling through proxy handler fn. There is a list of traps available
* `Nodejs` events starts with `.on()`
* `CORS` – app at domain vs server on other domain – two apps exchanging resources – browsers block such except on same domain – you can tell the browser with extra headers (Access-control-alow-origin….). For POST browser sends before head options request so that need to be configured also
* `MongoDB` – Collection – table of records, document Is simple row in that table
* For instance, you can find `regex` engines in text editors such as `Notepad`++
* `Object Freeze` is `Shallow`
* Tests:
    * `Unit` (isolated function/class/functionality) testing
    * `Integration` ( dependencies of functionality) testing
    * `E2e` – full flow eg validating a DOM after click testing
    * Test `runner` (execute and summarize) – `MOCHA`
    * `Assertion` Library – define testing logic conditions – `CHAI` 
        * ( `JEST` combines `MOCHA` with `CHAI`)
    * `Headless` Browser for simulation E2E – `Puppeteer`
* Many `render engines` are available, and are usually written in C++. 
* Examples include:
Chrome and Opera both use Blink, Firefox uses Gecko, Internet Explorer uses Trident, Edge uses EdgeHTML, Safari uses WebKit
* `Service Workers` are Google’s new way of caching website data for offline usage
* Program `paradigm` – a way of write/organize code – OOP/Procedural/Functional
* `Procedural` programing – write sequential series of execution steps/tasks – eg top to bottom
* Imperative (Procedural/OOP) and Declarative(Functional/OOP) paradigms are parent hierarchies to procedural, object-oriented, and functional programming.  `Imperative` programming is about how a program works while Decla`rative programming is about what a program does. Imperative in steps: build foundation, put framework, install utilities ect., Declarative is about the WHAT. I don’t care how you build a house, but want nice fireplace, view ect.
* As programmers, we hear the word "`abstraction`" a lot. An abstraction is about stripping away the nitty gritty details in order to talk about a higher-level concept. Declarative programming is an `enabler` of abstraction. Imperative programming is an `inhibitor` of abstraction. 
* `Big O Notation` – time complexity btw time and items to compare different algorithms. More items more linear way up of executions or quadratic in another algo. The Big O notation combines what we learned in the last two sections about worst-case time complexity and asymptotic analysis.
* The time complexity is not about timing how long the algorithm takes. Instead, how many operations are executed. The number of instructions executed by a program is affected by the input’s size and how their elements are arranged. n indicates the input size, while O is the worst-case scenario growth rate function.
* Generic type example TS – `Array<CalculateContainer>`
* Generic type of FN – `function test<T>() `– generic type passed to function
* `Currying` is a functional programming technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument. Instead of taking all arguments at once, the curried function takes the first argument, returns a new function that takes the next argument, and so on until all arguments are provided. The final function then returns the result - `multiply(1)(2)(3)`
* A `pipe` is a form of redirection that is used to send the output of one program to another program for further processing - `x = pipe1([add1, mul2, title])(4);`
* You implement classical inheritance using prototypal inheritance / chaining / delegation. One cannot exist without the other.
* Function `composition` is the process of combining two or more functions to produce a new function
* `Functional` programming is a programming `paradigm` that uses pure functions as the `primary` units of composition. 
* `Concurrency` in very simple terms means that` two or more processes` (or threads) run `together`, but not at the same time. `Only one process executes at once.`
* `Parallelism` on the other hand means that the `processes` (or threads) run in `parallel` (surprise surprise); meaning they start at the same time and execute `alongside` each other at the same time.
* `ORM` - Object relational mapping is a technique for converting a database query result into entity class instances. `An entity` is simply an object wrapper for a database table.
* Don't Store `JSON Web Tokens` in `Local Storage`
* Here, we’re explicitly converting a string to a number by passing the string to the inbuilt `Number(“35”)` function VS `true + true => Output is 2 `as true is converted to number 1 implicitly
* An `iterable` function is one where we have access to a built-in iterator. * In JavaScript, `Arrays`, `Maps`, `Strings` are iterable, but `Objects` are not. The operator provides individual pieces, values of the Object. An enumerable function looks at the properties of the objects, not the values.
* But because we're using `<script type="module">`, the code is treated as a module and the browser waits for all HTML to be processed before executing JavaScript modules. 
* `try catch` statement should try to caatch only Exeptions, not boolean or something. The likes or Error, referenceError, SyntaxError or create custom own error.
* You'll sometimes see numbers involved in arithmetic referred to as `operands`
* `Math.pow(7, 3)` is equivalent to `7**3`
* Javascript String is `immutable`, which means once a String object is assigned to String reference the object value cannot be changed.
*  Any value that is not `false`, `undefined`, `null`, `0`, `NaN`, or an empty string `('')`actually returns true when tested as a conditional statement
* Unlike function `declarations`, function `expressions` are not hoisted.
* When using `array-traversing` methods like `Array.prototype.map`, empty slots are skipped.
* `Math` functions cannot be used on `BigInt` values.
* The `Date` object is now considered legacy and should be avoided in new code.
* String, Array, TypedArray, Map and Set are all built-in iterables, because their prototype objects all have a Symbol.iterator method.
* This feature - when a method has the same name but a different implementation in different classes - is called `polymorphismc`
* `workers` (dedicated/shared/service), which enable you to run some tasks in a separate thread of execution.
* `window.requestAnimationFrame()`.The window.requestAnimationFrame() method tells the browser you wish to perform an animation. It requests the browser to call a user-supplied callback function before the next repaint. It takes one parameter — the name of the function you want to run for each frame. The next time the browser is ready to update the screen, your function will get called. If that function draws the new update to your animation, then calls requestAnimationFrame() again just before the end of the function
* A JavaScript `callback` is a function which is to be executed after another function has finished execution. A more formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.
* In general, a `Bearer` token is a piece of data that acts as a permit to operate on resources, passed in the Authorization header of requests. Two main types of Bearer tokens exist:
    * `JWT ID Tokens`: these tokens only convey the identity of the user, and are encoded strings in the JWT format
    * `OAuth 2.0 Access Token`: these tokens have authorization scopes associated with them, and can provide access to Google API resources, like Drive, Gmail, etc.
