class Singleton {
    constructor() {
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }
        this.constructor.instance = this;
    }
}

generator = () => {
    return new Singleton();
};

// Only submit this part
class SingletonTester {
    static isSingleton(generator) {
        const instance1 = generator();
        const instance2 = generator();
        return instance1 === instance2;
    }
}

console.log(SingletonTester.isSingleton(generator)); // true