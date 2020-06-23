'use strict';

var pastReading;
var dateSelected;
// get past data from local storage
function getJournalEntries() {
  pastReading = localStorage.getItem('past-readings');
  pastReading = JSON.parse(pastReading);
}
getJournalEntries();

function render() {
  // render card images
  var past = dateSelected.past;
  var present = dateSelected.present;
  var future = dateSelected.future;
  var pastDivImg = document.getElementById('past');
  var pastDivDesc = document.getElementById('past-description');
  var presentDivImg = document.getElementById('present');
  var presentDivDesc = document.getElementById('present-description');  
  var futureDivImg = document.getElementById('future');
  var futureDivDesc = document.getElementById('future-description');
  var pastImg = Card.collection[past].imgSrc;
  var pastDesc = Card.collection[past].description;
  var addPastImg = document.createElement('img');
  addPastImg.src = pastImg;
  var addPastDesc = document.createElement('p');
  addPastDesc.textContent = pastDesc;
  pastDivImg.appendChild(addPastImg);
  pastDivDesc.appendChild(addPastDesc);
  var presentImg = Card.collection[present].imgSrc;
  var presentDesc = Card.collection[present].description;
  var addpresentImg = document.createElement('img');
  addpresentImg.src = presentImg;
  var addpresentDesc = document.createElement('p');
  addpresentDesc.textContent = presentDesc;
  presentDivImg.appendChild(addpresentImg);
  presentDivDesc.appendChild(addpresentDesc);
  var futureImg = Card.collection[future].imgSrc;
  var futureDesc = Card.collection[future].description;
  var addfutureImg = document.createElement('img');
  addfutureImg.src = futureImg;
  var addfutureDesc = document.createElement('p');
  addfutureDesc.textContent = futureDesc;
  futureDivImg.appendChild(addfutureImg);
  futureDivDesc.appendChild(addfutureDesc);
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

function handleDateSelect(event) {
  event.preventDefault();
  var selectElement = document.getElementById('entry-date');

  for (var i in pastReading) {
    if (selectElement.value === pastReading[i].date){
      dateSelected = pastReading[i];
    }
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



