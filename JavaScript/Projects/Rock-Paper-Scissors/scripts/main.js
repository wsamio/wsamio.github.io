//if the localstorage doesn't have rpsGameScore object create one
if(!localStorage.getItem('rpsGameScoreLocal')) {
    const initialScore = {
        wins: 0,
        losses: 0,
        ties: 0
    };
    localStorage.setItem('rpsGameScoreLocal', JSON.stringify(initialScore));
    console.log('Created localstorage to save game scores!');
}

let rpsGameScore = JSON.parse(localStorage.getItem('rpsGameScoreLocal'));

function updateScore() {
    localStorage.setItem('rpsGameScoreLocal', JSON.stringify(rpsGameScore))
    let result = `Wins: ${rpsGameScore.wins}, Losses: ${rpsGameScore.losses}, Ties: ${rpsGameScore.ties}`;
    gameStatElement = document.querySelector('.game-stats');
    gameStatElement.innerHTML = result;
}

updateScore();

// generates a number btween 1, 2 and 3
function computerMoveFunc() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return 'rock';
    } else if (randomNum === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let isAutoPlaying = false;
let intervalId;

function autoPlayGame() {
    autoPlayButtonElement = document.querySelector('.js-auto-play-button');
    if(!isAutoPlaying) {
        intervalId = setInterval(() => {
            const yourMove = computerMoveFunc();
            playGame(yourMove);
        }, 1000);
        isAutoPlaying = true;
        autoPlayButtonElement.innerHTML = 'Stop Play';
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
        autoPlayButtonElement.innerHTML = 'Auto Play';
    }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock');
});

document.querySelector('.js-move-button').addEventListener('click', () => {
    playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('scissors');
});


document.body.addEventListener('keydown', (event) => {
    if(event.key == 'r' || event.key == 'R') {
        playGame('rock');
    } else if (event.key == 'p' || event.key == 'P') {
        playGame('paper');
    } else if(event.key == 's' || event.key == 'S') {
        playGame('scissors');
    }
});

function playGame(yourMove) {
    computerMove = computerMoveFunc();

    if(yourMove === computerMove) {
        rpsGameScore.ties++, result = 'Tie';
    } else if((yourMove === 'rock' && computerMove === 'scissors') ||
                (yourMove === 'paper' && computerMove === 'rock') ||
                (yourMove === 'scissors' && computerMove === 'paper')) {
        rpsGameScore.wins++, result = 'You Win';
    } else {
        rpsGameScore.losses++, result = 'You lose';
    }

    updateScore();

    gameResultElement = document.querySelector('.js-rusult');
    gameResultElement.innerHTML = result;

    gameMovesElement = document.querySelector('.current-game-moves');
    gameMovesElement.innerHTML = `You <img class="move-icon" src="images/${yourMove}-emoji.png"> <img class="move-icon" src="images/${computerMove}-emoji.png"> Computer`;
}

function resetGame() {
    rpsGameScore.wins = rpsGameScore.losses = rpsGameScore.ties = 0;
    updateScore();
    document.querySelector('.current-game-moves').innerHTML = document.querySelector('.js-rusult').innerHTML = '';
    console.log('Game has been reset!');
}