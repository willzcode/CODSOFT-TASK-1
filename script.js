const togglebutton = document.getElementsByClassName("menu-bar")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

togglebutton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
