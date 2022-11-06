// Mouse
// Mouse
// Mouse
const body = document.body;
let mouseCursor = document.querySelector(".cursor");
const mouseFollower = document.querySelector(".cursor-follower");
let navLinks = document.querySelectorAll("a");
let allLinks = document.querySelectorAll("a");
let imgLinks = document.querySelectorAll(".linked-img");

window.addEventListener("mousemove", cursor);

var cursorDisplay = null;
function turnOnCursor() {
  if (window.matchMedia("(max-width: 767px)").matches) return;
  if (cursorDisplay === "block") {
    return;
  }
  cursorDisplay = "block";
  mouseCursor.style.display = cursorDisplay;
  mouseFollower.style.display = cursorDisplay;
}

function cursor(e) {
  turnOnCursor();
  mouseCursor.style.top = `${e.pageY}px`;
  mouseCursor.style.left = `${e.pageX}px`;
  mouseFollower.style.top = `${e.pageY}px`;
  mouseFollower.style.left = `${e.pageX}px`;
}

body.addEventListener("mousedown", (e) => {
  if (e) {
    mouseCursor.classList.add("cursorClicked");
  }
});
body.addEventListener("mouseup", (e) => {
  if (e) {
    mouseCursor.classList.remove("cursorClicked");
  }
});
body.addEventListener("mouseover", () => {
  mouseCursor.classList.add("cursor");
  mouseFollower.classList.add("cursor-follower");
});
body.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("cursor");
  mouseFollower.classList.remove("cursor-follower");
});

allLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    mouseFollower.style.display = "none";
  });
  link.addEventListener("mouseleave", () => {
    mouseFollower.style.display = "block";
    mouseCursor.classList.remove("link-grow");
  });
});
imgLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("img-cursor");
    mouseFollower.style.display = "none";
  });
  link.addEventListener("mouseleave", () => {
    mouseFollower.style.display = "block";
    mouseCursor.classList.remove("img-cursor");
  });
});
// Mouse
// Mouse
// Mouse
