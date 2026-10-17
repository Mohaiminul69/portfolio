// Homepage script: mobile menu toggle and footer year.

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

function setMenu(open) {
  navMenu.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
}

navToggle.addEventListener("click", () => {
  setMenu(!navMenu.classList.contains("open"));
});

// Close the menu after picking a link on mobile
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.getElementById("year").textContent = new Date().getFullYear();

// Copy-to-clipboard buttons (e.g. the email in the contact card)
document.querySelectorAll(".copy-btn").forEach((btn) => {
  const label = btn.querySelector(".copy-label");
  let resetTimer;

  btn.addEventListener("click", async () => {
    const text = btn.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for browsers without the Clipboard API
      const temp = document.createElement("textarea");
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
    }
    btn.classList.add("copied");
    label.textContent = "copied!";
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      btn.classList.remove("copied");
      label.textContent = "copy";
    }, 2000);
  });
});
