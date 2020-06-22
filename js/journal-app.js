'use strict';

// get past data from local storage
var pastReading = localStorage.getItem('past-readings')
pastReading = JSON.parse(pastReading);

function renderEntries(){
  // render card images
  // render full card descriptions
}


function getJournalEntries{
  // remember to JSON.parse stringy file
}

getJournalEntries();

// event listener for selecting a date

var entries = document.getElementById('date-dropdown');
entries.addEventListener('submit', handleDateSelect);

function handleDateSelect(){
  // render journal entries for page
  render();
}

var reflection = document.getElementById('user-reflection');
reflection.addEventListener('submit', handleSubmitReflection);

function handleSubmitReflection(){
  // save reflection entries to array[index].reflection
  // resave array to localstorage (json.stringify, setItem)
}



