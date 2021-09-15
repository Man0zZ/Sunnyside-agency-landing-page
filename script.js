const btnMenu = document.querySelector(".burger");
const mobMenu = document.querySelector(".mob_nav_menu");

btnMenu.addEventListener("click", () => {
  if (mobMenu.style.opacity == 0) {
    mobMenu.style.opacity = 1;
  } else {
    mobMenu.style.opacity = 0;
    mobMenu.style.width = "0rem";
  }
});
