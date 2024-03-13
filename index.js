let chances = 5; // Maximum number of guesses
let count = 0; // Count variable to keep track of guesses
const answer = 10;

function checkGuess() {
    const userInput = document.getElementById('input').value;
    const message = document.getElementById('message');
    const chancesDisplay = document.getElementById('chances');
    const checkButton = document.querySelector('.btn');

    if (chances > 0) {
        if (userInput === '') {
            message.textContent = 'You Have Not Entered a Number!!!';
            message.style.color = 'red';
            message.style.fontSize = "110%"

        } else {
            const guess = parseInt(userInput);
            if (guess === answer) {
                message.textContent = 'Correct!';
                message.classList.add('fade-in', 'show'); // Add fade-in class
                addReloadButton(); 
                message.style.fontSize = "280%"
                message.style.color = 'white'


                disableInputAndButton(); // Disable input and button after correct guess
            } else if (guess > answer) {
                message.textContent = 'Your number is high. Try again.';
            } else {
                message.textContent = 'Your number is low. Try again.';
            }
            chances--; // to reduce chances by 1 for each  guess
            count++; // Increment count for each guess
            chancesDisplay.textContent = chances;
        }

    } else {
        message.textContent = 'You have run out of chances.';
        message.style.color = 'red'; // Change text color to red
        message.style.fontSize = "150%"

        disableInputAndButton(); // Disable input and button when chances run out
        addReloadButton(); // Add reload button
    }

    // Implementing the while loop logic
    if (count = 0) {
        message.textContent = 'You have maxed out your number of tries. Please reload the page to play again.';
        message.style.color = 'red'; // Change text color to red
        disableInputAndButton(); // Disable input and button when maximum tries reached


    }
}

function disableInputAndButton() {
    const input = document.getElementById('input');
    const checkButton = document.querySelector('.btn');
    input.disabled = true;
    checkButton.disabled = true;
}

function addReloadButton() {
    const message = document.getElementById('message');
    const reloadButton = document.createElement('button');
    reloadButton.textContent = 'Reload Page';
    reloadButton.onclick = function () {
        location.reload();
    };
    message.parentNode.appendChild(reloadButton);
}
