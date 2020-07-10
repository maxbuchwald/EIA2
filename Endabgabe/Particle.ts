namespace Endabgabe {
    export class Particle {
        position: Vector;
        size: Vector;


        constructor(_x: number, _y: number, _x2: number, _y2: number) {
            this.position = new Vector(_x, _y);
            this.size = new Vector(_x2, _y2);
            console.log("particle constructor");
        }
        draw(): void {

            let particle: Path2D = new Path2D();
            // let nParticles: number = 10;
            let radiusParticle: number = 2;

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

            crc2.fillStyle = "white";
            console.log("draw");
            
            // for (let drawn: number = 0; drawn < nParticles; drawn++) {

            //     crc2.save();

            //     crc2.translate(this.position.x, this.position.y);
            //     crc2.fillStyle = "white";

            //     crc2.fill(particle);

            //     crc2.restore();
            //     console.log("draw");
            // }
        }
    }
}