namespace Aufgabe_09 {

    export class Cell {
        position: Vector;
        velocity: Vector;
        size: Vector;

        constructor() {
            let x: number = 800 * Math.random();
            let y: number = 600 * Math.random();

            this.position = new Vector(x, y);

            // Geschwindigkeit & Richtung
            this.velocity = new Vector((Math.random() * 0.3), (Math.random() * 0.1 + 0.2)); // -0.5 - 0.5 || 2 - 3
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
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 40);
            gradient.addColorStop(0, "#ffffff00");
            gradient.addColorStop(1, "#2E9AFE");
            crc2.fillStyle = gradient;
            crc2.strokeStyle = "#58D3F7";
            crc2.lineWidth = 3;
            crc2.shadowOffsetX = 1;
            crc2.shadowOffsetY = 1;
            crc2.shadowBlur = 5;
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.save();
            crc2.restore();

        }

    }

}