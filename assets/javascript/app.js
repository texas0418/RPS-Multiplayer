var config = {
  apiKey: "AIzaSyAslaCndOsIfhgdKULmFAOBeIsozPRylKw",
  authDomain: "firstclassproject-36dd6.firebaseapp.com",
  databaseURL: "https://firstclassproject-36dd6.firebaseio.com",
  projectId: "firstclassproject-36dd6",
  storageBucket: "firstclassproject-36dd6.appspot.com",
  messagingSenderId: "160542958584"
};

  firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
var database = firebase.database();

// Initial values
// Stores objects for players
var player1 = null;
var player2 = null;

// Stores players' names


// Stores player's name in browser


// Stores player's choice after button click


// Tracks whos turn


// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {


// If Firebase has a player 1 and player 2 stored (first case)


// Set the variables for player 1/player 2 equal to the stored values in firebase.


// Change the HTML to reflect the stored values


// When both players join, set player 1 as first turn - increase font size and change color (faded when not turn)


// Grab Player 1's Choice


// Grab Player 2's Choice


// Rock Paper Scissors Lizard Spock Comparison


// Highlight option that is the one based on who picked what. If tie, nothing is highlighted and Tie is displayed on both player's Wins/Losses


// Change back to player's 1 turn


// Chat box