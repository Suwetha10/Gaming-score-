let footballScores = [];
let cricketScores = [];

function addScore() {
    let gameType = document.getElementById('game-type').value;
    let scoreInput = document.getElementById('game-score');
    let scoresList;

    if (gameType === 'football') {
        scoresList = document.getElementById('football-scores-list');
        footballScores.push(Number(scoreInput.value));
    } else if (gameType === 'cricket') {
        scoresList = document.getElementById('cricket-scores-list');
        cricketScores.push(Number(scoreInput.value));
    }

    let scoreItem = document.createElement('li');
    scoreItem.textContent = scoreInput.value;
    scoresList.appendChild(scoreItem);
    scoreInput.value = '';
}

function calculateAverage(game) {
    let scores, averageDisplay;

    if (game === 'football') {
        scores = footballScores;
        averageDisplay = document.getElementById('football-average');
    } else if (game === 'cricket') {
        scores = cricketScores;
        averageDisplay = document.getElementById('cricket-average');
    }

    if (scores.length === 0) {
        averageDisplay.textContent = 'No scores available to calculate average.';
        return;
    }

    let total = scores.reduce((acc, score) => acc + score, 0);
    let average = total / scores.length;
    averageDisplay.textContent = `Average Score: ${average.toFixed(2)}`;
}
