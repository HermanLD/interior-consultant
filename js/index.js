const navMenu = document.querySelector(".navbar__io");

function navbarIO({ target }) {
  const toggle = navMenu.getAttribute("aria-expanded") === "true" || false;

  navMenu.setAttribute("aria-expanded", !toggle);
}

navMenu.addEventListener("click", navbarIO);