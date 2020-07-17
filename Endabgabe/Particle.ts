namespace Endabgabe {
    export class Particle {
        x: number;
        y: number;
        position: Vector;
        size: Vector;
        velocity: Vector;


        constructor(_x: number, _y: number) {
            this.position = new Vector(_x, _y);
            this.velocity = new Vector(0.3, 3);

        }
        draw(): void {


            let particlenumber: number = 50;

            let radius: number = 50;


            for (let i: number = 0; i < particlenumber; i++) {
                let x: number = 2 * Math.PI * Math.random();
                let getx: number;
                let gety: number;


                if (i % 3 == 0) {
                    getx = Math.cos(x) * radius;
                    gety = Math.sin(x) * radius;
                }

                if (i % 3 == 1) {
                    getx = Math.cos(x) * radius * 2 / 3;
                    gety = Math.sin(x) * radius * 2 / 3;
                }

                if (i % 3 == 2) {
                    getx = Math.cos(x) * radius / 3;
                    gety = Math.sin(x) * radius / 3;
                }


                crc2.save();

                console.log(radius);
                crc2.translate(this.x, this.y);

                crc2.beginPath();

                crc2.arc(this.position.x + getx, this.position.y + gety, 3, 0, 2 * Math.PI);

                crc2.fillStyle = "white";
                crc2.fill();

                crc2.closePath();

                crc2.restore();
            }

        }

        move(_timeslice: number): void {

            crc2.rotate(360);
            // crc2.rotate.duration: 3000;
        }
    }
}


// view.animate({
//     rotate: 360,
//     duration: 3000
// });