'use strict';


// declare functions for displaying cards

// randomizer function

function randomizer(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

// use randomizer to pick images
var pastCard;
var presentCard;
var futureCard;
var storeReading = [];
var date;

function pickCard(){
  pastCard = randomizer(0, Card.collection.length);
  do {
    presentCard = randomizer(0, Card.collection.length);
  } while (pastCard === presentCard);
  do {
    futureCard = randomizer(0, Card.collection.length);
  } while (futureCard === pastCard || futureCard === presentCard);
}

// render cards to web page

function render(){

  var pastDiv = document.getElementById('past');
  pastDiv.innerHTML = '';

  var pastImg = Card.collection[pastCard].imgSrc;
  var pastBlurb = Card.collection[pastCard].blurb;
  var addPastImg = document.createElement('img');
  addPastImg.src = pastImg;

  var addPastBlurb = document.createElement('p');
  addPastBlurb.textContent = pastBlurb;
  pastDiv.appendChild(addPastImg);
  pastDiv.appendChild(addPastBlurb);

  var presentDiv = document.getElementById('present');
  presentDiv.innerHTML = '';

  var presentImg = Card.collection[presentCard].imgSrc;
  var presentBlurb = Card.collection[presentCard].blurb;
  var addPresentImg = document.createElement('img');
  addPresentImg.src = presentImg;
  var addPresentBlurb = document.createElement('p');
  addPresentBlurb.textContent = presentBlurb;
  presentDiv.appendChild(addPresentImg);
  presentDiv.appendChild(addPresentBlurb);

  var futureDiv = document.getElementById('future');
  futureDiv.innerHTML = '';

  var futureImg = Card.collection[futureCard].imgSrc;
  var futureBlurb = Card.collection[futureCard].blurb;
  var addFutureImg = document.createElement('img');
  addFutureImg.src = futureImg;
  var addFutureBlurb = document.createElement('p');
  addFutureBlurb.textContent = futureBlurb;
  futureDiv.appendChild(addFutureImg);
  futureDiv.appendChild(addFutureBlurb);

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


function storeLocal(){
  var dateField = document.getElementById('user-input');
  date = dateField.children[1].value;
  var storeReading = localStorage.getItem('past-readings');
  storeReading = JSON.parse(storeReading);
  if(storeReading === null){
    storeReading = [];
  }
  storeReading.push(new Reading(pastCard, presentCard, futureCard, date));
  var stringifyReadings = JSON.stringify(storeReading);
  localStorage.setItem('past-readings', stringifyReadings);
}
// event listener for submit

var submit = document.getElementById('user-input');
submit.addEventListener('submit', handleEvent);

function handleEvent(event){
  event.preventDefault();
  pickCard();
  storeLocal();
  render();
}



