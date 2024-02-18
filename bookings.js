"use strict";

/* Modal som popup när man klickar på bokad resa */
let modal = document.getElementById("screen-modal");

let btn = document.getElementById("show-booked");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/* Modal som popup när man klickar på resa man vill avboka */
let cancelModal = document.getElementById("screen-modal-cancel");

let cancelBtn = document.getElementById("cancel-booked");

let cancelSpan = document.getElementById("cancel-close");

let cancelHidden = document.getElementById("cancel-hidden");

cancelBtn.onclick = function () {
  cancelModal.style.display = "flex";
};

cancelSpan.onclick = function () {
  cancelModal.style.display = "none";
  cancelBtn.style.display = "none";
  cancelHidden.style.display = "inline";
};

window.onclick = function (event) {
  if (event.target == cancelModal) {
    cancelModal.style.display = "none";
  }
};

/*POPUP AVBOKA*/
function showPopup() {
  let popupText = document.getElementById("cancel-popup-text");

  popupText.classList.toggle("show");
}
