// get player1 name and save to variable - default "Player 1" 
// get single or multiplayer choice and save to variable
// IF multiplater get player2 name and save to variable  - default "Player 2"
// count down from 3 (display on screen)
// count down from 3 while waiting for player choice (css countdown bar animation)
// if no player choice display information (replay?)
// get player1 choice from keystroke input and save to variable
// get player2 choice from keystroke input and save to variable
// IF player two is computer assign choice randomly to variable
// compare player1 choice var to player 2 choice var
// assign winner to var

// Selection Combinations
/*  Player1 = rock / player2 = rock assign winner = draw
    Player 1 = rock / player 2 = paper assign winner = player 2
    player 1 = rock / player 2 = scissors assign winner = player1
    Player1 = scissors / player2 = rock assign winner = player2 
    Player 1 = scissors / player 2 = paper assign winner = player1
    player 1 = scissors / player 2 = scissors assign winner = draw
    Player1 = paper / player2 = rock assign winner = player 1
    Player 1 = paper / player 2 = paper assign winner = draw
    player 1 = paper / player 2 = scissors assign winner = player 2 */

  //Variables
  let p1Name = "Player 1";
  let p2Name = "Computer";
  let playerCount = 1;

  // changeName runs onclick from html and gets passed either player one or two depending on which
  //html button is clicked.
  function changeName(player) {
    let playerName = prompt("Change Player Name:");
    if(player === "player1"){
      document.getElementById("pOneName").innerText = playerName; 
    }else{
      document.getElementById("pTwoName").innerText = playerName;
    }
    return;
  }

// function that determines if game is in 1 or 2 player mode 
  function updateGameMode() {
    console.log(document.getElementById("p2Checkbox").checked)
    if(document.getElementById("p2Checkbox").checked){
      // Show Player Two name and unhide the option to change name
      document.getElementById("pTwoName").innerText = "Player 2";
      document.getElementById("p2NameBtn").classList.remove("hidden");
      // Update Player Count
      playerCount = 2;
    }else{
      // Set Player Name back to computer, hide change name button
      document.getElementById("pTwoName").innerText = "Computer";
      document.getElementById("p2NameBtn").classList.add("hidden");
      // update player count to 1
      playerCount = 1;
    }
  }

// Computer Selects choice
function getComputerChoice() {
  var compChoiceNum = Math.floor(Math.random() * (3) + 1)  
  switch (compChoiceNum) {
    case 1 : return "rock";
    case 2: return "paper";
    case 3: return "scissors";
    default: return "error"
  }
}

function playRound(compChoice) {
  var playerChoice = prompt("Type Rock, Paper, or Scissors").toLowerCase();
  
  // draw conditions
  if(playerChoice === "rock" && compChoice === "rock"
  || playerChoice === "paper" && compChoice === "paper"
  || playerChoice === "scissors" && compChoice === "scissors"){
    return "draw"
    // Player1 win conditions
  }else if(playerChoice === "rock" && compChoice === "scissors"
  || playerChoice === "paper" && compChoice === "rock"
  || playerChoice === "scissors" && compChoice === "paper"){
    return "Player 1 Wins"
    // Player2 win conditions
  }else if(playerChoice === "rock" && compChoice === "paper"
  || playerChoice === "paper" && compChoice === "scissors"
  || playerChoice === "scissors" && compChoice === "rock"){
    return "Player 2 Wins"
  }else{
    return "error"
  }
}

//GameLoop
function start(){
  let countElem = document.getElementById("countDown")
  let timerDisplay = 3
  let id;
  countElem.innerText = timerDisplay;
  id = setInterval(() =>{
    if(timerDisplay > 1){
      timerDisplay--;
      countElem.innerText = timerDisplay;
    }else{
      countElem.innerText = "Go!"
      let result = playRound(getComputerChoice());
      console.log(result)
      clearInterval(id);
    }
  }, 1000)
  
}
