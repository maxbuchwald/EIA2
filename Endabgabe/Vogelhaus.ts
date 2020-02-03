namespace Vogelhaus {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    // let gap: number = 0.62;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        

        drawBackground1();
        drawBackground2();
        drawSun({ x: 50, y: 50 });

        drawMountains();

        drawTree(660, 260);
        drawTree(770, 320);
        drawTree(580, 300);
        drawTree(700, 300);
        drawTree(630, 340);
        
        drawBirdhouse(80, 500);


    }


    function drawBackground1(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0 , "HSL(196, 80%, 82%)");
        gradient.addColorStop(0.5, "HSL(5, 10%, 99%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, 330);
    }

    function drawBackground2(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(196, 74%, 82%)");
        gradient.addColorStop(0.7, "HSL(121, 42%, 60%)");
        gradient.addColorStop(0.9, "HSL(121, 34%, 52%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 330, crc2.canvas.width, 600);
    }

    function drawMountains(): void {
        // Weiße Fläche Berg Links
        crc2.beginPath();
        crc2.moveTo(0, 330);
        crc2.lineTo(0, 225);
        crc2.lineTo(125, 100);
        crc2.lineTo(175, 330);
        crc2.closePath();
        crc2.fillStyle = "#F1F7FA";
        crc2.fill();

        // Weiße Fläche Berg Mitte
        crc2.beginPath();
        crc2.moveTo(400, 100);
        crc2.lineTo(275, 250);
        crc2.lineTo(250, 225);
        crc2.closePath();
        crc2.fillStyle = "#F1F7FA";
        crc2.fill();

        // Weiße Fläche Berg Rechts
        crc2.beginPath();
        crc2.moveTo(525, 300);
        crc2.lineTo(600, 100);
        crc2.lineTo(400, 300);
        crc2.closePath();
        crc2.fillStyle = "#F1F7FA";
        crc2.fill();

        // Graue Fläche Berg
        crc2.beginPath();
        crc2.moveTo(125, 100);
        crc2.lineTo(75, 330);
        crc2.lineTo(800, 330);
        crc2.lineTo(800, 225);
        crc2.lineTo(600, 100);
        crc2.lineTo(525, 300);
        crc2.lineTo(400, 100);
        crc2.lineTo(275, 250);
        crc2.closePath();
        crc2.fillStyle = "#ABABAB";
        crc2.fill();
    }

    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let r1: number = 15;
        let r2: number = 60;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(50, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(70, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();

    }

    function drawTree(_x: number, _y: number): void {
        //Bäume
        crc2.beginPath();
        crc2.moveTo(_x, _y + 20);
        crc2.lineTo(_x + 30, _y + 120);
        crc2.lineTo(_x - 30, _y + 120);
        crc2.closePath();
        crc2.fillStyle = "#165118";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 30, _y + 100);
        crc2.lineTo(_x - 30, _y + 100);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#165118";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x, _y + 120);
        crc2.lineTo(_x + 5, _y + 120);
        crc2.lineTo(_x + 5, _y + 145);
        crc2.lineTo(_x - 5, _y + 145);
        crc2.lineTo(_x - 5, _y + 120);
        crc2.closePath();
        crc2.fillStyle = "#512b1d";
        crc2.fill();

    }

    function drawBirdhouse(_x: number, _y: number): void {
        
        crc2.fillRect(_x, _y, 20, 100);
    }

}