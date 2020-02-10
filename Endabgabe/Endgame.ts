namespace Vogelhaus {
    let serverUrl: string = "https://eia-repository-mb.herokuapp.com";

    export async function checkForEndGame(): Promise<void> {
        if (snowballsLeft === 0 && foodLeft === 0) {
            // Beende Spiel
            console.log("Game end");

            window.clearInterval(updateIntervalId);
            printInfo();

            await sendScoreToServer();
            await showScoreboard();
        }
    }

    export async function sendScoreToServer(): Promise<void> {
        let name: string | null = prompt("Your name");

        let score = {
            name: name,
            score: points
        };
        let query: URLSearchParams = new URLSearchParams(<any>score);
        await fetch(serverUrl + "/store?" + query.toString());
    }

    export async function showScoreboard(): Promise<void> {
        let response: Response = await fetch(serverUrl + "/get");
        let responseText: string = await response.text();

        let scoreboard = JSON.parse(responseText);

        let scoreboardBody: string = "";

        for (let i: number = 0; i < scoreboard.length; i++) {
            let score = scoreboard[i];

            let tdPoints: string = "<td>" + score.points + "</td>";
            let tdName: string = "<td>" + score.name + "</td>";
            let tr: string = "<tr>" + tdPoints + tdName + "</tr>";

            scoreboardBody += tr;
        }

        let tableScoreboardBody: HTMLSpanElement = <HTMLSpanElement>document.getElementById("tableScoreboardBody");
        tableScoreboardBody.innerHTML = scoreboardBody;
    }
}