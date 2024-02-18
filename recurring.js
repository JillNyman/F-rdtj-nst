/*ÅTERKOMMANDE RESA*/
/*VÄLJ HUR OFTA*/

let dayBtn = document.getElementById("recurring-day-btn");
let dateBtn = document.getElementById("recurring-date-btn");
let intervalBtn = document.getElementById("recurring-interval-btn");
let otherBtn = document.getElementById("recurring-other-btn");

let dayBox = document.getElementById("recurring-day");
let dateBox = document.getElementById("recurring-date");
let intervalBox = document.getElementById("recurring-interval");

let nextZeroBtn = document.getElementById("next-btn-zero");

/*CONTAINERS SOM VISAS ALLTEFTERSOM BOKNINGEN FORTSKRIDER*/
let choiceEl = document.getElementById("choice-container");
//let bookingOne = document.getElementById
//("travel-container-one-booking");
let singletripBtn = document.getElementById
("singletrip-btn");
let bookingTwo = document.getElementById
("travel-container-two");
let nextOneBtn = document.getElementById("next-btn-one");
let hiddenBtns = document.getElementById
("hidden-travel-btns");
let searchInput = document.getElementById
("search-address");
let nextTwoBtn = document.getElementById("next-btn-two");
let bookingThree = document.getElementById
("travel-container-three");
let nextThreeBtn = document.getElementById
("next-btn-three");
let bookingFour = document.getElementById
("travel-container-four");
let bookingFive = document.getElementById
("travel-container-five");
let nextFourBtn = document.getElementById("next-btn-four");
let checkBtn = document.getElementById("check-btn");


/*SPARADE DESTINATIONER*/
let destBtn = document.getElementById
("saved-destinations");
let destOtherBtn = document.getElementById
("other-destination");
let destEl = document.getElementById
("hidden-container-destination");
let destChoiceEl = document.getElementById
("hidden-chosen-destination");

/*HUR OFTA */
dayBtn.onclick = function () {
  if (dayBox.style.display === "block") {
    dayBox.style.display = "none";
    dateBtn.style.display = "block";
    intervalBtn.style.display = "block";
    otherBtn.style.display = "block";
  } else {
    dayBox.style.display = "block";
    dateBtn.style.display = "none";
    intervalBtn.style.display = "none";
    otherBtn.style.display = "none";
  }
};

dateBtn.onclick = function () {
  if (dateBox.style.display === "block") {
    dateBox.style.display = "none";
    dayBtn.style.display = "block";
    intervalBtn.style.display = "block";
    otherBtn.style.display = "block";
  } else {
    dateBox.style.display = "block";
    dayBtn.style.display = "none";
    intervalBtn.style.display = "none";
    otherBtn.style.display = "none";
  }
};

intervalBtn.onclick = function () {
  if (intervalBox.style.display === "flex") {
    intervalBox.style.display = "none";
    dateBtn.style.display = "block";
    dayBtn.style.display = "block";
    otherBtn.style.display = "block";
  } else {
    intervalBox.style.display = "flex";
    dateBtn.style.display = "none";
    dayBtn.style.display = "none";
    otherBtn.style.display = "none";
  }
};
/*SLUT VÄLJ HUR OFTA*/

/*VISA CONTAINER: VAR VILL DU ÅKA?*/
nextZeroBtn.onclick = function () {
  bookingTwo.style.display = "block";
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

/*VÄLJ EN SPARAD ADRESS */
let chosenEl = document.getElementById("rec-dest-three");
let addressEl = document.getElementById("hidden-container-destination");
let savedEl = document.getElementById("rec-saved-dest");

chosenEl.onclick = function () {
  addressEl.style.display = "block";
  savedEl.style.display = "none";
};

/*VÄLJ EN SPARAD ADRESS ATT ÅKA FRÅN */
let startBtn = document.getElementById("rec-saved-address");
let startEl = document.getElementById("hidden-container-start");
let chosenStart = document.getElementById("start-five");
let oneEl = document.getElementById("start-one");
let twoEl = document.getElementById("start-two");
let threeEl = document.getElementById("start-three");
let fourEl = document.getElementById("start-four");
let anotherBtn = document.getElementById("other-address");

let returnFrom = document.getElementById("return-from");
let returnTo = document.getElementById("return-to");

startBtn.onclick = function () {
  startEl.style.display = "block";
};

chosenStart.onclick = function () {
  oneEl.style.display = "none";
  twoEl.style.display = "none";
  threeEl.style.display = "none";
  fourEl.style.display = "none";
  chosenStart.style.borderWidth = "10px";
  chosenStart.style.fontSize = "28px";
  startBtn.style.display = "none";
  anotherBtn.style.display = "none";
  returnFrom.innerHTML = "VÅRDCENTRALEN (Vårdvägen 3)";
  returnTo.innerHTML = "HEMMA (Tallvägen 35)";
};

/*DÖLJ "UNDER VILKEN TIDSPERIOD" */
let contHidden = document.getElementById("recurring-container-two");
let showBtn = document.getElementById("show-container-btn");

showBtn.onclick = function () {
  contHidden.style.display = "block";
};

/*SAMMANFATTNING TILL OCH MED DATUM */
let tripEl = document.getElementById("recurring-trip-btn");
let hiddenEl = document.getElementById("hidden-container-recurring");
let hideEl = document.getElementById("details-column-four");

tripEl.onclick = function () {
  hiddenEl.style.display = "flex";
  hideEl.style.display = "none";
};
