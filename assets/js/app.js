;(function () {

  "use strict";

  //
  // Variables
  //

  // Elements
  var app = document.querySelector("#app");
  var results = document.querySelector("#results");

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
   * Get the result of the game
   * @param  {String} userChoice     The user's choice
   * @param  {String} computerChoice The computer's choice
   * @return {String}                The result as an HTML string
   */
  var getResult = function (userChoice, computerChoice) {

    // To store the result and HTML output
    var result, htmlString;

    // Update the result
    if (userChoice === computerChoice) {
      result = "tie";
    } else if (wins[userChoice] === computerChoice) {
      result = "win";
    } else {
      result = "lose";
    }

    // Update the HTML output
    htmlString = "<h2>" + (result === "tie" ? "It's a tie!" : "You " + result + "!") + "</h2>";
    htmlString += "<p>";
      if (result === "tie") {
        htmlString += "You both picked " + userChoice;
      } else if (result === "win") {
        htmlString += userChoice + " beats " + computerChoice;
      } else {
        htmlString += computerChoice + " beats " + userChoice;
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
    results.innerHTML = getResult(userChoice, computerChoice);

  };


  //
  // Init
  //

  // Listen for click events on the app
  app.addEventListener("click", clickHandler, false);

})();