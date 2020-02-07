"use strict";
var Vogelhaus;
(function (Vogelhaus) {
    class Snowball {
        constructor(_x, _y) {
            this.position = new Vogelhaus.Vector(_x, _y);
        }
        draw() {
            if (this.timer >= 0) {
                //console.log(">=0");
                let gradient = Vogelhaus.crc2.createRadialGradient(0, 0, 0, 0, 0, 15);
                gradient.addColorStop(0.5, "HSLA(0, 100%, 100%, 1)");
                gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
                Vogelhaus.crc2.fillStyle = gradient;
                Vogelhaus.crc2.beginPath();
                Vogelhaus.crc2.moveTo(this.x, this.y);
                Vogelhaus.crc2.arc(this.x, (this.y - (this.timer * 3)), ((this.timer * this.timer) / 3) + 15, 0, 2 * Math.PI);
                this.x = this.position.x;
                this.y = this.position.y;
                Vogelhaus.crc2.closePath();
                Vogelhaus.crc2.fill();
                this.timer--;
            }
        }
    }
    Vogelhaus.Snowball = Snowball;
})(Vogelhaus || (Vogelhaus = {}));
//# sourceMappingURL=Snowball.js.map