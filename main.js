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
  scrollIntoView(link);
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

// Project filtering
const workBtnContainer = document.querySelector(".work__categories");
const projectList = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  projectList.forEach((project) => {
    if (filter === "all" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });
});

function scrollIntoView(element) {
  const scrollToElement = document.querySelector(element);
  scrollToElement.scrollIntoView({ behavior: "smooth" });
}
