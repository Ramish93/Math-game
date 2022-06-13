function startGame() {
    let name = getInputV('playername');
    logPlayer(name);
    // starting a new game
    postScore(100, name);
}
const logPlayer = (name = 'Multimath player') => {
    console.log(`${name}`);
};
const getInputV = (id) => {
    const inputElement = document.getElementById(id);
    if (inputElement.value === '') {
        return undefined;
    }
    return inputElement.value;
};
const postScore = (score, playerName = 'Multimath player') => {
    const scoreE = document.getElementById('postedScores');
    scoreE.innerText = `${playerName} - ${score}`;
};
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map