"use strict";

document
  .querySelector(".mobile-menu__btn")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".menu").classList.toggle("open");
    document.body.classList.toggle("no-scroll");
  });
