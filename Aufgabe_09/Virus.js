"use strict";
var Aufgabe_09;
(function (Aufgabe_09) {
    class Virus {
        constructor() {
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new Aufgabe_09.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new Aufgabe_09.Vector((Math.random() * 3), (Math.random() * -3.5 + 2.5));
        }
        move() {
            let temporaryVelocity = this.velocity;
            // Geschwindigkeit & Richtung zu Positon addieren
            this.position.add(temporaryVelocity);
            if (this.position.x < 0) {
                this.position.x += Aufgabe_09.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += Aufgabe_09.crc2.canvas.height;
            }
            if (this.position.x > Aufgabe_09.crc2.canvas.width) {
                this.position.x -= Aufgabe_09.crc2.canvas.width;
            }
            if (this.position.y > Aufgabe_09.crc2.canvas.height) {
                this.position.y -= Aufgabe_09.crc2.canvas.height;
            }
        }
        draw() {
            // console.log("drawn");
            let radius = 17;
            Aufgabe_09.crc2.save();
            Aufgabe_09.crc2.beginPath();
            let gradient = Aufgabe_09.crc2.createRadialGradient(0, 0, 0, 0, 0, radius);
            gradient.addColorStop(0, "#6E6E6E");
            gradient.addColorStop(1, "#7D182F");
            Aufgabe_09.crc2.arc(this.position.x, this.position.y, radius, 0, 2 * Math.PI);
            Aufgabe_09.crc2.fillStyle = gradient;
            Aufgabe_09.crc2.fill();
            Aufgabe_09.crc2.closePath();
        }
    }
    Aufgabe_09.Virus = Virus;
})(Aufgabe_09 || (Aufgabe_09 = {}));
//# sourceMappingURL=Virus.js.map