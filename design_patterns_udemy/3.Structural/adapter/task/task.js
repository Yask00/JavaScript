class Square {
  constructor(side) {
    this.side = side;
  }
}

function area(rectangle) {
  return rectangle._width * rectangle._height;
}

class SquareToRectangleAdapter extends Square {
  constructor(square) {
    super(square.side);
    this._width = square.side;
    this._height = square.side;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get area() {
    return this._width * this._height;
  }
}

// build an adapter called SquareToRectangleAdapter
// s.t. we could call
//
let sq = new Square(4);
area(new SquareToRectangleAdapter(sq));
