const btnMobile = document.getElementById("btn-mobile");
const nav = document.getElementById("nav");
const menuIcon = document.getElementById("menu-icon");
const linksMenu = document.querySelectorAll(".nav-a");

function toggleMenu() {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    menuIcon.src = "IMG/menu-close.svg";
    menuIcon.alt = "Menu aberto";
  } else {
    menuIcon.src = "IMG/menu-toggle.svg";
    menuIcon.alt = "Menu fechado";
  }
}

btnMobile.addEventListener("click", toggleMenu);
