"use strict";

/*POPUP RESEBOKNING BEKRÄFTAD*/
let confirmationEl = document.getElementById("confirmation-text");
let confirmationBtn = document.getElementById("confirmation-btn");
let changeBtn = document.getElementById("change-btn");

confirmationBtn.onclick = function () {
  confirmationEl.style.display = "block";
  changeBtn.style.display = "none";
  confirmationBtn.style.display = "none";
};
