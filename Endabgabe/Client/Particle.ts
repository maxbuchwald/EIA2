namespace Endabgabe {
    export class Particle {
        x: number;
        y: number;
        position: Vector;
        size: number;
        // velocity: Vector;


        constructor(_x: number, _y: number, _size: number) {
            this.position = new Vector(_x, _y);
            // this.velocity = new Vector(0.3, 3);
            this.size = _size;
        }
        draw(): void {

            let particlenumber: number = 50;

            let radius: number = 50;


            for (let i: number = 0; i < particlenumber; i++) {
                let x: number = 2 * Math.PI * Math.random();
                let getx: number = 0;
                let gety: number = 0;

                //Big
                if (i % 3 == 0  && this.size == 3) {
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


                crc2.save();

                crc2.translate(this.x, this.y);

                crc2.beginPath();

                crc2.arc(this.position.x + getx, this.position.y + gety, 3, 0, 2 * Math.PI);

                crc2.fill();

                crc2.closePath();

                crc2.restore();
            }

        }

        changecolor(_timeslice: number): void {

            let s: string = "0123456789ABCDEF";
            let c: string = "#";
            for (let i: number = 0; i < 6; i++) {
                c += s[Math.ceil(Math.random() * 15)];
            }
            crc2.fillStyle = c;

        }
    }
}

