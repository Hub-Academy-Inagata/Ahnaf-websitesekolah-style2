const hamburger = document.querySelector("#hamburger");
const navmenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navmenu.classList.toggle("hidden");
});

// navbar fixed
// window.onscroll = function () {
//   const header = document.querySelector("header");
//   const fixednav = header.offsetTop;

//   if (window.pageYOffset > fixednav) {
//     header.classList.add("navbar-fixed");
//   } else {
//     header.classList.remove("navbar-fixed");
//   }
// };

const navbar = document.getElementsByTagName("header")[0];
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY >= 1) {
    navbar.classList.add("navbar-fixed");
  } else if (this.window.scrollY <= 0) {
    navbar.classList.remove("navbar-fixed");
  }
});
