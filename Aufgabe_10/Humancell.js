"use strict";
var Aufgabe_10;
(function (Aufgabe_10) {
    class Cell {
        constructor() {
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new Aufgabe_10.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new Aufgabe_10.Vector((Math.random() * 0.3), (Math.random() * 0.1 + 0.2)); // -0.5 - 0.5 || 2 - 3
        }
        move() {
            // console.log("move");
            let temporaryVelocity = this.velocity;
            // Geschwindigkeit & Richtung zu Positon addieren
            this.position.add(temporaryVelocity);
            if (this.position.x < 0) {
                this.position.x += Aufgabe_10.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += Aufgabe_10.crc2.canvas.height;
            }
            if (this.position.x > Aufgabe_10.crc2.canvas.width) {
                this.position.x -= Aufgabe_10.crc2.canvas.width;
            }
            if (this.position.y > Aufgabe_10.crc2.canvas.height) {
                this.position.y -= Aufgabe_10.crc2.canvas.height;
            }
        }
        draw() {
            // console.log("drawn");
            Aufgabe_10.crc2.beginPath();
            Aufgabe_10.crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            let gradient = Aufgabe_10.crc2.createRadialGradient(0, 0, 0, 0, 0, 40);
            gradient.addColorStop(0, "#ffffff00");
            gradient.addColorStop(1, "#2E9AFE");
            Aufgabe_10.crc2.fillStyle = gradient;
            Aufgabe_10.crc2.strokeStyle = "#58D3F7";
            Aufgabe_10.crc2.lineWidth = 3;
            Aufgabe_10.crc2.shadowOffsetX = 1;
            Aufgabe_10.crc2.shadowOffsetY = 1;
            Aufgabe_10.crc2.shadowBlur = 5;
            Aufgabe_10.crc2.fill();
            Aufgabe_10.crc2.stroke();
            Aufgabe_10.crc2.closePath();
            Aufgabe_10.crc2.save();
            Aufgabe_10.crc2.restore();
        }
    }
    Aufgabe_10.Cell = Cell;
})(Aufgabe_10 || (Aufgabe_10 = {}));
//# sourceMappingURL=Humancell.js.map