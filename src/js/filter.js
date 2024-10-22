"use strict";

const filterBox = document.querySelectorAll(".portfolio-content__item");

document
  .querySelector(".portfolio__container")
  .addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return false;

    let filterClass = event.target.dataset["f"];

    filterBox.forEach((elem) => {
      elem.classList.remove("hide");
      if (!elem.classList.contains(filterClass) && filterClass !== "all") {
        elem.classList.add("hide");
      }
    });
  });
