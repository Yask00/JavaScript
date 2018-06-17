setTimeout(() => {
    console.log('timeout 1st');
}, 0);
  
setImmediate(() => {
    console.log('immediate 1st');
});

// The two above will execute in different order everytime

// However, if you move the two calls within an I/O cycle, 
// the immediate callback is always executed first:
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});