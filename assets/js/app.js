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
   * Handle click events
   * @param {Object} event The Event interface 
   */
  var clickHandler = function ( event ) {

    // Bail if anything other than a button was clicked
    if ( !event.target.hasAttribute( "data-choice" ) ) return;

    // Get the user's choice
    var userChoice = event.target.getAttribute( "data-choice" );
    console.log( userChoice );

  };


  //
  // Init
  //

  // Listen for click events on the app
  app.addEventListener( "click", clickHandler, false );

})();