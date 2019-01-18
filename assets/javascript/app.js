var config = {
  apiKey: "AIzaSyAOWLSibzOYPHTIpcV0OVtpXsrDJkTTWoM",
  authDomain: "rpsls-a2fba.firebaseapp.com",
  databaseURL: "https://rpsls-a2fba.firebaseio.com",
  projectId: "rpsls-a2fba",
  storageBucket: "",
  messagingSenderId: "553481429221"
};

  firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
var database = firebase.database();

// Initial values
// Stores objects for players
var player1 = null;
var player2 = null;

// Stores players' names
var playerName1 = "";
var playerName2 = "";

// Stores player's name in browser
var yourName = "";

// Stores player's choice after button click
var player1Choice = "";
var player2Choice = "";


// Tracks whos turn


// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {


// If Firebase has a player 1 and player 2 stored (first case)
if (
  snapshot.child("playerName1").exists() &&
  snapshot.child("playerName2").exists()
) {
  playerName1 = snapshot.val().playerName1;
  playerName2 = snapshot.val().playerName2;
}
console.log(playerName1);
console.log(playerName2);


// Change the HTML to reflect the stored values
$("#playerOneName").text(playerName1);
$("#playerTwoName").text(playerName2);


// If any errors are experienced, log them to console.
},
function(errorObject) {
  console.log("The read failed: " + errorObject.code);
}
);

// When both players join, set player 1 as first turn - increase font size and change color (faded when not turn)


// Grab Player 1's Choice

// Grab Player 2's Choice


// Rock Paper Scissors Lizard Spock Comparison


// Highlight option that is the one based on who picked what. If tie, nothing is highlighted and Tie is displayed on both player's Wins/Losses


// Change back to player's 1 turn


// Chat box