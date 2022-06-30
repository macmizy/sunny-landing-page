const menuBars = document.getElementById("menu-bars");
const menu = document.getElementById("menu");


menuBars.addEventListener("click", function () {
    menu.classList.toggle("active");
});

document.querySelector(".header-content").addEventListener("click", function() {
  menu.classList.remove("active");
});

document.querySelector("main").addEventListener("click", function() {
  menu.classList.remove("active");
});
