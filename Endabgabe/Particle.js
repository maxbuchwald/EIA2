"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Particle {
        constructor(_x, _y, _x2, _y2) {
            this.position = new Endabgabe.Vector(_x, _y);
            this.size = new Endabgabe.Vector(_x2, _y2);
            console.log("particle constructor");
        }
        draw() {
            let particle = new Path2D();
            // let nParticles: number = 10;
            let radiusParticle = 2;
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            Endabgabe.crc2.fillStyle = "white";
            console.log("draw");
            // for (let drawn: number = 0; drawn < nParticles; drawn++) {
            //     crc2.save();
            //     crc2.translate(this.position.x, this.position.y);
            //     crc2.fillStyle = "white";
            //     crc2.fill(particle);
            //     crc2.restore();
            //     console.log("draw");
            // }
        }
    }
    Endabgabe.Particle = Particle;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Particle.js.map