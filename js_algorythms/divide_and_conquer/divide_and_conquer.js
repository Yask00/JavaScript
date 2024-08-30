// Divide and conquer is a general algorithmic strategy that involves breaking a problem down into smaller sub-problems and solving each sub-problem independently. An example of divide-and-conquer algorithm is the problem of finding the closest pair of points in a set of points in a 2-dimensional space.

function closestPair(points) {
    let minDistance = Number.MAX_SAFE_INTEGER;
    let closestPair = [];
    points.sort((a, b) => a.x - b.x);
    for (let i = 0; i < points.length - 1; i++) {
      for (let j = i + 1; j < points.length; j++) {
        let distance = Math.sqrt(
          (points[i].x - points[j].x) ** 2 + (points[i].y - points[j].y) ** 2
        );
        if (distance < minDistance) {
          minDistance = distance;
          closestPair = [points[i], points[j]];
        }
      }
    }
    return closestPair;
  }
  console.log(
    closestPair([
      { x: 0, y: 0 },
      { x: 3, y: 4 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 5, y: 6 },
    ])
  );