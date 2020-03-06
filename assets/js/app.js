;(function () {

  "use strict";

  //
  // Variables
  //

  // Elements
  var app = document.querySelector("#app");
  var results = document.querySelector("#results");
  var screenReader = document.querySelector(".screen-reader");

  // Game logic
  var choices = [ "rock", "paper", "scissors" ];
  var wins = { rock: "scissors", paper: "rock", scissors: "paper" };


  //
  // Functions
  //

  /**
   * Randomly shuffle an array
   * https://stackoverflow.com/a/2450976/1293256
   * @param  {Array} array The array to shuffle
   * @return {String}      The first item in the shuffled array
   */
  var shuffle = function (array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;

  };

  /**
   * Shuffle the array of choices and return the first item
   * @return {String} The choice (rock/paper/scissors)
   */
  var makeChoice = function () {
    return shuffle(choices.slice())[0];
  };

  /**
   * Convert a string to title case
   * source: https://gist.github.com/SonyaMoisset/aa79f51d78b39639430661c03d9b1058#file-title-case-a-sentence-for-loop-wc-js
   * @param  {String} str The string to convert to title case
   * @return {String}     The converted string
   */
  var toTitleCase = function (string) {

    string = string.toLowerCase().split(" ");

    for (var i = 0; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }

    return string.join(" ");

  };

  /**
   * Get the result of the game
   * @param  {String} userChoice     The user's choice
   * @param  {String} computerChoice The computer's choice
   * @return {String}                The result (win/loss/tie)
   */
  var getResult = function (userChoice, computerChoice) {

    // Store the result
    var result;

    // Update the result
    if (userChoice === computerChoice) {
      result = "tie";
    } else if (wins[userChoice] === computerChoice) {
      result = "win";
    } else {
      result = "lose";
    }

    // Return the result
    return result;

  };

  /**
   * Get an HTML string to show the result of the game
   * @param  {String} result The result of the game (win/loss/tie)
   * @return {String}        An HTML string with the result
   */
  var getHTML = function (result) {

    // Store the HTML output
    var htmlString;

    // Update the HTML output
    htmlString = "<h2>" + (result === "tie" ? "It's a tie!" : "You " + result + "!") + "</h2>";
    htmlString += "<p>";
      if (result === "tie") {
        htmlString += "You both picked " + userChoice;
      } else if (result === "win") {
        htmlString += toTitleCase(userChoice) + " beats " + computerChoice;
      } else {
        htmlString += toTitleCase(computerChoice) + " beats " + userChoice;
      }
    htmlString += "</p>";

    // Return the HTML output
    return htmlString;

  };

  /**
   * Handle click events
   * @param {Object} event The Event interface 
   */
  var clickHandler = function (event) {

    // Bail if anything other than a button was clicked
    if (!event.target.hasAttribute("data-choice")) return;

    // Get user's and computer's choices
    var userChoice = event.target.getAttribute("data-choice");
    var computerChoice = makeChoice();

    // End the game
    var result = getResult(userChoice, computerChoice);
    results.innerHTML = getHTML(result);

    // Announce the result to screen readers
    screenReader.textContent = results.textContent.replace("!", "! ");

  };


  //
  // Init
  //

  // Listen for click events on the app
  app.addEventListener("click", clickHandler, false);

})();