var Player = (function () {
    function Player() {
    }
    Player.prototype.formatName = function () {
        return this.name.toUpperCase();
    };
    return Player;
}());
function startGame() {
    var name = getInputV('playername');
    logPlayer(name);
    postScore(100, name);
}
var logPlayer = function (name) {
    if (name === void 0) { name = 'Multimath player'; }
    console.log("".concat(name));
};
var getInputV = function (id) {
    var inputElement = document.getElementById(id);
    if (inputElement.value === '') {
        return undefined;
    }
    return inputElement.value;
};
var postScore = function (score, playerName) {
    if (playerName === void 0) { playerName = 'Multimath player'; }
    var scoreE = document.getElementById('postedScores');
    scoreE.innerText = "".concat(playerName, " - ").concat(score);
};
document.getElementById('startGame').addEventListener('click', startGame);
var firstPlayer = new Player();
firstPlayer.name = 'ramish';
console.log(firstPlayer.formatName());
//# sourceMappingURL=app.js.map