"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Particle {
        constructor(_x, _y, _size, _colour) {
            this.position = new Endabgabe.Vector(_x, _y);
            this.size = _size;
            this.colour = _colour;
            this.velocity = new Endabgabe.Vector((Math.random() * -5), (Math.random() * -5.5 + 2.5)); // -0.5 - 0.5 || 2 - 3
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
                // crc2.translate(this.x, this.y);
                Endabgabe.crc2.beginPath();
                Endabgabe.crc2.arc(this.position.x + getx, this.position.y + gety, 3, 0, 2 * Math.PI);
                Endabgabe.crc2.fill();
                Endabgabe.crc2.closePath();
                Endabgabe.crc2.restore();
            }
        }
        changecolor() {
            if (this.colour == 1) {
                let s = "0123AB";
                let c = "#";
                for (let i = 0; i < 6; i++) {
                    c += s[Math.ceil(Math.random() * 5)];
                }
                Endabgabe.crc2.fillStyle = c;
            }
            if (this.colour == 2) {
                let s = "456CD";
                let c = "#";
                for (let i = 0; i < 6; i++) {
                    c += s[Math.ceil(Math.random() * 5)];
                }
                Endabgabe.crc2.fillStyle = c;
            }
            if (this.colour == 3) {
                let s = "789EF";
                let c = "#";
                for (let i = 0; i < 6; i++) {
                    c += s[Math.ceil(Math.random() * 5)];
                }
                Endabgabe.crc2.fillStyle = c;
            }
        }
        move() {
            this.position.add(this.velocity);
            if (this.position.x < 0) {
                this.position.x += Endabgabe.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += Endabgabe.crc2.canvas.height;
            }
            if (this.position.x > Endabgabe.crc2.canvas.width) {
                this.position.x -= Endabgabe.crc2.canvas.width;
            }
            if (this.position.y > Endabgabe.crc2.canvas.height) {
                this.position.y -= Endabgabe.crc2.canvas.height;
            }
        }
    }
    Endabgabe.Particle = Particle;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Particle.js.map