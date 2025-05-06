class Person
{
  constructor(age=0)
  {
    this.age = age;
  }

  drink() { return 'drinking'; }
  drive() { return 'driving'; }
  drinkAndDrive() { return 'driving while drunk'; }
}

class ResponsiblePerson
{
  constructor(person)
  {
    this.person = person;
  }
  // todo

  get age() {
    return this.person.age;
  }

  set age(value) {
    this.person.age = value;
  }
  
  drink() {
    if (this.age >= 18) return this.person.drink();
    else return 'too young';
  }

  drive() {
    if (this.age >= 16) return this.person.drive();
    else return 'too young';
  }

  drinkAndDrive() {
      return `dead`
  }
}

let resp = new ResponsiblePerson(new Person(20));
resp.allowDrinking(); // 'drinking'
resp.allowDriving(); // 'driving'

let minor = new ResponsiblePerson(new Person(15));
minor.allowDrinking(); // 'too young'
minor.allowDriving(); // 'too young'