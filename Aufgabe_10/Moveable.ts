namespace Aufgabe_10 {
    export class Moveable {
        position: Vector;
        velocity: Vector;
    }
    constructor() {
        let x: number = 800 * Math.random();
        let y: number = 600 * Math.random();

        this.position = new Vector(x, y);
    }
    move(): void {
        // console.log("move");
        let temporaryVelocity: Vector = this.velocity;

        // Geschwindigkeit & Richtung zu Positon addieren
        this.position.add(temporaryVelocity);

        if(this.position.x < 0) {
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
}