class Integer {
  constructor(value) {
    this.value = value;
  }

  accept(visitor) {
    visitor.visitValue(this);
  }
}

class BinaryExpression {
  constructor(lhs, rhs) {
    this.lhs = lhs;
    this.rhs = rhs;
  }
}

class AdditionExpression extends BinaryExpression {
  constructor(lhs, rhs) {
    super(lhs, rhs);
  }

  accept(visitor) {
    visitor.visitAddition(this);
  }
}

class MultiplicationExpression extends BinaryExpression {
  constructor(lhs, rhs) {
    super(lhs, rhs);
  }

  accept(visitor) {
    visitor.visitMultiplication(this);
  }
}

class ExpressionPrinter {
  constructor() {
    // todo
    this._buffer = [];
  }

  visitValue(value) {
    // todo
    this._buffer.push(value.value);
  }

  visitAddition(ae) {
    // todo
    this._buffer.push("(");
    ae.lhs.accept(this);
    this._buffer.push("+");
    ae.rhs.accept(this);
    this._buffer.push(")");
  }

  visitMultiplication(me) {
    // todo
    me.lhs.accept(this);
    this._buffer.push("*");
    me.rhs.accept(this);
  }

  toString() {
    // todo
    return this._buffer.join("");
  }
}
