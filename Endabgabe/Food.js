"use strict";
var Vogelhaus;
(function (Vogelhaus) {
    class Food {
        constructor(_x, _y, _x2, _y2) {
            this.cornArray = [];
            this.timer = 5 * 1000; // * 1000 = milliseconds
            this.position = new Vogelhaus.Vector(_x, _y);
            this.size = new Vogelhaus.Vector(_x2, _y2);
            this.drawTime = Date.now(); // 1000
            let nParticles = 10;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                let x = (Math.random() - 0.5) * this.size.x;
                let y = (Math.random() - 0.5) * this.size.y;
                this.cornArray[drawn] = new Vogelhaus.Vector(x, y);
            }
        }
        draw() {
            // If time expired, don't draw and delete
            if (Date.now() > (this.drawTime + this.timer)) {
                // Lösche aus dem arrayFood das Food object
                Vogelhaus.arrayFood = Vogelhaus.arrayFood.slice(1); // Löscht erstes Food
                return;
            }
            let particle = new Path2D();
            let nParticles = 10;
            let radiusParticle = 2;
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            for (let drawn = 0; drawn < nParticles; drawn++) {
                let translation = this.cornArray[drawn];
                Vogelhaus.crc2.save();
                Vogelhaus.crc2.translate(this.position.x + translation.x, this.position.y + translation.y);
                Vogelhaus.crc2.fillStyle = "brown";
                Vogelhaus.crc2.fill(particle);
                Vogelhaus.crc2.restore();
            }
        }
    }
    Vogelhaus.Food = Food;
})(Vogelhaus || (Vogelhaus = {}));
//# sourceMappingURL=Food.js.map