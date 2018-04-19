var height1, height2, height3;
var age1, age2, age3;

height1 = prompt('What is the height of the first player? ');
age1 = prompt('What is the age of the first player? ');
height2 = prompt('What is the height of the second player? ');
age2 = prompt('What is the age of the second player? ');
height3 = prompt('What is the height of the third player? ');
age3 = prompt('What is the age of the third player? ');

var score1 = height1 + 5 * age1;
var score2 = height2 + 5 * age2;
var score3 = height3 + 5 * age3;

if (score1 === score2 && score2 === score3){
    console.log('It\'s a draw! ' + score1 + ' points');
}
else if (score1 > score2 && score1 > score3){
    console.log('Player 1 wins with ' + score1 + ' points');
}
else if (score2 > score1 && score2 > score3){
    console.log('Player 2 wins with ' + score2 + ' points');
}
else{
    console.log('Player 3 wins with ' + score3 + ' points');
}