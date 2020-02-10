"use strict";
var Vogelhaus;
(function (Vogelhaus) {
    class Bird {
        constructor() {
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new Vogelhaus.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new Vogelhaus.Vector((Math.random() * -5), (Math.random() * -5.5 + 2.5)); // -0.5 - 0.5 || 2 - 3
        }
        move(_timeslice) {
            let temporaryVelocity = this.velocity;
            // Schaue ob in Radius r essen liegt
            let minFoodDistance = 80;
            for (let i = 0; i < Vogelhaus.arrayFood.length; i++) {
                let food = Vogelhaus.arrayFood[i];
                let distance = Math.hypot(food.position.x - this.position.x, food.position.y - this.position.y); //quadratischer Bereich 
                if (distance < minFoodDistance) {
                    let cornPosition = food.cornArray[Math.floor(Math.random() * food.cornArray.length)];
                    let velocity = new Vogelhaus.Vector(food.position.x + cornPosition.x - this.position.x, food.position.y + cornPosition.y - this.position.y);
                    velocity.scale(1 / 50);
                    temporaryVelocity = velocity;
                    break; // Beendet die for Schleife
                }
            }
            // Geschwindigkeit & Richtung zu Positon addieren
            this.position.add(temporaryVelocity);
            if (this.position.x < 0) {
                this.position.x += Vogelhaus.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += Vogelhaus.crc2.canvas.height;
            }
            if (this.position.x > Vogelhaus.crc2.canvas.width) {
                this.position.x -= Vogelhaus.crc2.canvas.width;
            }
            if (this.position.y > Vogelhaus.crc2.canvas.height) {
                this.position.y -= Vogelhaus.crc2.canvas.height;
            }
        }
        draw() {
            // console.log("drawn");
            Vogelhaus.crc2.beginPath();
            Vogelhaus.crc2.save();
            Vogelhaus.crc2.translate(this.position.x, this.position.y);
            Vogelhaus.crc2.scale(0.2, 0.2);
            Vogelhaus.crc2.moveTo(0, 50);
            Vogelhaus.crc2.lineTo(50, 25);
            Vogelhaus.crc2.bezierCurveTo(50, 25, 80, -30, 125, 25);
            Vogelhaus.crc2.bezierCurveTo(125, 25, 150, 50, 175, 50);
            Vogelhaus.crc2.bezierCurveTo(175, 50, 200, 50, 250, 100);
            Vogelhaus.crc2.bezierCurveTo(250, 100, 270, 130, 320, 135);
            Vogelhaus.crc2.bezierCurveTo(320, 135, 240, 130, 230, 100);
            Vogelhaus.crc2.bezierCurveTo(230, 100, 70, 160, 50, 60);
            Vogelhaus.crc2.moveTo(0, 50);
            Vogelhaus.crc2.lineTo(50, 60);
            Vogelhaus.crc2.moveTo(100, 110);
            Vogelhaus.crc2.lineTo(90, 170);
            Vogelhaus.crc2.moveTo(98, 110);
            Vogelhaus.crc2.lineTo(108, 170);
            Vogelhaus.crc2.closePath();
            Vogelhaus.crc2.fillStyle = ("HSL(0, 2%, 1%)");
            Vogelhaus.crc2.fill();
            // Stroke 
            Vogelhaus.crc2.scale(2, 2);
            Vogelhaus.crc2.strokeStyle = "black";
            Vogelhaus.crc2.stroke();
            Vogelhaus.crc2.restore();
        }
    }
    Vogelhaus.Bird = Bird;
})(Vogelhaus || (Vogelhaus = {}));
//# sourceMappingURL=Birds.js.map