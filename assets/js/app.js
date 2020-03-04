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
  var clickHandler = function ( event ) {};


  //
  // Init
  //

  // Listen for click events on the app
  app.addEventListener( "click", clickHandler, false );

})();