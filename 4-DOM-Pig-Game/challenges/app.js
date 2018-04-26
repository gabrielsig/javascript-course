/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

CHALLENGES EXTRA RULES:

- Add a second dice to the game
- If a Player rolls two 6 in a roll, his ENTIRE score is lost
- Add an input field so the players can select the winning score


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
        var diceVal1 = Math.floor((Math.random() * 6) + 1);
        var diceVal2 = Math.floor((Math.random() * 6) + 1);

        // 2. Display the result
        // create a variable to store the '.dice' DOM object
        var diceDOM1 = document.getElementById('dice-1');
        var diceDOM2 = document.getElementById('dice-2');
        // make the dice image visible again with the display proprety 'block'
        diceDOM1.style.display = 'block';
        diceDOM2.style.display = 'block';
        diceDOM1.style.opacity = 1.0;
        diceDOM2.style.opacity = 1.0;
        // show the correct dice image based on the number rolled
        diceDOM1.src = 'dice-' + diceVal1 + '.png';
        diceDOM2.src = 'dice-' + diceVal2 + '.png';

        //3. Update the round score if the rolled number is not 1
        if (diceVal1 !== 1 && diceVal2 !== 1){
            // add score
            roundScore += diceVal1 + diceVal2;
            // display in the user interface
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else{
            // change the player
            changePlayer();
        }
        
        // Check if the player rolled two 6 in a roll
        if (diceVal1 === 6 && diceVal2 === 6){
            // reset player score
            scores[activePlayer] = 0;
            document.querySelector('#score-' +  activePlayer).textContent = scores[activePlayer];
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
        
        // get the final score from the interface
        var finalScore = document.querySelector('.final-score').value;
        
        // check if the  field is empty, in this case the score is 100
        if(!finalScore){
            finalScore = 100;
        }
        
        console.log(finalScore);

        //3. Check if player won the game
        if (scores[activePlayer] >= finalScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            // hide the dice
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
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
    // make the dice a little trasnparent
    document.getElementById('dice-1').style.opacity = 0.5;
    document.getElementById('dice-2').style.opacity = 0.5;
    

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
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

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
