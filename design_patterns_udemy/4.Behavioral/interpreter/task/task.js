class ExpressionProcessor {
  constructor() {
    // todo
    this.variables = {};
    this.nextOp = Object.freeze({
      nothing: 0,
      plus: 1,
      minus: 2
    });
  }

  splitWithoutRegex(input)
  {
    let result = [];
    let buffer = [];

    for (let ch of input)
    {
      if (ch === '+' || ch === '-')
      {
        let final = `${buffer.join('')}${ch}`;
        result.push(final);
        buffer = [];
      } else
      {
        buffer.push(ch);
      }
    }

    if (buffer.length > 0)
      result.push(buffer.join(''));

    return result;
  }

  calculate(expression) {
    // todo
    let current = 0;
    let nextOp = this.nextOp.nothing;

    // Udemy does not like this
    //let parts = expression.split(/(?<=[+-])/);

    let parts = this.splitWithoutRegex(expression); // [ '2+', '3-', '1' ]

    for (let part of parts)
    {
      let noop = part.split("+-");
      let first = noop[0];
      let value=0, z=0;

      z = parseInt(first);
      if (!isNaN(z))
        value = z;
      else if (first.length === 1
        && this.variables[first[0]] !== undefined)
      {
        value = this.variables[first[0]];
      }
      else return 0;

      console.log(nextOp);
      switch (nextOp) // 0 - nothing, 1 - plus, 2 - minus
      {
        case this.nextOp.nothing:
          current = value;
          break;
        case this.nextOp.plus:
          current += value;
          break;
        case this.nextOp.minus:
          current -= value;
          break;
      }

      if (part.endsWith('+')) nextOp = this.nextOp.plus;
      else if (part.endsWith('-')) nextOp = this.nextOp.minus;
    }
    return current;
  }
}

let processor = new ExpressionProcessor();
let result = processor.calculate("2+3-1");
