"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Particle {
        constructor(_x, _y) {
            this.position = new Endabgabe.Vector(_x, _y);
            this.velocity = new Endabgabe.Vector(0.3, 3);
        }
        draw() {
            let particlenumber = 50;
            let radius = 50;
            for (let i = 0; i < particlenumber; i++) {
                let x = 2 * Math.PI * Math.random();
                let getx;
                let gety;
                if (i % 3 == 0) {
                    getx = Math.cos(x) * radius;
                    gety = Math.sin(x) * radius;
                }
                if (i % 3 == 1) {
                    getx = Math.cos(x) * radius * 2 / 3;
                    gety = Math.sin(x) * radius * 2 / 3;
                }
                if (i % 3 == 2) {
                    getx = Math.cos(x) * radius / 3;
                    gety = Math.sin(x) * radius / 3;
                }
                Endabgabe.crc2.save();
                console.log(radius);
                Endabgabe.crc2.translate(this.x, this.y);
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(this.position.x + getx, this.position.y + gety, 3, 0, 2 * Math.PI);
                Endabgabe.crc2.fillStyle = "white";
                Endabgabe.crc2.fill();
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.restore();
            }
        }
        move(_timeslice) {
            Endabgabe.crc2.rotate(360);
            // crc2.rotate.duration: 3000;
        }
    }
    Endabgabe.Particle = Particle;
})(Endabgabe || (Endabgabe = {}));
// view.animate({
//     rotate: 360,
//     duration: 3000
// });
//# sourceMappingURL=Particle.js.map