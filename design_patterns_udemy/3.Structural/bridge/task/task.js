class Shape {
  constructor(name, renderer) {
    this.name = name;
    this.renderer = renderer;
  }
}

class Triangle extends Shape {
  constructor(renderer) {
    super("triangle", renderer.triangle);
    this.renderer = renderer.triangle;
  }
  toString() {
    return this.renderer;
  }
}

class Square extends Shape {
  constructor(renderer) {
    super("square", renderer.square);
    this.renderer = renderer.square;
  }
  toString() {
    return this.renderer;
  }
}

class VectorRenderer {
  get square() {
    return `Drawing square as lines`;
  }
  get triangle() {
    return `Drawing triangle as lines`;
  }
}

class RasterRenderer {
  get square() {
    return `Drawing square as pixels`;
  }
  get triangle() {
    return `Drawing triangle as pixels`;
  }
}

// imagine VectorTriangle and RasterTriangle are here too
let vector = new Shape("vector", new VectorRenderer());
vector = new Triangle(vector.renderer);
console.log(vector.toString()); // Drawing triangle as lines
let raster = new Shape("raster", new RasterRenderer());
raster = new Square(raster.renderer);
console.log(raster.toString()); // Drawing square as pixels
