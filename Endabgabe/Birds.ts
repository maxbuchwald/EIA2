namespace Vogelhaus {
    export class Bird {
        position: Vector;
        velocity: Vector;

        constructor() {


            let x: number = 800 * Math.random();
            let y: number = 600 * Math.random();

            this.position = new Vector(x, y);

            // Geschwindigkeit & Richtung
            this.velocity = new Vector((Math.random() * -5), (Math.random() * -5.4 + 2.5));

        }

        move(_timeslice: number): void {



            // Geschwindigkeit & Richtung zu Positon addieren
            this.position.add(this.velocity);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;


        }

        draw(): void {
            // console.log("drawn");

            crc2.beginPath();

            crc2.save();

            crc2.translate(this.position.x, this.position.y);
            crc2.scale(0.2, 0.2);

            crc2.moveTo(0, 50);
            crc2.lineTo(50, 25);
            crc2.bezierCurveTo(50, 25, 80, - 30, 125, 25);
            crc2.bezierCurveTo(125, 25, 150, 50, 175, 50);
            crc2.bezierCurveTo(175, 50, 200, 50, 250, 100);
            crc2.bezierCurveTo(250, 100, 270, 130, 320, 135);
            crc2.bezierCurveTo(320, 135, 240, 130, 230, 100);
            crc2.bezierCurveTo(230, 100, 70, 160, 50, 60);
            crc2.moveTo(0, 50);
            crc2.lineTo(50, 60);

            crc2.moveTo(100, 110);
            crc2.lineTo(90, 170);
            crc2.moveTo(98, 110);
            crc2.lineTo(108, 170);

            crc2.closePath();

            crc2.fillStyle = ("HSL(0, 2%, 1%)");
            crc2.fill();
            // Stroke 
            crc2.scale(2, 2);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.restore();




        }
    }
}