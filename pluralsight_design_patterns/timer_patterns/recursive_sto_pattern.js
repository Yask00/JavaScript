// most common when queriyng data / ajax

setTimeout(function getFoo() {
  $.get("/foo", function(result) {
    // do something with resutls
    setTimeout(getFoo, 1000);
  });
}, 1000);
