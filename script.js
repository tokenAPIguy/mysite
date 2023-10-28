const navLinks = document.querySelectorAll(".nav-link");

function navLinkClick(e) {
  navLinks.forEach((link) => link.classList.remove("active"));
  e.target.classList.add("active");
}

navLinks.forEach((link) => {
  link.addEventListener("click", navLinkClick);
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  let isNavbarTransparent = true;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50 && isNavbarTransparent) {
      navbar.classList.add("navbar-bg");
      isNavbarTransparent = false;
    } else if (window.scrollY <= 50 && !isNavbarTransparent) {
      navbar.classList.remove("navbar-bg");
      isNavbarTransparent = true;
    }
  });
});
