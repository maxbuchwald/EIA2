"use strict";
var Vogelhaus;
(function (Vogelhaus) {
    class Food {
        constructor(_x, _y) {
            this.position = new Vogelhaus.Vector(_x, _y);
        }
        draw(_position, _size) {
            let particle = new Path2D();
            let nParticles = 10;
            let radiusParticle = 2;
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            Vogelhaus.crc2.save();
            Vogelhaus.crc2.translate(_position.x, _position.y);
            Vogelhaus.crc2.fillStyle = "brown";
            for (let drawn = 0; drawn < nParticles; drawn++) {
                Vogelhaus.crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                Vogelhaus.crc2.translate(x, y);
                Vogelhaus.crc2.fill(particle);
                Vogelhaus.crc2.restore();
            }
        }
    }
    Vogelhaus.Food = Food;
})(Vogelhaus || (Vogelhaus = {}));
//# sourceMappingURL=Food.js.map