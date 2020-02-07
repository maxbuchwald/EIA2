"use strict";
var Vogelhaus;
(function (Vogelhaus) {
    class Snowflake {
        constructor() {
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new Vogelhaus.Vector(x, y);
            // Geschwindigkeit & Richtung
            this.velocity = new Vogelhaus.Vector(0.3, 3);
        }
        move() {
            // Geschwindigkeit & Richtung zu Positon addieren
            this.position.add(this.velocity);
            //Schneeflocken-Endless-Schleife
            if (this.position.y > 600)
                this.position.y -= Vogelhaus.crc2.canvas.height;
            if (this.position.x > 800)
                this.position.x -= Vogelhaus.crc2.canvas.width;
        }
        draw() {
            // console.log("drawn");
            let gradient = Vogelhaus.crc2.createRadialGradient(0, 0, 0, 0, 0, 10);
            Vogelhaus.crc2.beginPath();
            Vogelhaus.crc2.save();
            Vogelhaus.crc2.translate(this.position.x, this.position.y);
            // crc2.scale(this.size, this.size);
            Vogelhaus.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 1)");
            gradient.addColorStop(0.3, "HSLA(0, 100%, 100%, 0)");
            Vogelhaus.crc2.fillStyle = gradient;
            Vogelhaus.crc2.fill();
            Vogelhaus.crc2.restore();
            Vogelhaus.crc2.closePath();
        }
    }
    Vogelhaus.Snowflake = Snowflake;
})(Vogelhaus || (Vogelhaus = {}));
//# sourceMappingURL=Snowflakes.js.map