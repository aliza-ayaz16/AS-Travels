// Js of navbar
const navBtn = document.querySelector(".bar_btn");
const openUp = document.querySelector(".navbar");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  openUp.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".navbar_items a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navBtn = document.querySelector(".bar_btn");
    const openUp = document.querySelector(".navbar");

    navBtn.classList.remove("active");
    openUp.classList.remove("active");
  });
});

//sticky nav
document.addEventListener("scroll", () => {
  const headerNav = document.querySelector("nav");

  if (window.scrollY > 300) {
    headerNav.classList.add("scrolled");
  } else {
    headerNav.classList.remove("scrolled");
  }
});

