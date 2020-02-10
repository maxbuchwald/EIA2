namespace Vogelhaus {
    export class Food {
        position: Vector;
        size: Vector;
        cornArray: Vector[] = [];

        drawTime: number; // milliseconds
        timer: number = 5 * 1000; // * 1000 = milliseconds

        constructor(_x: number, _y: number, _x2: number, _y2: number) {
            this.position = new Vector(_x, _y);
            this.size = new Vector(_x2, _y2);
            this.drawTime = Date.now(); // 1000

            let nParticles: number = 10;
            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                let x: number = (Math.random() - 0.5) * this.size.x;
                let y: number = (Math.random() - 0.5) * this.size.y;

                this.cornArray[drawn] = new Vector(x, y);
            }
        }

        draw(): void {

            // If time expired, don't draw and delete
            if (Date.now() > (this.drawTime + this.timer)) {

                // Lösche aus dem arrayFood das Food object
                arrayFood = arrayFood.slice(1); // Löscht erstes Food

                return;
            }

            let particle: Path2D = new Path2D();
            let nParticles: number = 10;
            let radiusParticle: number = 2;


            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                let translation: Vector = this.cornArray[drawn];

                crc2.save();

                crc2.translate(this.position.x + translation.x, this.position.y + translation.y);
                crc2.fillStyle = "brown";

                crc2.fill(particle);

                crc2.restore();
            }

        }

    }


}