namespace Aufgabe_10 {
    export class Virus {
        position: Vector;
        velocity: Vector;

        constructor() {
            let x: number = 800 * Math.random();
            let y: number = 600 * Math.random();

            this.position = new Vector(x, y);

            // Geschwindigkeit & Richtung
            this.velocity = new Vector((Math.random() * 3), (Math.random() * -3.5 + 2.5));
        }

        move(): void {

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

            let radius: number = 17;
            crc2.save();
            crc2.beginPath();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radius);
            gradient.addColorStop(0, "#6E6E6E");
            gradient.addColorStop(1, "#7D182F");
            crc2.arc(this.position.x, this.position.y, radius, 0, 2 * Math.PI);
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.closePath();
        }

    }
}