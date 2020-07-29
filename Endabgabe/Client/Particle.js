"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Particle {
        // velocity: Vector;
        constructor(_x, _y, _size) {
            this.position = new Endabgabe.Vector(_x, _y);
            // this.velocity = new Vector(0.3, 3);
            this.size = _size;
        }
        draw() {
            let particlenumber = 50;
            let radius = 50;
            for (let i = 0; i < particlenumber; i++) {
                let x = 2 * Math.PI * Math.random();
                let getx = 0;
                let gety = 0;
                //Big
                if (i % 3 == 0 && this.size == 3) {
                    getx = Math.cos(x) * radius;
                    gety = Math.sin(x) * radius;
                }
                //medium
                if (i % 3 == 1 && this.size >= 2) {
                    getx = Math.cos(x) * radius * 2 / 3;
                    gety = Math.sin(x) * radius * 2 / 3;
                }
                //small
                if (i % 3 == 2) {
                    getx = Math.cos(x) * radius / 3;
                    gety = Math.sin(x) * radius / 3;
                }
                Endabgabe.crc2.save();
                Endabgabe.crc2.translate(this.x, this.y);
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(this.position.x + getx, this.position.y + gety, 3, 0, 2 * Math.PI);
                Endabgabe.crc2.fill();
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.restore();
            }
        }
        changecolor(_timeslice) {
            let s = "0123456789ABCDEF";
            let c = "#";
            for (let i = 0; i < 6; i++) {
                c += s[Math.ceil(Math.random() * 15)];
            }
            Endabgabe.crc2.fillStyle = c;
        }
    }
    Endabgabe.Particle = Particle;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Particle.js.map