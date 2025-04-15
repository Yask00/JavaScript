* TypeScript is JavaScript with added syntax for types, syntactic superset of JavaScript which adds `static` typing
* TypeScript uses `compile` time `type checking`. Which means it checks if the specified types match before running the code, not while running the code.
* TypeScript has an official compiler which can be installed through `npm install typescript --save-dev`. The compiler can be configured using a `tsconfig.json` file.
* Type Assignment
    * Main primitive types: `string`, `number`, `boolean`, `bigInt`, `symbol` + `any`
    * Explicit Type
    ```ts
    let firstName: string = "Dylan";
    ```
    * Implicit  Type (ypeScript will "guess" the type, based on the assigned value). Implicit assignment forces TypeScript to !`infer` the value. TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to `any` which disables type checking.
    ```ts
    let firstName = "Dylan";
    ```
* `unknown` is a similar, but safer alternative to `any`.TypeScript will `prevent` unknown types from being used. unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to !`cast` it. Casting is when we use the `"as"` keyword to say property or variable is of the casted type.
* Type `never` effectively throws an error whenever it is defined. never is rarely used, especially by itself, its primary use is in `advanced generics`.
* `undefined` and `null` are types that refer to the JavaScript primitives undefined and null respectively.These types don't have much use unless !`strictNullChecks` is enabled in the `tsconfig.json` file.
* Arrays
    * `const names: string[] = [];`
    * `names.push("Dylan");` // no error
    * `names.push(3);` // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
    * The `readonly` keyword can prevent arrays from being changed.
    ```ts
    const names: readonly string[] = ["Dylan"];
    names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
    ```
* A `tuple` is a `typed array` with a `pre-defined` `length` and `types` for each `index`. A good practice is to make your tuple `readonly`, because without it, you can add new items. Tuples only have strongly defined types for the initial values:
    ```ts
    let ourTuple: readonly [number, boolean, string];
    ```
    `useState` returns a `tuple` of the `value` and a `setter` function.
    Named tuples allow us to provide context for our values at each index.
    ```ts
    const graph: [x: number, y: number] = [55.2, 41.3];
    ```
    Destructuring Tuples
    ```ts
    const graph: [number, number] = [55.2, 41.3];
    const [x, y] = graph;
    ```
* TypeScript has a specific syntax for typing `objects`.
    ```ts
    const car: { type: string, model: string, year?: number } = { // year is optional
        type: "Toyota",
        model: "Corolla",
        year: 2009
    };
    ```
    * Object types like this can also be written separately, and even be reused, look at `interfaces` for more details.TypeScript can infer the types of properties based on their values.
    * !`Index` signatures can be used for objects without a defined list of properties.
    ```ts
    const nameAgeMap: { [index: string]: number } = {};
    nameAgeMap.Jack = 25; // no error
    nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
    ```
    * `Index signatures` like this one can also be expressed with `utility` types like `Record<string, number>`.
* An `enum` is a special `"class"` that represents a !`group of constants` (unchangeable variables).Enums come in two flavors `string` and `numeric`
    ```ts
    enum CardinalDirections {
        North,
        East,
        South,
        West
    }
    let currentDirection = CardinalDirections.North; // logs 0
    ```
    You can set the value of the first numeric enum and have it auto increment from that:
    You can assign unique number values for each enum value. Then the values will not incremented automatically:
    ```ts
    enum StatusCodes {
        NotFound = 404,
        Success = 200,
        Accepted = 202,
        BadRequest = 400
    }
    console.log(StatusCodes.NotFound);// logs 404
    console.log(StatusCodes.Success);// logs 200
    ```
    Enums can also contain `strings`. This is more `common` than numeric enums, because of their readability and intent.
    ```ts
    enum CardinalDirections {
        North = 'North',
        East = "East",
        South = "South",
        West = "West"
    };
    ```
* TypeScript allows `types` to be defined `separately` from the variables that use them. Aliases and Interfaces allows types to be easily shared between different variables/objects.
    ```ts
    type CarYear = number
    type CarType = string
    type CarModel = string
    type Car = {
        year: CarYear,
        type: CarType,
        model: CarModel
    }

    const carYear: CarYear = 2001
    const carType: CarType = "Toyota"
    const carModel: CarModel = "Corolla"
    const car: Car = {
        year: carYear,
        type: carType,
        model: carModel
    };
    ```
    Interfaces are similar to type aliases, except they only apply to `object` types.
    ```ts
    interface Rectangle {
        height: number,
        width: number
    }

    const rectangle: Rectangle = {
        height: 20,
        width: 10
    };
    ```
    Interfaces can extend each other's definition.
    ```ts
    interface Rectangle {
        height: number,
        width: number
    }

    interface ColoredRectangle extends Rectangle {
        color: string
    }
    ```
* `Union` types are used when a value can be more than a `single` type.
    ```ts
    function printStatusCode(code: string | number) {...
    ```
* TypeScript has a specific syntax for typing `function` parameters and return values.
    ```ts
    function pow(value: number, exponent: number = 10, , ...rest: number[]) {
        return value ** exponent;
    }
    ```
    The type `void` can be used to indicate a function doesn't return any value.
    For parameters with default values, the default value goes `after` the type annotation.
    Function `types` can be specified separately from functions with `type aliases`.
    ```ts
    type Negate = (value: number) => number;
    // in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
    const negateFunction: Negate = (value) => value * -1;
    ```
* There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library. `Casting` is the process of overriding a type.
    ```ts
    let x: unknown = 'hello';
    console.log((x as string).length);
    let x: unknown = 4;
    console.log((x as string).length); // prints undefined since numbers don't have a length
    let x: unknown = 'hello';
    console.log((<string>x).length); // This type of casting will not work with TSX, such as when working on React files.
    ```
* Class members also be given special modifiers which affect visibility.
    * `public` - (default) allows access to the class member from anywhere
    * `private` - only allows access to the class member from within the class
    * `protected` - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below.
    * Similar to arrays, the `readonly` keyword can prevent class members from being changed.
    `Interfaces` can be used to define the type a class must follow through the `implements` keyword.
    ```ts
    interface Shape {
        getArea: () => number;
    }

    class Rectangle implements Shape {
        public constructor(protected readonly width: number, protected readonly height: number) {}

        public getArea(): number {
            return this.width * this.height;
        }
    }
    ```
    * A class can implement `multiple` interfaces by listing each one after implements, separated by a comma like so: `class Rectangle implements Shape, Colored {`
    * Classes can be written in a way that allows them to be used as a `base` class for other classes without having to implement all the members. This is done by using the `abstract` keyword. Members that are left unimplemented also use the abstract keyword. Abstract classes cannot be ` directly instantiated`, as they do not have all their members implemented:
    ```ts
    abstract class Polygon {
        public abstract getArea(): number;

        public toString(): string {
            return `Polygon[area=${this.getArea()}]`;
        }
    }

    class Rectangle extends Polygon {
        public constructor(protected readonly width: number, protected readonly height: number) {
            super();
        }

        public getArea(): number {
            return this.width * this.height;
        }
    }
    ```
* `Generics` allow creating `'type variables'` which can be used to create `classes`, `functions` & `type aliases` that don't need to explicitly `define` the types that they use.
    ```ts
    function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
    }
    console.log(createPair<string, number>('hello', 42)); // ['hello', 42]
    ```
    * `Generics` in `type aliases` allow creating types that are more reusable:
    ```ts
    type Wrapped<T> = { value: T };
    const wrappedValue: Wrapped<number> = { value: 10 };
    ```
* TypeScript comes with a large number of types that can help with some `common` type manipulation, usually referred to as !`utility types`.
    * `Partial`:
    ```ts
    interface Point {
        x: number;
        y: number;
    }

    let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
    pointPart.x = 10;
    ```
    * `Required`:
    ```ts
    interface Car {
        make: string;
        model: string;
        mileage?: number;
    }

    let myCar: Required<Car> = {
        make: 'Ford',
        model: 'Focus',
        mileage: 12000 // `Required` forces mileage to be defined
    };
    ```
    `Record` is a shortcut to defining an object type with a specific key type and value type.
    ```ts
    const nameAgeMap: Record<string, number> = {
        'Alice': 21,
        'Bob': 25
    };
    ```
    `Record<string, number>` is equivalent to `{ [key: string]: number }`
    ```ts
    * `Omit`:
    interface Person {
        name: string;
        age: number;
        location?: string;
    }

    const bob: Omit<Person, 'age' | 'location'> = {
        name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
    };
    ```
    `Pick` removes all `but` the specified keys from an object type.
    `Exclude` removes types from a union.
    ```ts
    type Primitive = string | number | boolean
    const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.
    ```
    `ReturnType` extracts the return type of a function type.
    ```ts
    type Predicate = (x: unknown) => boolean;
    type K = ReturnType<Predicate>;
    ```
    `Parameters` extracts the parameter types of a function type as an array.
    `Readonly` is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
* `keyof` is a keyword in TypeScript which is used to `extract` the `key type` from an object type.
* TypeScript has a powerful system to deal with `null` or `undefined` values. By default null and undefined handling is `disabled`, and can be enabled by setting `strictNullChecks` to true. 
    * `Optional Chaining` is a JavaScript feature that works well with TypeScript's null handling. It allows accessing properties on an object, that may or may not exist, with a compact syntax. It can be used with the `?.` operator when accessing properties.
    ```ts
    interface House {
        sqft: number;
        yard?: {
            sqft: number;
        };
    }
    function printYardSize(house: House) {
        const yardSize = house.yard?.sqft;
        if (yardSize === undefined) {
            console.log('No yard');
        } else {
            console.log(`Yard is ${yardSize} sqft`);
        }
    }

    let home: House = {
        sqft: 500
    };

    printYardSize(home); // Prints 'No yard'
    ```
* NPM packages in the broad JavaScript ecosystem `doesn't` always have `types` available. Sometimes the projects are no longer maintained, and other times they aren't interested in, agree with, or have time to use TypeScript. To help TypeScript developers use such packages, there is a community maintained project called `Definitely Typed`.
* `Template Literal Types` now allows us to create more precise types using template literals. We can define custom types that depend on the actual values of strings at compile time.
    ```ts
    type Color = "red" | "green" | "blue";
    type HexColor<T extends Color> = `#${string}`;

    // Usage:
    let myColor: HexColor<"blue"> = "#0000FF";
    ```
* `Index Signature Labels` allows us to label index signatures using computed property names. It helps in providing more descriptive type information when working with dynamic objects.
    ```ts
    type DynamicObject = { [key: string as `dynamic_${string}`]: string };
    // Usage:
    let obj: DynamicObject = { dynamic_key: "value" };
    ```