//script for hangman game

        //script should work like this: name is prompted by player, of which name will be added to the introductory sentence
        //of the game. 
 
        //setting up array for alphabet
        var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

        //assigning words for computer to randomly pick for the word guessing. 
        var randoWords = ["windows", "telephone"," picture", "whiskey", "assistant", "consistently", "information", "deconstruction", "consideration", "acknowledge"];

//assigning var for player
var player = prompt("what is this players name? ")
var plName = document.write(player);
//_______________________________________________________________
// Code working up until here.
//_______________________________________________________________

//creating vars to hold reverences to the places in the HTML where things are to display:
var directionsText = document.getElementById("directions-text");
var guessedLetter = document.getElementById("guessed-letter");
var incorPrompt = document.getElementById("incorrect-prompt");
var corPrompt = document.getElementById("correct-prompt");



  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    //________________from codePen_________________
   // Get elements
   var showLives = document.getElementById("mylives");
   var showCatagory = document.getElementById("scatagory");
   var getHint = document.getElementById("hint");
   var showClue = document.getElementById("clue");
 
 
 
   // create alphabet ul
   var buttons = function () {
     myButtons = document.getElementById('buttons');
     letters = document.createElement('ul');
  // creating var i to represent the process of going through the alphabet's letters
     for (var i = 0; i < alphabet.length; i++) {
       letters.id = 'alphabet';
       list = document.createElement('li');
       list.id = 'letter';
       list.innerHTML = alphabet[i];
       check();
       myButtons.appendChild(letters);
       letters.appendChild(list);
     }
   }
  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is Premier League Football Teams";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "The Chosen Category Is Films";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Is Cities";
    }
  }

  // 
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

        //setting var for the for loop to locate words in the alphabet list
    for (var FiddleStick = 0; FiddleStick < word.length; FiddleStick++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      //creating if/else where the corresponding blank space is equal to the index of the FiddleStick letter in the Alphabet
      if (word[FiddleStick] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
              //with the innerHTML creating a call to respond with if
        guess.innerHTML = "_";
      }





var playerGuess= ("I choose letter... ")

//players guess is put to lowercase
var playerGuessLower = playerGuess.toLowerCase();
 


