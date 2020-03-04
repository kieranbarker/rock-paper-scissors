;(function () {

  "use strict";

  //
  // Variables
  //

  // Elements
  var app = document.querySelector( "#app" );

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
  var shuffle = function ( array ) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while ( 0 !== currentIndex ) {
      // Pick a remaining element...
      randomIndex = Math.floor( Math.random() * currentIndex );
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[ currentIndex ];
      array[ currentIndex ] = array[ randomIndex ];
      array[ randomIndex ] = temporaryValue;
    }

    return array;

  };

  /**
   * Make the computer's choice
   * @return {String} The choice (rock/paper/scissors)
   */
  var makeChoice = function() {
    return shuffle( choices.slice() )[ 0 ];
  };

  /**
   * Handle click events
   * @param {Object} event The Event interface 
   */
  var clickHandler = function ( event ) {

    // Bail if anything other than a button was clicked
    if ( !event.target.hasAttribute( "data-choice" ) ) return;

    // Get the user's choice
    var userChoice = event.target.getAttribute( "data-choice" );
    console.log( userChoice );

    // Get the computer's choice
    var computerChoice = makeChoice();
    console.log( computerChoice );

  };


  //
  // Init
  //

  // Listen for click events on the app
  app.addEventListener( "click", clickHandler, false );

})();