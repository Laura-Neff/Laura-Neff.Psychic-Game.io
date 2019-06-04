




// Make an array of every letter in the alphabet first so that the computer knows what choices to pick from 
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
"j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var GuessLeft = 9;

var Wins = document.getElementById("Wins");
var Losses = document.getElementById("Losses");
var guessesLeft = document.getElementById("guessesLeft");

var wins = 0;
var losses = 0;
    
console.log(computerGuess);

//Create a for-loop to iterate throughout the array (for 10 guesses), 
//finding (obviously integer) indexes for different elements of the array to pick a letter

var computerGuessIndex = Math.floor(Math.random()*letterChoices.length);
var computerGuess = letterChoices[computerGuessIndex];

var humanGuess = document.getElementById("guessesSoFar");

document.onkeyup = function(e) {
    if(GuessLeft === 9) {
        humanGuess.textContent = event.key;
    } else {
        humanGuess.textContent += ", " + event.key;
    }

        if(computerGuess === event.key) {
            wins += 1;
            Wins.innerHTML = wins;
            GuessLeft = 9;
            computerGuessIndex = Math.floor(Math.random()*letterChoices.length);
            computerGuess = letterChoices[computerGuessIndex];
            console.log(computerGuess);        
        } else {
           GuessLeft -= 1;
            if(GuessLeft <= 0) {
                GuessLeft = 9;
                losses += 1;
                Losses.innerHTML = losses;
                computerGuessIndex = Math.floor(Math.random()*letterChoices.length);
                computerGuess = letterChoices[computerGuessIndex];
                console.log(computerGuess);   
            }
    }

    guessesLeft.innerHTML = GuessLeft;

}






// Store the key from the key event








    
    



