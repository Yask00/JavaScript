class Bird {
  constructor(age = 0) {
    this.age = age;
  }

  fly() {
    return this.age < 10 ? "flying" : "too old";
  }
}

class Lizard {
  constructor(age = 0) {
    this.age = age;
  }

  crawl() {
    return this.age > 1 ? "crawling" : "too young";
  }
}

class Dragon {
  constructor(age = 0) {
    // todo
    this._age = age;
    this._bird = new Bird(age);
    this._lizard = new Lizard(age);
  }

  set age(value) {
    this._age = this._bird.age = this._lizard.age = value;
  }

  get age() {
    return this._age;
  }

  // todo: API members
  fly() {
    return this._bird.fly();
  }

  crawl() {
    return this._lizard.crawl();
  }
}

let dragon = new Dragon(5);
console.log(dragon.fly()); // flying
console.log(dragon.crawl()); // crawling
dragon.age = 11;
console.log(dragon.fly()); // too old
// dragon.age = 0;
// console.log(dragon.crawl()); // too young
