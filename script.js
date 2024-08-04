let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultMessage = document.getElementById("result-message");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
};

const win = (userChoice, computerChoice) => {
    userScore++;
    userScoreSpan.innerText = userScore;
    resultMessage.innerText = `${userChoice} beats ${computerChoice}. You win! 🎉`;
};

const lose = (userChoice, computerChoice) => {
    computerScore++;
    computerScoreSpan.innerText = computerScore;
    resultMessage.innerText = `${computerChoice} beats ${userChoice}. You lose. 😢`;
};

const draw = (userChoice, computerChoice) => {
    resultMessage.innerText = `${userChoice} equals ${computerChoice}. It's a draw. 😐`;
};

const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, computerChoice);
            break;
    }
};

const main = () => {
    rockDiv.addEventListener('click', () => game('rock'));
    paperDiv.addEventListener('click', () => game('paper'));
    scissorsDiv.addEventListener('click', () => game('scissors'));
};

main();
