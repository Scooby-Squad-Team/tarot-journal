'use strict';

// constructor function

function Card(imgSrc, cardName, blurb, description){
  this.imgSrc = imgSrc;
  this.cardName = cardName;
  this.blurb = blurb;
  this.description = description;

  Card.collection.push(this);
}

Card.collection = [];

// declare functions for displaying cards



// randomizer function

function randomizer(){

}

// use randomizer to pick images

function pickCard(){
// use randomizer function in here
}


// render cards to web page

function render(){

}

// event handler function

function Reading(past, present, future, date) {
  this.past = past;
  this.present = present;
  this.future = future;
  this.date = date;
  this.reflection;
}



function storeLocal(){

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
