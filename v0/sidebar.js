let menuButton = document.querySelector(".menu-button");
let sidebar = document.querySelector(".sidebar");
menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("menu-button-active");
  sidebar.classList.toggle("sidebar-disable");
});