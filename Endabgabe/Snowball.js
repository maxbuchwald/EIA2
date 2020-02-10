"use strict";
var Vogelhaus;
(function (Vogelhaus) {
    class Snowball {
        // lebt: 50 ticks
        // bei tick 25 parabel max wert
        // bei tick 0 am größten und bei tick 50 am kleinsten
        constructor(_x, _y) {
            this.draws = 0;
            this.velocity = 20;
            this.originalSize = 40;
            this.maxSizeDifference = 30;
            this.parabelYMax = 20;
            this.position = new Vogelhaus.Vector(_x, _y);
        }
        draw() {
            let factor = this.draws / this.velocity; // 0 - 1
            let relativeSize = this.originalSize - (this.maxSizeDifference * factor);
            let parabelFactor;
            if (this.draws < (this.velocity / 2)) {
                parabelFactor = this.draws / (this.velocity / 2); // 0 - 1
            }
            else {
                parabelFactor = (this.velocity - this.draws) / (this.velocity / 2); // 1 - 0
            }
            // 0 = 0, 25 = parabelYMax, 50 = 0
            let relativeY = this.parabelYMax * parabelFactor;
            // Löscht quasi den Snowball
            if (this.draws > this.velocity) {
                // Überprüfe ob Bird in Bereich
                for (let i = 0; i < Vogelhaus.birds.length; i++) {
                    let bird = Vogelhaus.birds[i];
                    let distance = Math.hypot(bird.position.x - this.position.x + 20, bird.position.y - this.position.y + 20);
                    let circleRadius = relativeSize / 2;
                    if (distance <= circleRadius + 20) { // 20 Pixel Fehlertoleranz
                        let index = Vogelhaus.birds.indexOf(bird);
                        Vogelhaus.birds.splice(index, 1);
                        let newBird = new Vogelhaus.Bird();
                        Vogelhaus.birds.push(newBird);
                        Vogelhaus.points++;
                    }
                }
                Vogelhaus.snowballs = Vogelhaus.snowballs.slice(1); // Löscht ältesten Snowball
                Vogelhaus.checkForEndGame();
                return;
            }
            Vogelhaus.crc2.save();
            Vogelhaus.crc2.translate(this.x, this.y);
            Vogelhaus.crc2.beginPath();
            Vogelhaus.crc2.arc(this.position.x, this.position.y - relativeY, relativeSize, 0, 2 * Math.PI);
            Vogelhaus.crc2.fillStyle = "white";
            Vogelhaus.crc2.fill();
            Vogelhaus.crc2.closePath();
            Vogelhaus.crc2.restore();
            this.draws++;
        }
    }
    Vogelhaus.Snowball = Snowball;
})(Vogelhaus || (Vogelhaus = {}));
//# sourceMappingURL=Snowball.js.map