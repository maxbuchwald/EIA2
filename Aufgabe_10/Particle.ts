namespace Aufgabe_10 {

    export class Particle {
        position: Vector;
        velocity: Vector;
        size: Vector;

        constructor() {
            let x: number = 800 * Math.random();
            let y: number = 600 * Math.random();

            this.position = new Vector(x, y);

            // Geschwindigkeit & Richtung
            this.velocity = new Vector((Math.random() * 5), (Math.random() * -5.5 + 2.5)); // -0.5 - 0.5 || 2 - 3
        }

        move(): void {
            // console.log("move");
            let temporaryVelocity: Vector = this.velocity;

            // Geschwindigkeit & Richtung zu Positon addieren
            this.position.add(temporaryVelocity);

            if (this.position.x < 0) {
                this.position.x += crc2.canvas.width;
            }

            if (this.position.y < 0) {
                this.position.y += crc2.canvas.height;
            }

            if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width;
            }

            if (this.position.y > crc2.canvas.height) {
                this.position.y -= crc2.canvas.height;
            }
        }

        draw(): void {
            // console.log("drawn");

            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 10);

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 1)");
            gradient.addColorStop(0.3, "HSLA(0, 100%, 100%, 0)");

            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.restore();
            crc2.closePath();

        }
    }

}