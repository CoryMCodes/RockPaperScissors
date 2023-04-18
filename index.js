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

  function changeName(player) {
    let playerName = prompt("Change Player Name:");
    if(player === "player1"){
      document.getElementById("pOneName").innerText = playerName; 
    }else{
      document.getElementById("pTwoName").innerText = playerName;
    }
    return;
  }

  function updatePlayer2() {
    console.log(document.getElementById("p2Checkbox").checked)
    if(document.getElementById("p2Checkbox").checked){
      document.getElementById("pTwoName").innerText = "Player 2";
      document.getElementById("p2NameBtn").classList.remove("hidden");
    }else{
      document.getElementById("pTwoName").innerText = "Computer";
      document.getElementById("p2NameBtn").classList.add("hidden");
    }
  }