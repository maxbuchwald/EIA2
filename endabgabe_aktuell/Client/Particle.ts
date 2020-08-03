namespace Endabgabe {
    export class Particle {
        // x: number;
        // y: number;
        position: Vector;
        size: number;
        colour: number;
        velocity: Vector;


        constructor(_x: number, _y: number, _size: number, _colour: number) {
            this.position = new Vector(_x, _y);
            this.size = _size;
            this.colour = _colour;
            this.velocity = new Vector((Math.random() * -5), (Math.random() * -5.5 + 2.5)); // -0.5 - 0.5 || 2 - 3

        }

        draw(): void {

            let particlenumber: number = 50;

            let radius: number = 50;


            for (let i: number = 0; i < particlenumber; i++) {
                let x: number = 2 * Math.PI * Math.random();
                let getx: number = 0;
                let gety: number = 0;

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


                crc2.save();

                // crc2.translate(this.x, this.y);

                crc2.beginPath();

                crc2.arc(this.position.x + getx, this.position.y + gety, 3, 0, 2 * Math.PI);

                crc2.fill();

                crc2.closePath();

                crc2.restore();
            }

        }

        changecolor(): void {
            
            if (this.colour == 1) {
                let s: string = "0123AB";
                let c: string = "#";
                for (let i: number = 0; i < 6; i++) {
                    c += s[Math.ceil(Math.random() * 5)];
                }
                crc2.fillStyle = c;
            }
            if (this.colour == 2) {
                let s: string = "456CD";
                let c: string = "#";
                for (let i: number = 0; i < 6; i++) {
                    c += s[Math.ceil(Math.random() * 5)];
                }
                crc2.fillStyle = c;

            }
            if (this.colour == 3) {
                let s: string = "789EF";
                let c: string = "#";
                for (let i: number = 0; i < 6; i++) {
                    c += s[Math.ceil(Math.random() * 5)];
                }
                crc2.fillStyle = c;
            }
        }
        move(): void {

            this.position.add(this.velocity);

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
    }
}

