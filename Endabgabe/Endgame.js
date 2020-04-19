"use strict";
var Vogelhaus;
(function (Vogelhaus) {
    let serverUrl = "https://eia-repository-mb.herokuapp.com";
    async function checkForEndGame() {
        if (Vogelhaus.snowballsLeft === 0) {
            // Beende Spiel
            console.log("Game end");
            window.clearInterval(Vogelhaus.updateIntervalId);
            Vogelhaus.printInfo();
            await sendScoreToServer();
            await showScoreboard();
        }
    }
    Vogelhaus.checkForEndGame = checkForEndGame;
    async function sendScoreToServer() {
        let name = prompt("Your name");
        let score = {
            name: name,
            score: Vogelhaus.points
        };
        let query = new URLSearchParams(score);
        await fetch(serverUrl + "/store?" + query.toString());
    }
    Vogelhaus.sendScoreToServer = sendScoreToServer;
    async function showScoreboard() {
        let response = await fetch(serverUrl + "/get");
        let responseText = await response.text();
        let scoreboard = JSON.parse(responseText);
        let scoreboardBody = "";
        for (let i = 0; i < scoreboard.length; i++) {
            let score = scoreboard[i];
            let tdPoints = "<td>" + score.points + "</td>";
            let tdName = "<td>" + score.name + "</td>";
            let tr = "<tr>" + tdPoints + tdName + "</tr>";
            scoreboardBody += tr;
        }
        let tableScoreboardBody = document.getElementById("tableScoreboardBody");
        tableScoreboardBody.innerHTML = scoreboardBody;
    }
    Vogelhaus.showScoreboard = showScoreboard;
})(Vogelhaus || (Vogelhaus = {}));
//# sourceMappingURL=Endgame.js.map