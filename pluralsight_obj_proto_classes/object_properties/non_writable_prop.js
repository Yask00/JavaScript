let person = {
  firstName: "Jim",
  lastName: "Cooper",
  age: 29
};

Object.defineProperty(person, "firstName", { writable: false });
person.firstName = "Kris"; // wont change it

// -------------------------------------------------

let person1 = {
  name: {
    firstName: "Jim",
    lastName: "Cooper"
  },
  age: 29
};

Object.defineProperty(person, "name", { writable: false });
person.name.firstName = "Kris"; // will change it
Object.freeze(person.name);
person.name.firstName = "Kris"; // wont change it
