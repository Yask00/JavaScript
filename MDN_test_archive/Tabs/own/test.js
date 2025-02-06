const linksMenu = document.querySelector(".tabs");

linksMenu.addEventListener("click", (e) => {
  // TODO: case of not click tab item
  const targetSection = e.target.dataset.tar;

  const sections = document.querySelector(".content").children;
  for (const section of sections) {
    if (section.classList.contains(targetSection)) {
      section.classList.remove("hidden");
      section.classList.add("active");
    } else {
      section.classList.remove("active");
      section.classList.add("hidden");
    }
  }
});
