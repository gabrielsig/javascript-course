/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


// Create the game variables
var scores, roundScore, activePlayer;

// Create a state variable to check if the game is finished
var gamePlaying;

// Initialize the game parameters
initGame();

// Set up the event handler for the 'dice roll' button
// add the event listener to the 'roll dice' button with the 'click' event type and an anonymous function
document.querySelector('.btn-roll').addEventListener('click', function(){
    // Check if the game is played of if it's finished
    if (gamePlaying){
        // 1. Generate a random number from 1 to 6
        var diceVal = Math.floor((Math.random() * 6) + 1);

        // 2. Display the result
        // create a variable to store the '.dice' DOM object
        var diceDOM = document.querySelector('.dice');
        // make the dice image visible again with the display proprety 'block'
        diceDOM.style.display = 'block';
        // show the correct dice image based on the number rolled
        diceDOM.src = 'dice-' + diceVal + '.png';

        //3. Update the round score if the rolled number is not 1
        if (diceVal !== 1){
            // add score
            roundScore += diceVal;
            // display in the user interface
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else{
            // change the player
            changePlayer();

        }
    }
} );

// Setup the event listener for the 'hold' button
document.querySelector('.btn-hold').addEventListener('click', function(){
    // Check if the game is played of if it's finished
    if (gamePlaying){
        //1. Add the current score to the global score
        scores[activePlayer] += roundScore;

        //2. Update the user interface
        document.querySelector('#score-' +  activePlayer).textContent = scores[activePlayer];

        //3. Check if player won the game
        if (scores[activePlayer] >= 20){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            // hide the dice
            document.querySelector('.dice').style.display = 'none';
            // apply the 'winner' class to the acvtive player panel
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            // remove the 'active' class to the acvtive player panel
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            // set the gamPlaying flag to false
            gamePlaying = false;

        }
        else{
            changePlayer();
        }   
    }   
});

// Setup the event listener for the 'new game' button
document.querySelector('.btn-new').addEventListener('click', initGame);





// ------------------------------------------------------------------------------------------
// FUNCTIONS
function changePlayer(){
    // Zero the current player score
    roundScore = 0
    document.getElementById('current-' + activePlayer).textContent = roundScore
    // remove the 'active' class from the current player
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    // change the active player to the next player with a ternary operator
    activePlayer  === 0 ? activePlayer = 1 : activePlayer = 0;
    // add the 'active' class to the other player panel
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    // make the dice invisible again
    document.querySelector('.dice').style.display = 'none';
}

function initGame(){
    // reset the scores and active player
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    
    // Set the gamePlaying flag to true
    gamePlaying = true;
    
    // Setting the dice display property to none so that it isn't shown at startup
    // Selection made by the class, not the id
    document.querySelector('.dice').style.display = 'none';

    // Set the initial scores to zero
    // using getElementById because the elements have ids and it's faster than querySelector 
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    // change the names of the panels to 'player 1' and 'player 2'
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    // remove the 'winner' class from the panels
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    // remove the 'active' class from the panels
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    // add the 'active class to the left player panel
    document.querySelector('.player-0-panel').classList.add('active');
    
}
