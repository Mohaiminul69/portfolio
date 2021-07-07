const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu li a");
const nav = document.querySelector("#main-nav");
const emailId = document.querySelector("#email");
// const progressbar = document.querySelector("#progressbar");

// const totalHeight = document.body.scrollHeight - window.innerHeight;
// window.onscroll = () => {
//   const progressHeight = (window.pageYOffset / totalHeight) * 100;
//   progressbar.style.height = progressHeight + "%";
// };

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scrollPos = window.scrollY;
  if (scrollPos > 150) {
    nav.style.background = "rgba(0, 0, 0, 0.95)";
  } else {
    nav.style.background = "transparent";
  }
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });
});

var doc = jQuery(document);

doc.ready(function () {
  "use strict";
  var typed = new Typed(".typed", {
    strings: [
      "a Front-end Web Developer",
      "Passionate",
      "Diligent",
      "Punctual...",
      "kinda Awesome <span>&#x270c;</span>",
    ],
    smartBackspace: true, // Default value
    loop: true,
    typeSpeed: 60,
    backDelay: 2500,
    fadeOut: true,
    startDelay: 3000,
  });
});

emailId.addEventListener("click", copyText);

function copyText() {
  const text = emailId.textContent;
  /* Select the text field */
  const fakeElement = document.createElement("textarea");
  fakeElement.value = text;
  document.body.appendChild(fakeElement);
  fakeElement.select();
  fakeElement.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");
  document.body.removeChild(fakeElement);
  /* Alert the copied text */
  alert("Copied to Clipboard: " + text);
}
