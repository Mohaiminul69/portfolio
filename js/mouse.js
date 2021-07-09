// Mouse
// Mouse
// Mouse
const body = document.body;
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll("a");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = `${e.pageY}px`;
  mouseCursor.style.left = `${e.pageX}px`;
}

body.addEventListener("mouseover", () => {
  mouseCursor.classList.add("cursor");
});
body.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("cursor");
});

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
});
// Mouse
// Mouse
// Mouse
