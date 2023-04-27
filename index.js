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
const choices = ["rock", "paper", "scissors"];

//get page container
const container = document.querySelector(".container");

//create title wrapper
const titleWrapper = document.createElement('div');
titleWrapper.innerText = "Rock, Paper, Scissors";
titleWrapper.classList.add('title');

// append title wrapper
container.appendChild(titleWrapper);

//create name wrappers
const p1NameWrapper = document.createElement('div');
p1NameWrapper.setAttribute('id', 'p1Name');
p1NameWrapper.innerText = p1Name;

const p2NameWrapper = document.createElement('div');
p2NameWrapper.setAttribute('id', 'p2Name');
p2NameWrapper.innerText = p2Name;

//create 1 or 2 player toggle switch
const switchWrapper = document.createElement('div');
switchWrapper.classList.add('switchWrapper');

const onePlayerOption = document.createElement('span');
onePlayerOption.classList.add('multiplayerOptionText');
onePlayerOption.innerText = "1p";

const twoPlayerOption = document.createElement('span');
twoPlayerOption.innerText = "2p";
twoPlayerOption.classList.add("multiplayerOptionText");

const multiplayerSwitchLabel = document.createElement('label');
multiplayerSwitchLabel.classList.add('switch');

const multiplayerSwitchBox = document.createElement('input');
multiplayerSwitchBox.setAttribute('type', 'checkbox');

const multiplayerSwitchSlider = document.createElement('span');
multiplayerSwitchSlider.classList.add('slider', 'round');
multiplayerSwitchLabel.appendChild(multiplayerSwitchBox);
multiplayerSwitchLabel.appendChild(multiplayerSwitchSlider);

switchWrapper.appendChild(onePlayerOption);
switchWrapper.appendChild(multiplayerSwitchLabel);
switchWrapper.appendChild(twoPlayerOption);

//build boxes thatt will display player choice images
const displayBoxWrapper = document.createElement('div');
displayBoxWrapper.classList.add('displayBoxWrapper')

const p1Display = document.createElement('div');
p1Display.classList.add('display');
p1Display.setAttribute('id', 'p1Display');

const p1ChoiceBox = document.createElement('div');
p1ChoiceBox.classList.add('choiceDisplayBox');

const p1ButtonBox = document.createElement('div');
p1ButtonBox.classList.add('buttonBox');

const p2Display = document.createElement('div');
p2Display.classList.add('display');
p2Display.setAttribute('id', 'p2Display');

const p2ChoiceBox = document.createElement('div');
p2ChoiceBox.classList.add('choiceDisplayBox');

const p2ButtonBox = document.createElement('div');
p2ButtonBox.classList.add('buttonBox');

// VS div
const versusBox = document.createElement('div');
versusBox.innerText = 'VS';
versusBox.style.alignSelf = 'center';
// append elements to create displays
p1Display.appendChild(p1NameWrapper);
p1Display.appendChild(p1ChoiceBox);
p1Display.appendChild(p1ButtonBox);
p2Display.appendChild(p2NameWrapper);
p2Display.appendChild(p2ChoiceBox);
p2Display.appendChild(p2ButtonBox);
displayBoxWrapper.appendChild(p1Display);
displayBoxWrapper.appendChild(versusBox);
displayBoxWrapper.appendChild(p2Display);
container.appendChild(displayBoxWrapper);

choices.forEach(choice => {
  let p1Button = document.createElement("button");
  p1Button.setAttribute('id', 'p1'+choice)
  let p2Button = document.createElement("button");
  p2Button.setAttribute('id', 'p2'+choice)
  p1Button.innerText = choice;
  p2Button.innerText = choice;
  p1ButtonBox.appendChild(p1Button);
  p2ButtonBox.appendChild(p2Button);
})


  let choiceButtons = document.querySelectorAll("button.choice-btn"); 
    // set event listeners
    choiceButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log("clicked");
    })
  })
  
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
 /* function updateGameMode() {
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
*/

// Computer Selects choice
function getComputerChoice() {
  var compChoiceNum = Math.floor(Math.random() * (3))  
  console.log("computer chooses " + choices[compChoiceNum])
  return choices[compChoiceNum]
}

function playRound(playerChoice, compChoice) {  
  // draw conditions
  if(playerChoice === "rock" && compChoice === "rock"
  || playerChoice === "paper" && compChoice === "paper"
  || playerChoice === "scissors" && compChoice === "scissors"){
    console.log("it was a draw")
    // Player1 win conditions
  }else if(playerChoice === "rock" && compChoice === "scissors"
  || playerChoice === "paper" && compChoice === "rock"
  || playerChoice === "scissors" && compChoice === "paper"){
     console.log("Player 1 Wins")
    // Player2 win conditions
  }else if(playerChoice === "rock" && compChoice === "paper"
  || playerChoice === "paper" && compChoice === "scissors"
  || playerChoice === "scissors" && compChoice === "rock"){
    console.log("Computer Wins")
  }else{
    return "error"
  }
}