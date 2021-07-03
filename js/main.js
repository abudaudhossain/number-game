/*
const para =  document.querySelector('p');
para.addEventListener('click', updataName);

function updataName() {
    let name = prompt('Enter a new name');
    para.textContent = 'Pleyer 1 : '+ name;
}

let randomNumber = Math.floor(Math.random() * 100) + 1;
        const guesses = document.querySelector('.guesses');
        const lastResult = document.querySelector('.lastTesult');
        const lowOrHi = document.querySelector('.lowOrHi');

        const guessesSubmit = document.querySelector('.guessSubmit');
        const guessField = document.querySelector('.guessField');
        
        guessesSubmit.addEventListener('click', checkGuess);
        let guessCount = 1;
        let resetButton;

        function checkGuess() {
            // alert(a.value);
            let userGuess = Number(guessField.value);
            if (guessCount === 1) {
                guesses.textContent = 'Previous guesses: ';
            }
            guesses.textContent += userGuess + ' ';

            if (userGuess === randomNumber) {
                lastResult.textContent = 'Congratulation! You got it right!';
                lastResult.style.backgroundColor = 'green';
                lowOrHi.textContent = ' ';
                setGameOver();
            } else if (guessCount === 10) {
                lastResult.textContent = '!!!Game Over!!!';
                setGameOver();
            } else {
                lastResult.textContent = 'Wrong!';
                lastResult.style.backgroundColor = 'red';
                if (userGuess < randomNumber) {
                    lowOrHi.textContent = 'Last guess was too low!';
                } else {
                    lowOrHi.textContent = 'Last guess was too high!';
                }
            }
        }

        guessCount++;
        // guessField.value = '';
        // guessField.focus();
        function setGameOver() {
            guessField.disabled = true;
            guessSubmit.disabled = true;
            resetButton = document.createElement('button');
            resetButton.textContent = 'Start new game';
            document.body.append(resetButton);
            resetButton.addEventListener('click', resetGame);
        }*/

