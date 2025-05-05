class Point
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
  }
}

class Line
{
  constructor(start, end)
  {
    this.start = start;
    this.end = end;
  }

  deepCopy()
  {
    // todo
    return new Line(
      new Point(this.start.x, this.start.y),
      new Point(this.end.x, this.end.y)
    );
  }
}

const line = new Line(new Point(0, 0), new Point(10, 10));
const line2 = line.deepCopy();
line2.start.x = 5; // should not affect line
console.log(line.start.x); // 0
console.log(line2.start.x); // 5