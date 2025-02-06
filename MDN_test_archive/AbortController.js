btn = document.getElementById("a");

const controller = new AbortController();

btn.addEventListener(
  "click",
  () => {
    // ..do something
  },
  {
    signal: controller.signal,
  }
);

controller.abort(); // removes any/all event handlers associated with this controller