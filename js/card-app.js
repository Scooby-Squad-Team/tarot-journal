'use strict';

// declare functions for displaying cards

// randomizer function

function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var pastCard;
var presentCard;
var futureCard;
var storeReading = [];
var date;
var currentDate = new Date().toISOString().slice(0, 10);
var dateField = document.getElementById('date');
dateField.value = currentDate;


// use randomizer to pick images

function pickCard() {
  pastCard = randomizer(0, Card.collection.length);
  do {
    presentCard = randomizer(0, Card.collection.length);
  } while (pastCard === presentCard);
  do {
    futureCard = randomizer(0, Card.collection.length);
  } while (futureCard === pastCard || futureCard === presentCard);
}

// render cards to web page

function render() {

  //flip
  var pastDiv = document.getElementById('past-card-front');
  pastDiv.innerHTML = '';

  var pastImg = Card.collection[pastCard].imgSrc;
  var pastBlurb = Card.collection[pastCard].blurb;

  // "flip card front"
  var addPastImg = document.createElement('img');
  addPastImg.src = pastImg;

  var pastCardBack = document.getElementById('past-card-back');

  var addPastBlurb = document.createElement('p');
  addPastBlurb.textContent = pastBlurb;
  pastDiv.appendChild(addPastImg);

  // flip card back
  pastCardBack.appendChild(addPastBlurb);



  var presentDiv = document.getElementById('present-card-front');
  presentDiv.innerHTML = '';

  var presentImg = Card.collection[presentCard].imgSrc;
  var presentBlurb = Card.collection[presentCard].blurb;

  var addPresentImg = document.createElement('img');
  addPresentImg.src = presentImg;

  var presentCardBack = document.getElementById('present-card-back');

  var addPresentBlurb = document.createElement('p');
  addPresentBlurb.textContent = presentBlurb;

  presentDiv.appendChild(addPresentImg);
  presentCardBack.appendChild(addPresentBlurb);



  var futureDiv = document.getElementById('future-card-front');
  futureDiv.innerHTML = '';

  var futureImg = Card.collection[futureCard].imgSrc;
  var futureBlurb = Card.collection[futureCard].blurb;

  var addFutureImg = document.createElement('img');
  addFutureImg.src = futureImg;

  var futureCardBack = document.getElementById('future-card-back');

  var addFutureBlurb = document.createElement('p');
  addFutureBlurb.textContent = futureBlurb;

  futureDiv.appendChild(addFutureImg);
  futureCardBack.appendChild(addFutureBlurb);

}

// event handler function


function Reading(past, present, future, date) {
  this.past = past;
  this.present = present;
  this.future = future;
  this.date = date;
  this.reflection;
  storeReading.push(this);
}


function storeLocal() {
  var dateField = document.getElementById('date');
  date = dateField.value;
  var storeReading = localStorage.getItem('past-readings');
  storeReading = JSON.parse(storeReading);
  if (storeReading === null) {
    storeReading = [];
  }
  for (var i = 0; i < storeReading.length; i++) {
    if (date === storeReading[i].date) {
      var legend = document.getElementById('try-again');
      legend.textContent = 'Please choose a new date';
      return;
    }
  }

  storeReading.push(new Reading(pastCard, presentCard, futureCard, date));
  var stringifyReadings = JSON.stringify(storeReading);
  localStorage.setItem('past-readings', stringifyReadings);
}

// event listener for submit

var submit = document.getElementById('user-input');
submit.addEventListener('submit', handleEvent);

function handleEvent(event) {
  event.preventDefault();
  pickCard();
  storeLocal();
  render();
}



