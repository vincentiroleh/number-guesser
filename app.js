/* TODO:
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNumber = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');


// Assign UI min and Max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', (e) => {
    if (e.target.className === 'play-agin') {
        window.location.reload();
    }

});


// Listen for guess
guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);

    // Validate
    // if (isNaN(guess) || guess < min || guess > max) {
    //     setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    // }

    // check if won
    if (guess === winningNumber) {

        // Game over - won
        gameOver(true, `${winningNumber} is correct, YOU WIN!`);


    } else {
        // wRONG NUMBER
        guessesLeft -= 1

        if (guessesLeft === 0) {
            // Game over lost

            gameOver(false, `Game Over, you lost. The correct number was ${winningNumber}`)

        } else {
            // Game continues - answer wrong

            // change border color
            guessInput.style.borderColor = 'red';

            // clear input
            guessInput.value = '';

            // Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

        }

    }
});

// Game over
const gameOver = (won, msg) => {
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = color;
    // set message
    setMessage(msg, color);

    // Play aGAIN?
    guessBtn.value = 'Play Agin';
    guessBtn.className += 'play-agin';


}

// Get winning Number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Set Message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;

};