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

  //flip
  var pastDiv = document.getElementById('past-card-front');
  pastDiv.innerHTML = '';

  var pastDivNested = document.getElementById('past-card-back');
  pastDivNested.innerHTML = '';

  var pastImg = Card.collection[pastCard].imgSrc;
  var pastBlurb = Card.collection[pastCard].blurb;

  // "flip card front"

  var addPastImg = document.createElement('img');
  addPastImg.src = pastImg;
  pastDiv.appendChild(addPastImg);

  var pastCardBack = document.getElementById('past-card-back');
  var cardBackDiv = document.createElement('div');
  pastCardBack.appendChild(cardBackDiv);

  var addPastBlurb = document.createElement('p');
  addPastBlurb.textContent = pastBlurb;

  // flip card back

  cardBackDiv.appendChild(addPastBlurb);



  var presentDiv = document.getElementById('present-card-front');
  presentDiv.innerHTML = '';

  var presentDivNested = document.getElementById('present-card-back');
  presentDivNested.innerHTML = '';

  var presentImg = Card.collection[presentCard].imgSrc;
  var presentBlurb = Card.collection[presentCard].blurb;

  var addPresentImg = document.createElement('img');
  addPresentImg.src = presentImg;
  presentDiv.appendChild(addPresentImg);


  var presentCardBack = document.getElementById('present-card-back');
  var presentBackDiv = document.createElement('div');
  presentCardBack.appendChild(presentBackDiv);

  var addPresentBlurb = document.createElement('p');
  addPresentBlurb.textContent = presentBlurb;

  presentBackDiv.appendChild(addPresentBlurb);



  var futureDiv = document.getElementById('future-card-front');
  futureDiv.innerHTML = '';

  var futureDivNested = document.getElementById('future-card-back');
  futureDivNested.innerHTML = '';

  var futureImg = Card.collection[futureCard].imgSrc;
  var futureBlurb = Card.collection[futureCard].blurb;

  var addFutureImg = document.createElement('img');
  addFutureImg.src = futureImg;
  futureDiv.appendChild(addFutureImg);


  var futureCardBack = document.getElementById('future-card-back');
  var futureBackDiv = document.createElement('div');
  futureCardBack.appendChild(futureBackDiv);

  var addFutureBlurb = document.createElement('p');
  addFutureBlurb.textContent = futureBlurb;

  futureBackDiv.appendChild(addFutureBlurb);

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


function displayButton(){

  var journalButton = document.getElementById('journal-button');

  var buttonCreate = document.createElement('button');
  buttonCreate.setAttribute('formaction', '/pages/journal.html');

  buttonCreate.textContent = ('Go To Journal For Further Reflection');

  journalButton.appendChild(buttonCreate);

}


// event listener for submit

var submit = document.getElementById('user-input');
submit.addEventListener('submit', handleEvent);

function handleEvent(event){
  event.preventDefault();
  pickCard();
  storeLocal();
  render();
  displayButton();
}



