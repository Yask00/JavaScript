// Function producing iterator
// they allow you to define an iterative algorithm by writing a single function
// whose execution is not continuous

function* timestampGenerator() {
  var ts = Date.now();
  var additionalTime = yield;
  console.log(additionalTime, ts);
  yield ts;
  if (additionalTime) {
    ts = ts + additionalTime;
  }

  console.log(ts);
}

const it = timestampGenerator(); // is the controllew not used yet
const originalTimestamp = it.next();
console.log(originalTimestamp);
it.next(); // same as iterator's .next method
it.next(1000 * 60);
