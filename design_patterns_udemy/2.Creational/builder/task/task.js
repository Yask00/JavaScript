class CodeBuilder
{
  constructor(className)
  {
    // todo
    this.name = className;
    this.properties = [];
  }

  addField(name)
  {
    // todo
    // reminder: we want a fluent interface
    this.properties.push(name);
    return this;
  }

  toString()
  {
    // todo
    if(this.properties.length === 0) {
      return `class ${this.name} {\n}`;
    }

    return `class ${this.name} {\n` +
      `  constructor(${this.properties.join(', ')}) {\n` +
      this.properties.map(p => `    this.${p} = ${p};`).join('\n') +
      '\n  }\n}';
  }
}

let cb = new CodeBuilder('Person');
cb.addField('name').addField('age');
console.log(cb.toString());

let cb2 = new CodeBuilder('Person');
console.log(cb2.toString());
// The expected output of the above code is:
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }