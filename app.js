"use strict";
// para cambiar de tema de claro a oscuro y viceversa
const switcher = document.querySelector(".theme-btn");

switcher.addEventListener("click", function () {
  if (document.body.classList.toggle("light-theme")) {
    this.textContent = "Oscuro";
  }
  if (document.body.classList.toggle("dark-theme")) {
    this.textContent = "Claro";
  } 
});
