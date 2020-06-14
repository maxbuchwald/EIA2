namespace L08_Canvas_Alley {
    interface Vector {
        x: number;
        y: number;
    }
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement | null;

    function handleLoad(_event: Event): void {
        canvas = document.querySelector("canvas");
        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawBackground();
        drawHumancell({ x: 300, y: 300 });
        drawVirus({ x: 150, y: 250 });
        drawAnticell({ x: 100, y: 200 });

    }
    function drawBackground(): void {
        // if (!canvas)
        //     return;
        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        pattern.fillStyle = "#DB8E7D";
        pattern.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        let rdm1: number = Math.random() * (33 - 27) + 27;
        let rdm2: number = Math.random() * (23 - 17) + 17;
        let rdm3: number = Math.random() * (13 - 7) + 7;
        pattern.moveTo(0, 10);
        pattern.lineTo(rdm3, 10);
        pattern.lineTo(rdm2, 0);
        pattern.lineTo(rdm1, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(rdm1, 20);
        pattern.lineTo(rdm2, 20);
        pattern.lineTo(rdm3, 10);
        pattern.stroke();
        // Math.floor(Math.random() * Math.floor(max))
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawHumancell(_position: Vector): void {
        // let grd = crc2.createRadialGradient(0, 0 , 200, 0, 0, 0);
        crc2.beginPath();
        crc2.arc(_position.x, _position.y, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#2E9AFE";
        crc2.strokeStyle = "#58D3F7";
        crc2.lineWidth = 3;

        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }
    function drawVirus(_position: Vector): void {
        let radius: number = 35;
        crc2.save();
        crc2.beginPath();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radius);
        gradient.addColorStop(0, "#6E6E6E");
        gradient.addColorStop(1, "#7D182F");
        crc2.arc(_position.x, _position.y, radius, 0, 2 * Math.PI);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.closePath();

        // crc2.translate(140, -110);
        // crc2.beginPath();
        // crc2.transform(1, 0.3, -0.3, 1, 0, 0);
        // crc2.strokeStyle = "#FF4000";
        // crc2.rotate(3 * Math.PI / 300);
        // crc2.lineJoin = "round";
        // crc2.moveTo(_position.x + 2, _position.y + 2);
        // crc2.lineTo(_position.x + 10, _position.y + 5);
        // crc2.lineTo(_position.x + 2, _position.y + 8);
        // crc2.lineWidth = 2;
        // crc2.stroke();
        // crc2.closePath();
    }
    function drawAnticell(_position: Vector): void {
        crc2.save();
        crc2.beginPath();
        // crc2.transform(1, 0.6, -0.6, 1, 118, -125);
        crc2.strokeStyle = "green";
        crc2.lineJoin = "round";
        crc2.moveTo(_position.x + 2, _position.y + 2);
        crc2.lineTo(_position.x + 10, _position.y + 5);
        crc2.lineTo(_position.x + 2, _position.y + 8);
        crc2.lineWidth = 2;
        crc2.stroke();
        // crc2.rotate(20 + Math *);

        crc2.closePath();
    }
}
