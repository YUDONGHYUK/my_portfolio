"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", (event) => {
  if (window.scrollY >= navbarHeight) {
    navbar.classList.add("navbar__dark");
  } else {
    navbar.classList.remove("navbar__dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});

// Navbar toggle button
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// handle click on "contact me"
const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", (event) => {
  scrollIntoView("#contact");
});

//  home
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", (event) => {
  home.style.opacity = (homeHeight - window.scrollY) / homeHeight;
});

// Show arrowUp button
const arrowUpBtn = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (window.scrollY >= (homeHeight * 2) / 3) {
    arrowUpBtn.classList.add("visible");
  } else {
    arrowUpBtn.classList.remove("visible");
  }
});

arrowUpBtn.addEventListener("click", () => {
  scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

// Project filtering, Remove selection and select the new one
const workBtnContainer = document.querySelector(".work__categories");
const projectList = document.querySelectorAll(".project");
const categoryBtns = document.querySelectorAll(".category__btn");

workBtnContainer.addEventListener("click", (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  // Project filtering
  projectList.forEach((project) => {
    if (filter === "all" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });
  // Remove selection and select the new one
  categoryBtns.forEach((categoryBtn) => {
    if (filter === categoryBtn.dataset.filter) {
      categoryBtn.classList.add("active");
    } else {
      categoryBtn.classList.remove("active");
    }
  });
});

function scrollIntoView(element) {
  const scrollToElement = document.querySelector(element);
  scrollToElement.scrollIntoView({ behavior: "smooth" });
}
