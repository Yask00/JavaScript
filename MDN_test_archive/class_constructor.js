class Color {
  constructor(r, g, b) {
    this.values = [r, g, b]
  }
}

const red = new Color(255,0,0);

// vs following equivalent

function createColor(r, g, b) {
  return {
    value: [r,g,b]
  }
}