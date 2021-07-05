let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (guess, num) => {
    return Math.abs(guess - num);
}

const compareGuesses = (human, comp, target) => {
    if (human < 0 || human > 9) {
        alert('Invalid number! You lose!');
        return false;
    }

    if (getAbsoluteDistance(human, target) <= getAbsoluteDistance(comp, target)) return true;
    else return false;
};

const updateScore = (str) => {
    switch (str) {
        case 'human':
            humanScore++;
            return;
        case 'computer':
            computerScore++;
            return;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
    return;
}