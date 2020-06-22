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

// ==================== CARD DATA ==================== //

// ========== 0 - The Fool ========== //
var foolImgSrc = ('/img/hermetic_tarot0.jpg');
var foolBlurb = ('The Fool is the first card in a Tarot deck because he is the most vulnerable of all the Tarot\'s archetypes');
var foolDescription = ('Modern decks usually borrow from the Rider-Waite imagery. Most Fool cards copy the bucolic mountainside scene, the butterfly, and the potential misplaced step that will send The Fool tumbling into the unknown. Don\'t forget, though, that the earlier versions of this card represented already-fallen humanity, over-identified with the material plane of existence, and beginning a pilgrimage toward self-knowledge and, eventually, wisdom. The Fool reminds us to recognize the path of personal development within ourselves -- and the stage upon that path where we find ourselves -- in order to energize our movement toward deeper self-realization.');

// ========== 1 - The Magician ========== //

var magicianImgSrc = ('/img/hermetic_tarot1.jpg');
var magicianBlurb = ('The Magician card is a reminder that you are a unique being, and have many gifts that others do not hold');
var magicianDescription = ('Waite\'s image of The Magician as the solitary ritualist communing with the spirits of the elements -- with its formal arrangement of symbols -- is a token of the freedom we have in modern times to declare our spiritual politics without fear of reprisal. The older cards were never so explicit about what The Magician was doing. It\'s best to keep your imagination open with this card. Visualize yourself manifesting something unique, guided by evolutionary forces that emerge spontaneously from within your soul');

// ========== 2 - The High Priestess ========== //

var highPriestessImgSrc = ('/img/hermetic_tarot2.jpg');
var highPriestessBlurb = ('The most intuitive, connected card in the whole Tarot deck, The High Priestess is a card of awareness and subconsciousness');
var highPriestessDescription = ('In terms of the Major Arcana ordering of cards, The High Priestess appears in the sequence as soon as the Fool decides he wants to develop his innate powers, making a move toward becoming a Magician. The High Priestess is his first teacher, representing the inner life and the method for contacting it, as well as the contemplative study of nature and spiritual mystery');

// ========== 3 - The Empress ========== //

var emperessImgSrc = ('/img/hermetic_tarot3.jpg');
var empressBlurb = ('The Empress is the most feminine card in the Tarot, and greatly encourages compassion, beauty, and love');
var empressDescription = ('This supreme archetype of femininity also symbolizes fertility. It is The Empress who provides us nourishment and security. She is also sometimes seen as delighting us with flowers and fruit. A potentially terrifying aspect of this archetype manifests itself whenever karmic mood swings wipe out our plans, like a storm that has come upon us. Whatever happens, The Empress is the source of our embodiment and of natural lLaw. She might even be called "The Great Recycler."');

// ========== 4 - The Emperor ========== //

var emperorImgSrc = ('/img/hermetic_tarot4.jpg');
var emperorBlurb = ('The Emperor is a card of leadership and power');
var emperorDescription = ('The more enlightenment and cosmic perspective this energy brings, the better life is for all. The Emperor archetype masters the world of matter and physical manifestation. When you apply this card to your situation, acknowledge your potentials for mastery. Reinforce a sense of sovereignty within yourself, despite any self-limiting beliefs, habits, or appearances to the contrary');


// ========== 5 - The Hierophant ========== //

var hierophantImgSrc = ('/img/hermetic_tarot5.jpg');
var hierophantBlurb = ('The Hierophant is like a messenger from the heavens. He is experienced in spirituality and guidance, and his job is to bring these lessons down to us here in the real world');
var hierophantDescription = ('The Hierophant advises that you return to the role of a meticulous student. Learn everything you can about your chosen area. Let that knowledge become a part of you and an operative influence on your day-to-day awareness. In this way, you can slowly and steadily establish real credibility in your field or chosen subject');

// ========== 6 - The Lovers ========== //

var loversImgSrc = ('/img/hermetic_tarot6.jpg');
var loversBlurb = ('It\'s no surprise The Lovers card represents the close relationships in your life');
var loversDescription = ('The Lovers card advises that you study your options and make the wisest choice. Carefully consider your long-term interests. There is no judgment on what you choose to keep from the array of possibilities before you. Just watch out for choices that will produce dissatisfaction and discontent. Be willing to make some compromises, then stick with the commitments you finally make. Trust your intuition along with your rational intellect, and once you make your choice, carry it out with conviction');

// ========== 7 - The Chariot ========== //

var chariotImgSrc = ('/img/hermetic_tarot7.jpg');
var chariotBlurb = ('The Chariot card is connected to your natural drive and determination, and can indicate an upcoming victory');
var chariotDescription = ('The Chariot advises that you be prepared for changes that might include a move or an opportunity to travel. The Charioteer travels light and stays open to fresh experiences that change with every valley or mountain pass. You may be asked to live out of a suitcase and consider every place your home for a while. Be receptive to new people who come into your life. Most especially, become more fluid and taste the joys of freedom. The Charioteer is nothing if not self-sufficient. Be prepared and self-contained for the changes that will sweep in and carry you with them');

// ========== 8 - Strength ========== //

var strengthImgSrc = ('/img/hermetic_tarot8.jpg');
var strengthBlurb = ('One of the most obviously named cards in a Tarot deck, Strength is most definitely a card about strength -- but not physical strength');
var strengthDescription = ('The Strength card advises that you assertively discipline yourself and separate self interest from enlightened wisdom. Deliberately identify with your intuition, even if it works against the desires of your willful ego. Demand and expect the same from others who have some power in this situation. You cannot challenge them to live to a higher standard if you, yourself, have not yet done so. Influence others by setting an example of integrity. Your self-esteem will increase to the degree that you succeed in your efforts');

// ========== 9 - The Hermit ========== //

var hermitImgSrc = ('/img/hermetic_tarot9.jpg');
var hermitBlurb = ('The Hermit yearns to be alone');
var hermitDescription = ('While an hourglass was an identifying feature on the earliest Hermit Tarot cards, more modern cards have shifted the metaphor, showing more or less light released from his lantern. In either case, the Hermit card reminds us of the value of time away from the hubbub of civic life, to relax the ego in communion with nature. Now may be the moment for you to tell everyone to leave you alone. When you are fully ready, you will be able and willing to give others what they need');

// ========== 10 - Wheel Of Fortune ========== //

var wheelImgSrc = ('/img/hermetic_tarot10.jpg');
var wheelBlurb = ('The Wheel of Fortune is constantly revolving -- sometimes you will be at the top, and sometimes you will be at the bottom');
var wheelDescription = ('The Wheel of Fortune advises you follow the flow of events. Physical moves, spiritual awakenings, or dramatically changing social patterns could arise now. Accept these transformations. This is a safe place for you to be. You are watched over and protected as you go round and round the wheel. You will learn a lot. You will also learn it quickly, and what you absorb will benefit you for a long time to come');

// ========== 11 - Justice ========== //

var justiceImgSrc = ('/img/hermetic_tarot11.jpg');
var justiceBlurb = ('Justice is your firm-but-fair reminder that karma is real, and there is a consequence for every action');
var justiceDescription = ('The Justice card advises you to listen carefully as others explain to you their version of events and the parts they played. It is unnecessary to offer feedback. Your role is to observe, listen closely, give a full hearing and keep your wits about you as the story takes shape. As you witness people\'s account of themselves, your understanding will go beyond the words you hear. Subtle inferences and clues will reveal the truths that will enable you to make a wise and accurate assessment');

// ========== 12 - The Hanged Man ========== //

var hangedImgSrc = ('/img/hermetic_tarot12.jpg');
var hangedBlurb = ('The Hanged Man is a card that comes up when you are in limbo');
var hangedDescription = ('This represents a good time to be philosophical, to study and meditate upon the position you find yourself in, and to form resolutions for the moment you become free again. Only those who possess wisdom, patience, and optimism will be able to see through limitations, including possible humiliation, to grasp the inspiring lesson one can gain from such an experience');

// ========== 13 - Death ========== //

var deathImgSrc = ('/img/hermetic_tarot13.jpg');
var deathBlurb = ('One of the most misunderstood cards in a Tarot deck, Death is not a card about physical death');
var deathDescription = ('The Death card advises you to detach from the old order. You may want to close accounts, complete unfinished tasks, and gather your harvest. It is time to move on. If you cut the cords that have bound you to old ways and outdated conventions, you could free yourself to join the sweep of incoming light. This is not an excuse to reject others or hurt them in any way. It is simply a time to move toward your ultimate interests. Do not allow nostalgia and outworn loyalties to hold you back. Be willing to go through whatever it takes to get to where you really want to be');

// ========== 14 - Temperance ========== //

var temperanceImgSrc = ('/img/hermetic_tarot14.jpg');
var temperanceBlurb = ('The Temperance card is a master of moderation');
var temperanceDescription = ('The Temperance card advises you to identify and seek the missing ingredients in your life. Marshal your known skills and abilities and do what needs to be done to complete your mission. Prepare to use spiritual practices, studies, or lifestyle changes that can assist you in your quest. A tremendous amount of benefit is available if you can organize yourself and be disciplined at this time');

// ========== 15 - The Devil ========== //

var devilImgSrc = ('/img/hermetic_tarot15.jpg');
var devilBlurb = ('The Devil card carries heavy feelings of restraint and powerlessness');
var devilDescription = ('The Devil card advises that you show some spunk. There may be nothing to be gained by trying to be subtle or strategic in this situation. Assert your agenda, express yourself honestly, and let the chips fall where they may. Your best bet could be to express your true emotions, possibly even including anger. Acknowledge that you have whatever feelings you have. While it may not be necessary to act out what you feel in every situation, accepting the power and depth of your inner experience enables you to remain true to yourself');

// ========== 16 - The Tower ========== //

var towerImgSrc = ('/img/hermetic_tarot16.jpg');
var towerBlurb = ('Perhaps the most dreaded card in a Tarot deck, The Tower is a representation of destruction');
var towerDescription = ('With the Tower card, think of yourself as an agent of transformation. This self-sacrificing role is likely to create stressful situations. Your vision shows you that a radical change has already been unleashed by forces much larger than mere mortals, and therefore you are no longer resisting. Now you may be at the forefront, acknowledging and accepting the bracing presence of the future bursting in on the present. Try to mediate the harsher parts of the changes as they unfold, so the most vulnerable are the most cushioned. Acknowledge yourself, as well as the others in your life, who are offering their resources to usher in a better future');

// ========== 17 - The Star ========== //

var starImgSrc = ('/img/hermetic_tarot17.jpg');
var starBlurb = ('The Star is the embodiment of hope and healing');
var starDescription = ('This card could also be called The Celestial Mandate -- that which refers us back to our reason for being, our mission in this lifetime. The Star reminds us that, in a sense, we are agents of divine will in our day-to-day lives. If we let go of the idea that we are supposed to be in control, we can more easily notice and appreciate the synchronicities that are nudging us along. In this way, we become more conscious of the invisible helping hand, and we better understand our place within -- and value to -- the larger cosmos');

// ========== 18 - The Moon ========== //

var moonImgSrc = ('/img/hermetic_tarot18.jpg');
var moonBlurb = ('The Moon card is greatly connected to your subconscious');
var moonDescription = ('The Moon card refers to a deep state of sensitivity and imaginative impressionability, developed within a womb of deep relaxation. Here we dream and go into trance, have visions and receive insights, wash in and out with the psychic tides, and experience deep mystical and/or terrifying realities beyond our ordinary senses. In a state of expanded consciousness, we cannot always control what happens. The Moon card represents the ultimate test of a soul\'s integrity, where the membrane between the self and the unknown is removed, and the drop of individuality re-enters the ocean of being. What transpires next is between a soul and its maker');

// ========== 19 - The Sun ========== //

var sunImgSrc = ('/img/hermetic_tarot19.jpg');
var sunBlurb = ('The Sun is a powerfully uplifting card, representing happiness, joy, vitality, and optimism');
var sunDescription = ('The Sun card is about the self -- who you are and how you cultivate your personality and character. The Sun\'s radiance is where one\'s original nature can be encountered in health and safety. The limitations of time and space are stripped away; the soul is refreshed and temporarily protected from the chaos outside the garden walls. Under the light of the Sun, life reclaims its primordial goodness, truth, and beauty. If one person is shown on this card, it is usually signifying a human incarnation of the divine. When two humans are shown, the image is portraying a resolution of the tension between opposites at all levels. It\'s as if this card is saying "You can do no wrong -- it\'s all to the good!"');

// ========== 20 - Judgement ========== //

var judgementImgSrc = ('/img/hermetic_tarot20.jpg');
var judgementBlurb = ('Judgment is a card where your past and your future come together');
var judgementDescription = ('The Judgment card advises that you allow yourself to grow, transform, and release hidden potentials within yourself. Divest yourself of fruitless endeavors without neglecting your duties. At the same time, invest your energies in new growth. It\'s not necessary to reject others, but refuse to be manipulated by those who cry foul. This process isn\'t about them anyway. It is about you and the desire you feel to change your life and become a more complete person. Trust your impulses and allow this remarkable awakening to happen');

// ========== 21 - The World ========== //

var worldImgSrc = ('/img/hermetic_tarot21.jpg');
var worldBlurb = ('The World is the last card of the Major Arcana, and represents completion, success, and fulfillment');
var worldDescription = ('The World card may be giving you permission to do whatever you want. Presently, your motivation is close to the will of the divine. Even if you commit an error, it will be turned to the greater good. Stay active and just keep moving forward. It is unnecessary to keep checking or interrupting your spontaneity with calculation. Rather than look for consensus or affirmation from others, simply dance the dance. In other words, express yourself, react naturally, and let the chips fall where they may. What matters is divine intention. Whether or not human beings approve is less important. If you allow your ego to inflate, however, you cease to be useful to the greater plan');

// ========== Card Constructor ========== //

new Card(foolImgSrc,'The Fool',foolBlurb,foolDescription);
new Card(magicianImgSrc,'The Magician',magicianBlurb,magicianDescription);
new Card(highPriestessImgSrc,'The High Priestess',highPriestessBlurb,highPriestessDescription);
new Card(emperessImgSrc,'The Empress',empressBlurb,empressDescription);
new Card(emperorImgSrc,'The Emperor',emperorBlurb,emperorDescription);
new Card(hierophantImgSrc,'The Hierophant',hierophantBlurb,hierophantDescription);
new Card(loversImgSrc,'The Lovers',loversBlurb,loversDescription);
new Card(chariotImgSrc,'The Chariot',chariotBlurb,chariotDescription);
new Card(strengthImgSrc,'Strength',strengthBlurb,strengthDescription);
new Card(hermitImgSrc,'The Hermit',hermitBlurb,hermitDescription);
new Card(wheelImgSrc,'Wheel of Fortune',wheelBlurb,wheelDescription);
new Card(justiceImgSrc,'Justice',justiceBlurb,justiceDescription);
new Card(hangedImgSrc,'Hanged Man',hangedBlurb,hangedDescription);
new Card(deathImgSrc,'Death',deathBlurb,deathDescription);
new Card(temperanceImgSrc,'Temperance',temperanceBlurb,temperanceDescription);
new Card(devilImgSrc,'The Devil',devilBlurb,devilDescription);
new Card(towerImgSrc,'The Tower',towerBlurb,towerDescription);
new Card(starImgSrc,'The Star',starBlurb,starDescription);
new Card(moonImgSrc,'The Moon',moonBlurb,moonDescription);
new Card(sunImgSrc,'The Sun',sunBlurb,sunDescription);
new Card(judgementImgSrc,'Judgement',judgementBlurb,judgementDescription);
new Card(worldImgSrc,'The World',worldBlurb,worldDescription);

// declare functions for displaying cards

// randomizer function

function randomizer(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
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
  var pastImg = Card.collection[pastCard].imgSrc;
  var pastBlurb = Card.collection[pastCard].blurb;
  var addPastImg = document.createElement('img');
  addPastImg.src = pastImg;
  var addPastBlurb = document.createElement('p');
  addPastBlurb.textContent = pastBlurb;
  pastDiv.appendChild(addPastImg);
  pastDiv.appendChild(addPastBlurb);
  var presentDiv = document.getElementById('present');
  var presentImg = Card.collection[presentCard].imgSrc;
  var presentBlurb = Card.collection[presentCard].blurb;
  var addPresentImg = document.createElement('img');
  addPresentImg.src = presentImg;
  var addPresentBlurb = document.createElement('p');
  addPresentBlurb.textContent = presentBlurb;
  presentDiv.appendChild(addPresentImg);
  presentDiv.appendChild(addPresentBlurb);
  var futureDiv = document.getElementById('future');
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
  storeReading.push(new Reading(pastCard, presentCard, futureCard, date));
  var stringifyReadings = JSON.stringify(storeReading);
  localStorage.setItem('Stored Readings', stringifyReadings);
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



