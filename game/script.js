const result = document.querySelector('#result');
const resultContainer = document.querySelector('.resultContainer');
const userBoard = document.querySelector('#userScore');
const comBoard = document.querySelector('#computerScore');
const images = document.querySelectorAll('.img');

let userScore = 0;
let computerScore = 0;

function generateComChoice() {
    const options = ['rock', 'paper', 'scissor'];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}

function showWinner(userChoice, computerChoice, userWin) {
    if (userWin) {
        result.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
        resultContainer.style.backgroundColor = 'teal';
        userScore++;
        userBoard.textContent = userScore;
    } else {
        result.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
        resultContainer.style.backgroundColor = 'red';
        computerScore++;
        comBoard.textContent = computerScore;
    }
}

function drawGame() {
    result.textContent = 'It\'s a Draw! Try again.';
    resultContainer.style.backgroundColor = 'purple';
}

function playGame(userChoice) {
    const computerChoice = generateComChoice();
    computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin;
        if (userChoice === 'rock') {
            userWin = computerChoice === 'scissor';
        } else if (userChoice === 'paper') {
            userWin = computerChoice === 'rock';
        } else {
            userWin = computerChoice === 'paper';
        }
        showWinner(userChoice, computerChoice, userWin);
    }
}

images.forEach((image) => {
    image.addEventListener('click', () => {
        const userChoice = image.getAttribute('alt');
        playGame(userChoice);
    });
});
