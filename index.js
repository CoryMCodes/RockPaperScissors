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

/* -- Variables -- */
let p1Name = "Player 1";
let p2Name = "Computer";
let player1Selection = '';
let player2Selection = '';
const choices = ["rock", "paper", "scissors"];
let p1Wins = 0;
let p2Wins = 0;


/* -- HTML ELEMENTS -- */
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

const multiplayerLabel = document.createElement('div');
multiplayerLabel.innerText = "Multiplayer"

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

// build player score boxes
const p1ScoreContainer = document.createElement('div');
p1ScoreContainer.classList.add('scoreboard')
const p1ScoreTitle = document.createElement('div');
p1ScoreTitle.innerText = 'SCORE'
const p1Score = document.createElement('div');
p1Score.innerText = p1Wins.toString();
p1ScoreContainer.appendChild(p1ScoreTitle);
p1ScoreContainer.appendChild(p1Score);

const p2ScoreContainer = document.createElement('div');
p2ScoreContainer.classList.add('scoreboard')
const p2ScoreTitle = document.createElement('div');
p2ScoreTitle.innerText = 'SCORE'
const p2Score = document.createElement('div');
p2Score.innerText = p2Wins.toString();
p2ScoreContainer.appendChild(p2ScoreTitle);
p2ScoreContainer.appendChild(p2Score);

// player key control assignment display
const qKeyDisplay = document.createElement('div');
qKeyDisplay.classList.add('smallText');
qKeyDisplay.innerText = "Q = Rock"
const wKeyDisplay = document.createElement('div');
wKeyDisplay.classList.add('smallText');
wKeyDisplay.innerText = "W = Paper"
const eKeyDisplay = document.createElement('div');
eKeyDisplay.classList.add('smallText');
eKeyDisplay.innerText = "E = Scissors"
const iKeyDisplay = document.createElement('div');
// Player 2 Key assigment display
iKeyDisplay.classList.add('smallText');
iKeyDisplay.innerText = "I = Rock"
const oKeyDisplay = document.createElement('div');
oKeyDisplay.classList.add('smallText')
oKeyDisplay.innerText = "O = Paper";
const pKeyDisplay = document.createElement('div');
pKeyDisplay.classList.add('smallText')
pKeyDisplay.innerText = "P = Scissors";

p1ButtonBox.appendChild(qKeyDisplay);
p1ButtonBox.appendChild(wKeyDisplay);
p1ButtonBox.appendChild(eKeyDisplay);

p2ButtonBox.appendChild(iKeyDisplay);
p2ButtonBox.appendChild(oKeyDisplay);
p2ButtonBox.appendChild(pKeyDisplay);

// VS div
const versusBox = document.createElement('div');
versusBox.classList.add('versusBox')
const versus = document.createElement('div');
versus.innerText = "VS"
const roundResult = document.createElement('div');
roundResult.classList.add("smallText")
roundResult.innerText = "";
versusBox.appendChild(versus);
versusBox.appendChild(roundResult)


// append elements to create displays
p1Display.appendChild(p1NameWrapper);
p1Display.appendChild(p1ChoiceBox);
p1Display.appendChild(p1ButtonBox);
p1Display.appendChild(p1ScoreContainer);
p2Display.appendChild(p2NameWrapper);
p2Display.appendChild(p2ChoiceBox);
p2Display.appendChild(p2ButtonBox);
p2Display.appendChild(p2ScoreContainer);
displayBoxWrapper.appendChild(p1Display);
displayBoxWrapper.appendChild(versusBox);
displayBoxWrapper.appendChild(p2Display);
container.appendChild(displayBoxWrapper);

//create round timer 
const roundTimer = document.createElement('div');
roundTimer.style.cssText = '--duration: 5'
const timerDiv = document.createElement('div');
roundTimer.appendChild(timerDiv);

// create start button
const startButton = document.createElement("button");
startButton.classList.add('startButton')
startButton.innerText = "START";

//create controls container will contain: muptiplayer options/ start button /round timer
const controlsContainer = document.createElement('div');
controlsContainer.classList.add('controls');

controlsContainer.appendChild(multiplayerLabel)
controlsContainer.appendChild(switchWrapper)
controlsContainer.appendChild(startButton);

container.appendChild(controlsContainer)
container.appendChild(roundTimer);

// Build Win Modal //
const winModal = document.createElement('div')
winModal.setAttribute('id', 'win-modal');
winModal.classList.add("hidden");
const modalTitle = document.createElement('div');
modalTitle.classList.add('modalTitle');
const modalResetBtn = document.createElement('button');
modalResetBtn.setAttribute('id', 'reset');
modalResetBtn.innerText = 'Reset';

winModal.appendChild(modalTitle);
winModal.appendChild(modalResetBtn);
container.appendChild(winModal);

/* --  EVENT LISTENERS -- */

// event listner that on checkbox that toggles 1 or 2 player mode
multiplayerSwitchBox.addEventListener('change', () =>{
  updateGameMode();
  resetRound();
  resetGame();
})

// modal reset button resets game and rounds
modalResetBtn.addEventListener('click', () =>{
  resetGame();
  resetRound();
  toggleModal();
})

// event listener that starts round timer animation when start button is clicked
startButton.addEventListener('click', () =>{
  roundTimer.classList.add('roundTimeBar');
  resetRound();
  setTimeout(() =>{
    roundTimer.classList.remove('roundTimeBar')
  },5000)

  listenForPlayerChoice();
})


/* -- FUNCTIONS --*/

// key log event handler that assigns player choices based on key pressed during
// the ten second period after start is clicked
function keylog(event){
  switch (event.key){
    case "q" : player1Selection = "rock"
    break;
    case "w" : player1Selection = "paper"
    break;
    case "e" : player1Selection = "scissors"
    break;
    case "i" : player2Selection = "rock"
    break;
    case "o" : player2Selection = "paper"
    break;
    case "p" : player2Selection = "scissors"
    break;
  }
}
// Listener that runs for ten seconds after start button is clicked
// captures players key choice
function listenForPlayerChoice() {
  document.addEventListener("keyup", keylog)

  
  setTimeout(() => {
    document.removeEventListener("keyup", keylog);
    if (multiplayerSwitchBox.checked){
      playRound(player1Selection, player2Selection)
    }else{
      playRound(player1Selection, getComputerChoice())
    }  
  }, 5000)
}

// function that determines if game is in 1 or 2 player mode 
 function updateGameMode() {
    console.log(multiplayerSwitchBox.checked)
    if(multiplayerSwitchBox.checked){
      // Show Player Two name and unhide the option to change name
      p2Name = "Player 2";
      document.getElementById('p2Name').innerText = p2Name;
    }else{
      // Set Player Name back to computer, hide change name button
      p2Name = "Computer";
      document.getElementById('p2Name').innerText = p2Name;
    }
  }

// Computer Selects choice
function getComputerChoice() {
  var compChoiceNum = Math.floor(Math.random() * (3))  
  console.log("computer chooses " + choices[compChoiceNum])
  return choices[compChoiceNum]
}

// round plays using choices assigned by keylog function
function playRound(playerChoice, player2Choice) {  
  // draw conditions
  if(playerChoice === "rock" && player2Choice === "rock"
  || playerChoice === "paper" && player2Choice === "paper"
  || playerChoice === "scissors" && player2Choice === "scissors"){
    roundResult.innerText = "Draw"
    // Player1 win conditions
  }else if(playerChoice === "rock" && player2Choice === "scissors"
  || playerChoice === "paper" && player2Choice === "rock"
  || playerChoice === "scissors" && player2Choice === "paper"){
     roundResult.innerText = "Player 1 Wins"
     p1Wins++
     p1Score.innerText = p1Wins.toString();
     if(p1Wins == 5){
      modalTitle.innerText = "WINNER - PLAYER 1!"
      toggleModal();
    }
    // Player2 win conditions
  }else if(playerChoice === "rock" && player2Choice === "paper"
  || playerChoice === "paper" && player2Choice === "scissors"
  || playerChoice === "scissors" && player2Choice === "rock"){
    p2Wins++
    p2Score.innerText = p2Wins.toString();
    roundResult.innerText = "Player 2 Wins"
    if(p2Wins == 5){
      modalTitle.innerText = "WINNER - PLAYER 2!"
      toggleModal();
    }
  }else{
    return "error"
  }

  p1ChoiceBox.innerText = playerChoice;
  p2ChoiceBox.innerText = player2Choice;
}

function resetRound() {
  player1Selection = "";
  player2Selection = "";
  p1ChoiceBox.innerText = "";
  p2ChoiceBox.innerText = "";
  roundResult.innerText = "";
}

function resetGame() {
  resetRound();
  p1Wins = 0;
  p2Wins = 0;
  p1Score.innerText = p1Wins;
  p2Score.innerText = p2Wins;
}

function toggleModal() {
  document.querySelector("#win-modal").classList.toggle("hidden")
}
