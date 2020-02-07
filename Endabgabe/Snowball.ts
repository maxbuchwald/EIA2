namespace Vogelhaus {
    export class Snowball {
        x: number;
        y: number;
        timer: number;
        position: Vector;


        constructor(_x: number, _y: number) {
            this.position = new Vector(_x, _y);
        }

        draw(): void {
            if (this.timer >= 0) {
                //console.log(">=0");

                let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 15);
                gradient.addColorStop(0.5, "HSLA(0, 100%, 100%, 1)");
                gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
                crc2.fillStyle = gradient;

        
                crc2.beginPath();
                crc2.moveTo(this.x, this.y);
                crc2.arc(this.x, (this.y - (this.timer * 3)), ((this.timer * this.timer) / 3) + 15, 0, 2 * Math.PI);
                this.x = this.position.x;
                this.y = this.position.y;                
                crc2.closePath();
                crc2.fill();
                this.timer--;

            }
        }
