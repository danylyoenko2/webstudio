"use strict";

const refs = {
  openMenuBtn: document.querySelector("[data-menu-open]"),
  menu: document.querySelector("[data-menu]"),
  closeMenuBtn: document.querySelector("[data-menu-close]"),
};

const toggleModal = () => {
  refs.modal.classList.toggle("is__hidden");
  document.body.classList.toggle("no-scroll");
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
