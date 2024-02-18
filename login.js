"use strict";

/*LOGGA IN MED BANK-ID*/
let loginEl = document.getElementById("login");
let loggedIn = document.getElementById("identified-container");
let loginBtn = document.getElementById("btn-id");

/*VÄLJ EN SPARAD ADRESS */
let chosenEl = document.getElementById("destination-one");
let chosenTwoEl = document.getElementById("destination-two");
let chosenThreeEl = document.getElementById("destination-three");
let chosenFourEl = document.getElementById("destination-four");
let addressEl = document.getElementById("hidden-container-destination");
let changeBtn = document.getElementById("change-dest-btn");
//let savedEl = document.getElementById("saved-dest");

/*VÄLJ EN SPARAD ADRESS ATT ÅKA FRÅN */
let startBtn = document.getElementById("saved-address");
let startEl = document.getElementById("hidden-container-start");
let chosenStart = document.getElementById("start-five");
let oneEl = document.getElementById("start-one");
let twoEl = document.getElementById("start-two");
let threeEl = document.getElementById("start-three");
let fourEl = document.getElementById("start-four");
let otherBtn = document.getElementById("other-address");

let returnFrom = document.getElementById("return-from");
let returnTo = document.getElementById("return-to");

/*CONTAINERS SOM VISAS ALLTEFTERSOM BOKNINGEN FORTSKRIDER*/
let choiceEl = document.getElementById("choice-container");
let bookingOne = document.getElementById("travel-container-one-booking");
let singletripBtn = document.getElementById("singletrip-btn");
let bookingTwo = document.getElementById("travel-container-two-booking");
let nextOneBtn = document.getElementById("next-btn-one");
let hiddenBtns = document.getElementById("hidden-travel-btns");
let searchInput = document.getElementById("search-address");
let nextTwoBtn = document.getElementById("next-btn-two");
let bookingThree = document.getElementById("travel-container-three-booking");
let nextThreeBtn = document.getElementById("next-btn-three");
let bookingFour = document.getElementById("travel-container-four-booking");
let bookingFive = document.getElementById("travel-container-five-booking");
let nextFourBtn = document.getElementById("next-btn-four");
let checkBtn = document.getElementById("check-btn");


/*SPARADE DESTINATIONER*/
let destBtn = document.getElementById("saved-destinations");
let destOtherBtn = document.getElementById("other-destination");
let destEl = document.getElementById("hidden-container-destination");
let destChoiceEl = document.getElementById("hidden-chosen-destination");

/*FRÅGOR OCH SVAR: VISA MER  */
function toggleText() {
  let points = document.getElementById("points");

  let showMore = document.getElementById("show-more");

  let buttonText = document.getElementById("show-more-btn");

  if (points.style.display === "none") {
    showMore.style.display = "none";
    points.style.display = "inline";
    buttonText.innerHTML = "+";
  } else {
    showMore.style.display = "inline";
    points.style.display = "none";
    buttonText.innerHTML = "-";
  }
}

function toggleTextTwo() {
  let points = document.getElementById("points-two");

  let showMore = document.getElementById("show-more-two");

  let buttonText = document.getElementById("show-more-btn-two");

  if (points.style.display === "none") {
    showMore.style.display = "none";
    points.style.display = "inline";
    buttonText.innerHTML = "+";
  } else {
    showMore.style.display = "inline";
    points.style.display = "none";
    buttonText.innerHTML = "-";
  }
}

/*LOGGA IN MED BANK-ID*/
loginBtn.onclick = function () {
  loggedIn.style.display = "block";
  loginEl.style.display = "none";
  choiceEl.style.display = "block";
};

/*VISA CONTAINER: BOKA NY RESA */
singletripBtn.onclick = function () {
  bookingOne.style.display = "block";
  choiceEl.style.display = "none";
  hiddenBtns.style.display = "block";
};

/*VISA CONTAINER: VAR VILL DU ÅKA?*/
nextOneBtn.onclick = function () {
  bookingTwo.style.display = "block";
};

/*VÄLJ ATT ÅKA TILL EN SPARAD ADRESS */
chosenEl.onclick = function () {
  addressEl.style.display = "block";
  
};

destBtn.onclick = function () {
  destEl.style.display = "block";
};

/*VÄLJ BARNBARNEN, ADRESSEN DYKER UPP*/
chosenEl.onclick = function () {
  destChoiceEl.style.display = "block";
  chosenEl.style.display = "none";
  chosenTwoEl.style.display = "none";
  chosenThreeEl.style.display = "none";
  chosenFourEl.style.display = "none";
};

changeBtn.onclick = function(){
  destChoiceEl.style.display = "none";
  chosenEl.style.display = "block";
  chosenTwoEl.style.display = "block";
  chosenThreeEl.style.display = "block";
  chosenFourEl.style.display = "block";
}

/*VÄLJ EN SPARAD ADRESS ATT ÅKA FRÅN */
startBtn.onclick = function () {
  startEl.style.display = "block";
};

destOtherBtn.onclick = function () {
  searchInput.style.display = "block";
};

nextTwoBtn.onclick = function (){
  bookingThree.style.display = "block";
}

nextThreeBtn.onclick = function(){
  bookingFour.style.display = "block";
}

nextFourBtn.onclick = function(){
  bookingFive.style.display = "block";
  checkBtn.style.display = "block";
}


chosenStart.onclick = function () {
  oneEl.style.display = "none";
  twoEl.style.display = "none";
  threeEl.style.display = "none";
  fourEl.style.display = "none";
  chosenStart.style.borderWidth = "10px";
  chosenStart.style.fontSize = "28px";
  startBtn.style.display = "none";
  otherBtn.style.display = "none";
  returnFrom.innerHTML = "BARNBARNEN (Nygatan 8)";
  returnTo.innerHTML = "HEMMA (Tallvägen 35)";
};
