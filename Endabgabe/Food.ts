namespace Vogelhaus {
    export class Food {
        position: Vector;

        constructor(_x: number, _y: number) {
            this.position = new Vector(_x, _y);
        }

        draw(_position: Vector,_size: number): void {
            let particle: Path2D = new Path2D();
            let nParticles: number = 10;
            let radiusParticle: number = 2;

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = "brown";


            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * _size.x;
                let y: number = - (Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
    
            }

        }

    }


}