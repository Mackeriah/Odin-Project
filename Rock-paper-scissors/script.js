// when the whole DOM is loaded (so everything on the page) then and only then, run the above listen function
document.addEventListener("DOMContentLoaded", function() {

    playerScore = 0;
    computerScore = 0;

    function computerTurn() {
        // generate random int from 1 - 3
        let randomNumber = Math.floor(Math.random() * 3 ) + 1;        

        if (randomNumber === 1) {
            console.log("Computer: Rock");
            return "Rock";
        }
        else if (randomNumber === 2) {
            console.log("Computer: Paper");
            return "Paper";
        }
        else {
            console.log("Computer: Scissors");
            return "Scissors";
        }                
    }    

    function playerTurn() {    
        
        player_input = "";
        
        // convert to lowercase
        let getText = (window.prompt("Enter Rock, Paper or Scissors").toLowerCase());

        // check for invalid player entry        
        if (getText != "rock" && getText != "paper" && getText != "scissors") {
            console.log("Invalid entry!")
            playerTurn();
        }        
        else {
            // cut player input at first char so we can uppercase it
            let sliced = getText.slice(1);
            // get first char
            const firstChar = getText.charAt(0);        
            //upercase first char
            let upperFirstChar = firstChar.toUpperCase();
            console.log(upperFirstChar + sliced);
            player_input = upperFirstChar + sliced;
        }        
        return player_input;
    }      
    

    function playRound(playerSelection, computerSelection) {

        // these capture the return value from the respective function
        playerSelection = playerTurn();        

        computerSelection = computerTurn();        

        // Player chose Rock
        if (playerSelection == "Rock" && computerSelection == "Rock") {
            console.log("Draw!");
        }
        if (playerSelection == "Rock" && computerSelection == "Paper") {
            computerScore += 1;
            console.log("Lose!");
        }
        if (playerSelection == "Rock" && computerSelection == "Scissors") {
            playerScore += 1;
            console.log("Win!");
        }

        // Player chose Paper
        if (playerSelection == "Paper" && computerSelection == "Rock") {
            playerScore += 1;
            console.log("Win!");
        }
        if (playerSelection == "Paper" && computerSelection == "Paper") {
            console.log("Draw!");
        }
        if (playerSelection == "Paper" && computerSelection == "Scissors") {
            computerScore += 1;
            console.log("Lose!");
        }

        // Player chose Scissors
        if (playerSelection == "Scissors" && computerSelection == "Rock") {
            computerScore += 1;
            console.log("Lose!");
        }
        if (playerSelection == "Scissors" && computerSelection == "Paper") {
            playerScore += 1;
            console.log("Win!");
        }
        if (playerSelection == "Scissors" && computerSelection == "Scissors") {
            console.log("Draw!");
        }        
    }    

    function playGame() {
        for (i = 0; i < 5; i++) {
            playRound();
        }
        console.log("Computer score: " + computerScore);
        console.log("Player score: " + playerScore);

        // set to null at start
        winner = null;

        if (playerScore > computerScore) {
            winner = "Player";
        }
        if (computerScore > playerScore) {
            winner = "Computer";
        }
        if (computerScore == playerScore) {
            winner = "Nobody!";
        }
        console.log("Winner was: " + winner)
    }

    // adds the listener to the button
    document.getElementById("start").addEventListener("click", playGame);

    // playGame();
    
  });
