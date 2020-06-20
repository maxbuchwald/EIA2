"use strict";
var Aufgabe_09;
(function (Aufgabe_09) {
    class Particle {
        constructor() {
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new Aufgabe_09.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new Aufgabe_09.Vector((Math.random() * 5), (Math.random() * -5.5 + 2.5)); // -0.5 - 0.5 || 2 - 3
        }
        move() {
            // console.log("move");
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
            let gradient = Aufgabe_09.crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
            Aufgabe_09.crc2.beginPath();
            Aufgabe_09.crc2.save();
            Aufgabe_09.crc2.translate(this.position.x, this.position.y);
            Aufgabe_09.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 1)");
            gradient.addColorStop(0.3, "HSLA(0, 100%, 100%, 0)");
            Aufgabe_09.crc2.fillStyle = gradient;
            Aufgabe_09.crc2.fill();
            Aufgabe_09.crc2.restore();
            Aufgabe_09.crc2.closePath();
        }
    }
    Aufgabe_09.Particle = Particle;
})(Aufgabe_09 || (Aufgabe_09 = {}));
//# sourceMappingURL=Particle.js.map