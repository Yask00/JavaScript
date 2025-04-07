* We’ve been using `object` types and `union` types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type `more` than once and refer to it by a single name.A `type alias` is exactly that - a name for any type.
* An `interface` declaration is another way to name an object type
* Almost all features of an interface are available in type, the key `distinction` is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
    ```ts
    type Animal = {
        name: string;
    }

    type Bear = Animal & { 
        honey: boolean;
    }
    ```
* Sometimes you will have information about the type of a value that TypeScript can’t know about.In this situation, you can use a `type assertion` to specify a more specific type:
    ```ts
    const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement; // or
    const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
    ```
* There are three sets of `literal types` available in TypeScript today: `strings`, `numbers`, and `booleans`; by using literal types you can allow an exact value which a string, number, or boolean must have.
* TypeScript also has a special `syntax` for `removing` `null` and `undefined` from a type without doing any explicit checking. Writing `!` after any expression is effectively a type assertion that the value isn’t null or undefined:
    ```ts
    function liveDangerously(x?: number | null) {
        // No error
        console.log(x!.toFixed());
    }
    ```
* In TypeScript, checking against the value returned by `typeof` is a `type guard`.
* JavaScript’s looser equality checks with == and != also get narrowed correctly. If you’re unfamiliar, checking whether something `== null` actually not only checks whether it is specifically the value null - it also checks whether it’s potentially `undefined`. The same applies to == `undefined`: it checks whether a value is either `null` or undefined.
    ```ts
    interface Container {
        value: number | null | undefined;
    }
    
    function multiplyValue(container: Container, factor: number) {
    // Remove both 'null' and 'undefined' from the type.
        if (container.value != null) {...
    ```
* JavaScript has an operator for determining if an object or its prototype chain has a property with a name: the `in` operator. TypeScript takes this into account as a way to narrow down potential types.
    ```ts
    type Fish = { swim: () => void };
    type Bird = { fly: () => void };
    
    function move(animal: Fish | Bird) {
        if ("swim" in animal) {
            return animal.swim();
        }
        
        return animal.fly();
    }
    ```
* `instanceof` is also a type guard
    ```ts
    function logValue(x: Date | string) {
        if (x instanceof Date) {...
    ```
* To define a `user-defined type guard`, we simply need to define a function whose return type is a `type predicate`.`pet is Fish` is our type predicate in this example. A predicate takes the form `parameterName is Type`, where parameterName must be the name of a parameter from the current function signature.
    ```ts
    function isFish(pet: Fish | Bird): pet is Fish {
        return (pet as Fish).swim !== undefined;
    }
    ```
* In TypeScript, `generics` are used when we want to describe a `correspondence` between two values. We do this by declaring a type parameter in the function signature:
    ```ts
    function firstElement<Type>(arr: Type[]): Type | undefined {
        return arr[0];
    }
    function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
        return arr.map(func);
    }
    ```
* In JavaScript, a function that doesn’t return any value will implicitly return the value `undefined`. However, `void` and `undefined` are not the same thing in TypeScript. 
* Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.
    ```ts
    interface NumberOrStringDictionary {
        [index: string]: number | string;
        length: number; // ok, length is a number
        name: string; // ok, name is a string
    }
    ```
* interfaces allowed us to build up new types from other types by extending them. TypeScript provides another construct called `intersection` types that is mainly used to combine existing object types.
    ```ts
    type ColorfulCircle = Colorful & Circle;
    ```
    ```ts
    interface Person1 {
        name: string;
    }
    
    interface Person2 {
        name: number;
    }
    
    type Staff = Person1 & Person2 // In this case, Staff would require the name property to be both a string and a number, which results in property being of type `never`.
    ```
* We can make a generic Box type which declares a type parameter.
    ```ts
    interface Box<Type> {
        contents: Type;
    }
    let box: Box<string>;
    ```
* Since `type aliases`, unlike interfaces, can describe `more` than just `object` types, we can also use them to write other kinds of generic helper types.
    ```ts
    type OrNull<Type> = Type | null;
    type OneOrMany<Type> = Type | Type[];
    type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
    ```
* Modern JavaScript also provides other data structures which are generic, like `Map<K, V>`, `Set<T>`, and `Promise<T>`. All this really means is that because of how Map, Set, and Promise behave, they can work with any sets of types.
* The `ReadonlyArray` is a special type that describes arrays that shouldn’t be changed.Unlike Array, there isn’t a ReadonlyArray `constructor` that we can use.
    ```ts
    function doStuff(values: ReadonlyArray<string>) {..
    ```
* Which leads us to writing our first `generic` interface.
    ```ts
    interface GenericIdentityFn {
        <Type>(arg: Type): Type;
    }
    
    function identity<Type>(arg: Type): Type {
        return arg;
    }
    
    let myIdentity: GenericIdentityFn = identity;
    //to 
    interface GenericIdentityFn<Type> {
        (arg: Type): Type;
    }
    function identity<Type>(arg: Type): Type {
        return arg;
    }
    // Notice that our example has changed to be something slightly different. Instead of describing a generic function, we now have a non-generic function signature that is a part of a generic type. 
    let myIdentity: GenericIdentityFn<number> = identity;
    ```
* In addition to `generic interfaces`, we can also create `generic classes`. Note that it is not possible to create generic `enums` and `namespaces`.
    ```ts
    class GenericNumber<NumType> {
        zeroValue: NumType;
        add: (x: NumType, y: NumType) => NumType;
    }
    
    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) {
        return x + y;
    };
    ```

* Using Type Parameters in Generic Constraints
    ```ts
    function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
        return obj[key];
    }
    
    let x = { a: 1, b: 2, c: 3, d: 4 };
    
    getProperty(x, "a");
    getProperty(x, "m"); // error
    ```
* When creating `factories` in TypeScript using `generics`, it is necessary to refer to class types by their constructor functions. For example
    ```ts
    function create<Type>(c: { new (): Type }): Type {
        return new c();
    }
    ```

* 
* 
* 