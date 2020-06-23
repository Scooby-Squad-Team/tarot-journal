'use strict';

var pastReading;
// get past data from local storage
function getJournalEntries() {
  pastReading = localStorage.getItem('past-readings');
  pastReading = JSON.parse(pastReading);
}

getJournalEntries();

function render(pastImg, presentImg, futureImg, pastDesc, presentDesc, futureDesc) {
  // render card images

  // var pastDiv = document.getElementById('past');
  // var pastImg = Card.collection[pastCard].imgSrc;
  // var pastBlurb = Card.collection[pastCard].blurb;
  // var addPastImg = document.createElement('img');
  // addPastImg.src = pastImg;
  // var addPastBlurb = document.createElement('p');
  // addPastBlurb.textContent = pastBlurb;
  // pastDiv.appendChild(addPastImg);
  // pastDiv.appendChild(addPastBlurb);
  // var presentDiv = document.getElementById('present');
  // var presentImg = Card.collection[presentCard].imgSrc;
  // var presentBlurb = Card.collection[presentCard].blurb;
  // var addPresentImg = document.createElement('img');
  // addPresentImg.src = presentImg;
  // var addPresentBlurb = document.createElement('p');
  // addPresentBlurb.textContent = presentBlurb;
  // presentDiv.appendChild(addPresentImg);
  // presentDiv.appendChild(addPresentBlurb);
  // var futureDiv = document.getElementById('future');
  // var futureImg = Card.collection[futureCard].imgSrc;
  // var futureBlurb = Card.collection[futureCard].blurb;
  // var addFutureImg = document.createElement('img');
  // addFutureImg.src = futureImg;
  // var addFutureBlurb = document.createElement('p');
  // addFutureBlurb.textContent = futureBlurb;
  // futureDiv.appendChild(addFutureImg);
  // futureDiv.appendChild(addFutureBlurb);

  // render full card descriptions
}

function populateDateDropdown() {
  var selectElement = document.getElementById('entry-date');
  selectElement.innerHTML = '';
  for (var i in pastReading) {
    var option = document.createElement('option');
    option.textContent = pastReading[i].date;
    selectElement.appendChild(option);
  }
}

populateDateDropdown();

// getJournalEntries();

// event listener for selecting a date

var entries = document.getElementById('date-dropdown');
entries.addEventListener('submit', handleDateSelect);

function handleDateSelect() {
  var selectElement = document.getElementById('entry-date');

  for (var i in pastReading) {
    if (selectElement.value = pastReading[i].date)
    
  }
  render();
}

var reflection = document.getElementById('user-reflection');
reflection.addEventListener('submit', handleSubmitReflection);

function handleSubmitReflection() {
  // save reflection entries to array[index].reflection
  // resave array to localstorage (json.stringify, setItem)
  getJournalEntries();
}



