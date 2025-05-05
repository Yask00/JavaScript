class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static createPerson(name) {
    return new Person(id, name);
  }

  static get factory() {
    return new PersonFactory();
  }
}

class PersonFactory {
  constructor() {
    this.id = -1;
  }

  createPerson(name) {
    // todo
    this.id += 1;
    return new Person(this.id, name);
  }
}

const factory = Person.factory;
const p1 = factory.createPerson("John Doe");
console.log(p1); // Person { id: 1, name: 'John Doe' }
const p2 = factory.createPerson("Jane Doe");
console.log(p2); // Person { id: 2, name: 'Jane Doe' }
