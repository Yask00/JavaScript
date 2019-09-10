setTimeout(function() {
  console.log("setTimeout");
}, 0);

window.requestAnimationFrame(function() {
  window.requestAnimationFrame(function() {
    console.log("rAF");
  });
});

Promise.resolve().then(function(r) {
  console.log("promise");
});

console.log("main");
